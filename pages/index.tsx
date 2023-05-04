import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function createEnvelope() {
    fetch('/api/create-envelope')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button onClick={createEnvelope}>Make API call</button>
      </div>
    </main>
  )
}
