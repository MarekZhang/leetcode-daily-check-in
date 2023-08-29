import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await axios.get("http://localhost:3002/api/v1/checkin/week");

  const data = res.data;

  return NextResponse.json(data);
}
