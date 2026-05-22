import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const redis = Redis.fromEnv();
const KEY = "feketetop:counter";

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
  Pragma: "no-cache",
  Expires: "0",
} as const;

export async function GET() {
  const value = (await redis.get<number>(KEY)) ?? 0;
  return NextResponse.json({ value }, { headers: NO_CACHE_HEADERS });
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as { action?: string };
  let value: number;
  if (body.action === "increment") {
    value = await redis.incr(KEY);
  } else if (body.action === "decrement") {
    value = await redis.decr(KEY);
  } else {
    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400, headers: NO_CACHE_HEADERS },
    );
  }
  return NextResponse.json({ value }, { headers: NO_CACHE_HEADERS });
}
