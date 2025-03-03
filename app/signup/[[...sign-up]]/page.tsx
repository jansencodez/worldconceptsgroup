import React from "react";
import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}

export default SignUpPage;
