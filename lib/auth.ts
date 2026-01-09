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

    const decoded = verifyToken(token);
    
    if (!decoded) {
      throw new Error("Invalid token");
    }

    // We can set headers if we want to pass info down
    // But keeping it simple for now as requested
    
    // call the wrapped route handler
    return handler(request);
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }
};
