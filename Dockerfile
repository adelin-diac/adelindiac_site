### BUILDER STAGE ###
FROM node:22-alpine as builder

WORKDIR /app

# Install deps and build static files
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

### RUNNER STAGE ###
FROM node:22-alpine

# Copy only production dependencies and built app
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]