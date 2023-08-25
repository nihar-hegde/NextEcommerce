import { nextauthOptions } from "@/lib/helpers/nextOptions";
import { getServerSession } from "next-auth/next";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import SignoutButton from "@/components/shared/SignoutButton";

const Dashboard = async () => {
  const session = await getServerSession(nextauthOptions);
  if (!session?.user) {
    const url = new URL("/api/auth/signin", "http://localhost:3000");
    url.searchParams.append("callbackUrl", "/dashboard");
    redirect(url.toString());
  }
  return (
    <>
      <div>
        Dashboard page must be secured <span>{session?.user?.email}</span>
      </div>
      <SignoutButton />
    </>
  );
};

export default Dashboard;
