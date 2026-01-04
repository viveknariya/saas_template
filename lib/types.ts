export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface User {
  id: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface Otp {
  id: string;
  email: string;
  code: string;
  expires_at: Date;
  used: boolean;
  created_at: Date;
}