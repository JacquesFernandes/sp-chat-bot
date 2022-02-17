import type { NextPage } from 'next';
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Customer Profiling</title>
      </Head>

      <main className="main-background flex justify-center items-center" >
        <div className="min-h-3/5 bg-white w-4/5 p-3 rounded-md" >
          <h1>Links</h1>
        </div>
      </main>

      <footer>

      </footer>
    </>
  );
}

export default Home
