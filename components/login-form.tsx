"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");

  const sendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        // Handle error
        window.alert("Failed to send OTP");
      } else {
        // OTP sent successfully, move to OTP step
        window.alert("OTP sent successfully");
        setStep("otp");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const verifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      if (!response.ok) {
        // Handle error
        window.alert("Invalid OTP");
      } else {
        // OTP verified successfully, user is logged in
        window.alert("Logged in successfully");
        // Redirect or update UI as needed
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {step == "email" && (
        <Card>
          <CardHeader>
            <CardTitle>Sign up or Log in</CardTitle>
            <CardDescription>
              Enter your email below to sign up or login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => sendOTP(e)}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>
                <Field>
                  <Button type="submit">Send OTP</Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      )}
      {step == "otp" && (
        <Card>
          <CardHeader>
            <CardTitle>Sign up or Log in</CardTitle>
            <CardDescription>
              OTP sent to <span className="text-lg font-bold">{email}</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => verifyOTP(e)}>
              <FieldGroup>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">OTP</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Edit Email?
                    </a>
                  </div>
                  <Input
                      id="password"
                      type="text"
                      required
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                  />
                </Field>
                <Field>
                  <Button type="submit">Submit</Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
