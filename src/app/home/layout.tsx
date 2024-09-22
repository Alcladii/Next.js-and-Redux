"use client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setLoadCoinsPage } from "../GlobalRedux/Features/toggleCoinsPage/toggleCoinsSlice";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useAppDispatch();

  return (
      <div style={{ height: "100px", background: "green" }}>
        <div>
          <Link
            href="/home/coins"
            onClick={() => dispatch(setLoadCoinsPage(true))}
          >
            Coins
          </Link>
          &nbsp;
          <Link
            href="/home/converter"
            onClick={() => dispatch(setLoadCoinsPage(false))}
          >
            Converter
          </Link>
        
      </div>
      {/* <Navbar /> */}
      {children}
    </div>
  );
}
