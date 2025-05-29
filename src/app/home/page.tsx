"use client";
import { useAppSelector } from '../hooks';
import Coins from '../home/coins/page'
import Converter from '../home/converter/page'

export default function Home() {
    const {loadCoinsPage} = useAppSelector((state) => state.toggleCoins);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {loadCoinsPage ? <Coins /> : <Converter />}
      </main>
    );
}