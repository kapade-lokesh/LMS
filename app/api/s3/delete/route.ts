import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { s3 } from "@/lib/s3client";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const key = body.Key;

    if (!key) {
      return NextResponse.json(
        { error: "Missing or invalid object key" },
        { status: 400 }
      );
    }

    const command = new DeleteObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
      Key: key,
    });

    await s3.send(command);

    return NextResponse.json(
      { error: "File deleted succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Missing or invalid object key" },
      { status: 400 }
    );
  }
}
