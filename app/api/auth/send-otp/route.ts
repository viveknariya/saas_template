import { NextResponse } from "next/server";
import { getAdminClient } from "@/lib/db";
import { ApiResponse } from "@/lib/types";

const sql = getAdminClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Generate 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

    // Store OTP in database
    await sql`
      INSERT INTO otps (email, code, expires_at)
      VALUES (${email}, ${otpCode}, ${expiresAt})
    `;

    // TODO: Send email with OTP code
    console.log(`OTP for ${email}: ${otpCode}`);

    return NextResponse.json<ApiResponse>({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: "Failed to send OTP", error: error.message },
      { status: 500 }
    );
  }
}
