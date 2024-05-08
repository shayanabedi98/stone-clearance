"use client";

import { useEffect, useState } from "react";

export default function Promo() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), 5, 30);
    const timeDifference = targetDate.getTime() - today.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(timeDifference / oneDay);

    setDaysLeft(days);
  });

  return (
    <div className="bg-neutral-900 w-full h-10 text-neutral-100 flex justify-center items-center">
      <p>{daysLeft} days left until offer ends on June 30th, 2024</p>
    </div>
  );
}
