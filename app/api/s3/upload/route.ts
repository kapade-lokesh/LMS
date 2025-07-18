import { env } from "@/lib/env";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import z from "zod";
import { v4 as uuidv4 } from "uuid";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "@/lib/s3client";

export const fileUploadSchema = z.object({
  fileName: z.string().min(1, { message: "Filename is required" }),
  contentType: z.string().min(1, { message: "contentType is required" }),
  size: z.number().min(1, { message: "size is required" }),
  isImage: z.boolean(),
});

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    const validation = fileUploadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { fileName, contentType, size, isImage } = validation.data;

    const uniqueKey = `${uuidv4()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
      ContentType: contentType,
      ContentLength: size,
      Key: uniqueKey,
    });

    const presignedURL = await getSignedUrl(s3, command, { expiresIn: 360 });

    const response = {
      presignedURL,
      key: uniqueKey,
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Fail to generate presigned url" },
      { status: 500 }
    );
  }
}
