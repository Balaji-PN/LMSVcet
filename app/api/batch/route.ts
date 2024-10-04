import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const dept = url.searchParams.get("dept");
  console.log(dept);
  if (!dept) return NextResponse.json(["Choose Dept First"]);
  const batch = await prisma.batch.findMany();
  return NextResponse.json(batch, { status: 200 });
}
