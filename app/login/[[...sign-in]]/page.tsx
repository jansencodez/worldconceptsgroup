"use client";

import { SignIn } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function SingInPage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/investor-portal");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}

export default SingInPage;
