import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  await prisma.lead.create({ data: body });
  return NextResponse.json({ success: true });
}