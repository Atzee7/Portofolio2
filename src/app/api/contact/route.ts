import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Permintaan tidak valid." }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { message: "Periksa kembali nama, email, dan pesan kamu." },
      { status: 400 },
    );
  }

  // Honeypot field for simple bot filtering. Return success to avoid exposing the filter.
  if (result.data.website) {
    return NextResponse.json({ message: "Pesan berhasil dikirim." });
  }

  try {
    await sendContactEmail(result.data);
    return NextResponse.json({ message: "Pesan berhasil dikirim." });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json(
      { message: "Pesan belum berhasil dikirim. Silakan coba lagi." },
      { status: 502 },
    );
  }
}
