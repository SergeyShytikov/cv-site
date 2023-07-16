import { NextResponse } from "next/server";
import { cv } from "./cv";

export async function GET(req: Request) {
  return NextResponse.json(cv);
}
