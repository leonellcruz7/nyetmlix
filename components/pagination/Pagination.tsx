"use client";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const Pagination = () => {
  const query = useSearchParams();
  const router = useRouter();
  const page = query.get("page");
  const [value, setValue] = useState(Number(page) || 1);
  useEffect(() => {
    router.push(`${window.location.pathname}?page=${value}`);
  }, [value]);

  const handlePrev = () => {
    setValue((prev) => prev - 1);
  };
  const handleNext = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div className="flex gap-5 items-center">
      <button
        className="button white"
        disabled={value === 1}
        onClick={handlePrev}
      >
        Prev
      </button>
      <div className="w-10 text-center h-10 flex items-center justify-center">
        <p className="text-lg font-semibold">{page}</p>
      </div>
      <button className="button white" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
