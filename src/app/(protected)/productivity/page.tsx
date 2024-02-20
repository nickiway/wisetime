"use client";
import { useEffect, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

export default function ProductivityPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main>
      <div className="flex">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div>Text test</div>
      </div>
    </main>
  );
}
