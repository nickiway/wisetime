"use client";
import { useEffect, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export default function ProductivityPage() {
  return (
    <div className="flex">
      <Calendar />
    </div>
  );
}
