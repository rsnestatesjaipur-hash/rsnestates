import { NextResponse } from "next/server";

import { getAllLocalities } from "@/lib/repositories/localityRepository";

export async function GET() {
  try {
    const localities =
      await getAllLocalities();

    return NextResponse.json(
      localities.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Failed to fetch localities.",
      },
      {
        status: 500,
      }
    );
  }
}