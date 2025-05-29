"use client";
import type { RootState } from "../../GlobalRedux/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { fetchCoins } from "../../GlobalRedux/Features/coins/coinsSlice";

export default function Coins() {
  const dispatch = useDispatch();
  const coin = useSelector((state: RootState) => state.coins);
  const darkMode = useSelector((state: RootState) => state.darkMode.darkModeEnabled)
  //console.log(darkMode)

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  //const handleClick = () => {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ background: darkMode ? "black" : "white"}} >
        <h2>List of Coins</h2>
        {coin.loading && <div>Loading...</div>}
        {!coin.loading && coin.error ? <div>Error: {coin.error}</div> : null}
        {!coin.loading && coin.coins.length ? (
          <ul>
            {coin.coins.map((coin: any) => (
              <ul>
                <li>
                  <Link
                    href={`/coin/${coin.id}`}
                    key={coin.id}
                    //onClick={handleClick}
                    style={{color: darkMode ? "white" : "black"}}
                  >
                    {coin.name}
                  </Link>
                </li>
              </ul>
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  );
}
