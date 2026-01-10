import { NextRequest, NextResponse } from "next/server";
import { sign, verify, JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export type Handler = (
  request: NextRequest
) => Promise<NextResponse>;

export const signToken = (payload: string | object | Buffer) => {
  return sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string): JwtPayload | string | null => {
  try {
    return verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};

export const withAuth = (handler: Handler) => async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      throw new Error("No token found");
    }

    const decoded = verifyToken(token) as any;
    
    if (!decoded || !decoded.email) {
      throw new Error("Invalid token or missing email");
    }

    // Pass the user info down via headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-email", decoded.email);
    
    // Create a new request with updated headers
    const authenticatedRequest = new NextRequest(request, {
      headers: requestHeaders,
    });

    // call the wrapped route handler
    return handler(authenticatedRequest);
  } catch (error) {
    console.error("Auth error:", error);
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }
};
