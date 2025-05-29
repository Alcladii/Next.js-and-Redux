
// export default function RootLayout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//     return (
//      <div>
//           <div style={{ height: "100px", background: "pink" }}>

//           </div>
//           {children}
//       </div>
//     );
//   }
"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar({
        children,
       }: Readonly<{
         children: React.ReactNode;
       }>) {
//   const [value, setValue] = useState("")
//   const [coins, setCoins] = useState(["bitcoin", "ethereum"]);

//   const handleChange = (e: { target: { value: any; }; }) => {
//     setValue(e.target.value)
//   }

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault()
//     const newCoins = [...coins, value]
//     setCoins(newCoins)
//     setValue("")
//   }

  return (
    <div>
      {children}
    </div>
  );
}
  