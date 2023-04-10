import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from "next/image"
import logo from "../../public/Group 1.png"
import axios from 'axios'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [issues, setIssues] = useState([]);


  useEffect(() => {
    async function fetchIssues() {
      const response = await axios.get(
        'https://api.github.com/repos/gxlpes/watech/issues'
      );
      console.log(response.data)
      setIssues(response.data);
    }
    fetchIssues();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
        <Image src={logo} alt="image" />
        <div className="flex gap-5">
          <input className="border-2 rounded p-2 w-25 focus: outline-1 focus: outline-gray-500" type="text" placeholder='Tech name' />
          <button className="border-2 border-primary p-2 px-5 rounded text-dark" type="submit">Search</button>
        </div>
        <div>
          {issues.map((issue: any) => (
            <>
              <p key={issue.id}>{issue.title}</p>
              <p>{issue.body}</p>
            </>
          ))}
        </div>

      </main>

    </>
  )
}

export default Home;