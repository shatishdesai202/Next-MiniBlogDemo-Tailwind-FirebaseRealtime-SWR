import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 w-full py-9 z-50 bg-yellow-100">
      <div className="flex justify-between">
        <div>
          <Link href="/">
            <div className="cursor-pointer">
              <span className="ml-2 text-red-400 text-xl">
                Next.js Blog Demo
              </span>
              <span className="text-green-700 text-xl">
                (Next-Tailwind-FirebaseRealtime-swr)
              </span>
            </div>
          </Link>
        </div>
        <div className="text-xl mr-14 underline">
          <Link href="/blog">All blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
