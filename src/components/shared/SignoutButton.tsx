"use client";

import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignoutButton = () => {
  return (
    <>
      <Button variant={"destructive"} onClick={() => signOut()}>
        Logout
      </Button>
    </>
  );
};

export default SignoutButton;
