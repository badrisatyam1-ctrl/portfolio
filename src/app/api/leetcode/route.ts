import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch("https://leetcode-stats-api.herokuapp.com/Badri1888", { cache: "no-store" });
    
    if (!response.ok) {
      throw new Error("Failed to fetch LeetCode stats");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}
