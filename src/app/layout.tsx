"use client"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { Providers } from "./GlobalRedux/provider";
import { setDarkMode } from "./GlobalRedux/Features/darkMode/darkModeSlice"
import { RootState } from "./GlobalRedux/store";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );

  function Header() {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkModeEnabled)
    const dispatch = useDispatch();
    console.log(darkMode)

    const handleClick = () => {
      dispatch(setDarkMode())
    }
  
    return (
      <div
        style={{
          height: "100px",
          background: "red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link href="/portfolio">Portfolio</Link>&nbsp;
          <Link href="/home">Home</Link>
        </div>
        <div>
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          Dark mode/Light Mode
        </div>
        </div>
        
      </div>
    );
  }
}
