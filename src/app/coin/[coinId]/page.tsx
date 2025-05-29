
"use client"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import { fetchSingleCoin } from "../../GlobalRedux/Features/singleCoin/singleCoinSlice";
import type { RootState } from "../../GlobalRedux/store";

export default function City({ params }: { params: { coinId: string } }) {
  const dispatch = useDispatch()
  const coinId = params.coinId

  const coin = useSelector((state: RootState) => state.singleCoin.singleCoinData);


  useEffect(() => {
    if (coinId) {
      dispatch(fetchSingleCoin(coinId as string)); // fetch coin data using coinId
    }
  }, [dispatch, coinId]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{coin && coin.name}</div>
      {<div>All Time High {coin.market_data && coin.market_data.ath.usd}</div>}
    </main>
  );
}
