import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">Dungeon</h1>
        <h2 className="text-2xl">Dungeon Market!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/Create-account"
          className="w-full bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors">
          Dungeon
        </Link>
        <div className="flex gap-2">
          <span>If you have already have account?</span>
          <Link href="/Login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
