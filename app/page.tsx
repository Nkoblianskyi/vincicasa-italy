import { Hero } from "@/components/hero"
import { LotteryInfo } from "@/components/lottery-info"
import { LatestWinner } from "@/components/latest-winner"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <LatestWinner />
      <LotteryInfo />
    </main>
  )
}
