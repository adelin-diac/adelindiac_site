### BUILDER STAGE ###
FROM node:18-alpine as builder

WORKDIR /app

# Install deps and build static files
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

### RUNNER STAGE ###
FROM nginx:alpine

# Copy static files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80

# Serve static files	
CMD ["nginx", "-g", "daemon off;"]
