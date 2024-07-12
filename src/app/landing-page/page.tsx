"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function LandingPage() {
  console.log("landing page loaded");
  const [state, setState] = useState("");
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default LandingPage;
