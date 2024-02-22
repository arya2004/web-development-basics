import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function getPosts() {
    const res = await fetch("http://localhost:3000/api/getPosts");
    console.log(res);
    return res.json();
    
}


export default async function Home() {
    const data = await getPosts();
    console.log(data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>HElloooooooooooo</h1>
    </main>
  )
}
