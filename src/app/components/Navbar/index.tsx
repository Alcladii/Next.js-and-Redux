import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [value, setValue] = useState("")
  const [coins, setCoins] = useState(["bitcoin", "ethereum"]);

  const handleChange = (e: { target: { value: any; }; }) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const newCoins = [...coins, value]
    setCoins(newCoins)
    setValue("")
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value}/>
        </form>
      </div>
      <ul>
        {coins.map((coin) => (
          <li key={coin}>
            <Link href={`/coin/${coin}`}>{coin}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
