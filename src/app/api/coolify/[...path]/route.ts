import { NextRequest } from "next/server";

const COOLIFY_BASE_URL = "https://coolify.adelindiac.site";

async function proxy(
  req: NextRequest,
  ctx: { params: Promise<{ path: string[] }> }
) {
  const { path } = await ctx.params;
  const auth = req.headers.get("authorization");
  if (!auth) {
    return Response.json(
      { error: "Missing Authorization header" },
      { status: 401 }
    );
  }

  const url = new URL(req.url);
  const target = `${COOLIFY_BASE_URL}/api/v1/${path.join("/")}${url.search}`;

  const init: RequestInit = {
    method: req.method,
    headers: {
      Authorization: auth,
      Accept: "application/json",
      ...(req.headers.get("content-type")
        ? { "Content-Type": req.headers.get("content-type")! }
        : {}),
    },
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = await req.text();
  }

  const upstream = await fetch(target, init);
  const body = await upstream.text();
  return new Response(body, {
    status: upstream.status,
    headers: {
      "content-type":
        upstream.headers.get("content-type") ?? "application/json",
    },
  });
}

export {
  proxy as GET,
  proxy as POST,
  proxy as PUT,
  proxy as DELETE,
  proxy as PATCH,
};
