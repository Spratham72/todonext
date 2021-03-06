import Head from 'next/head';


import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
export const getStaticProps=async ()=>{
    const res=await fetch('http://localhost:3004/todos');
    const data=await res.json();
    return {
        props:{data}
    }   
}
export default function Home({data}) {
 console.log(data)
 const router=useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         TODO LIST
        </h1> 
        <br/>
        <br/>
      <div>
     
       </div>
        <div className={styles.grid}> 
        {data.map(el=>{return el.id>0?<div key={el.id} className={styles.card}>
            <h2>{el.todo}</h2>
            <p onClick={()=>router.push("/edit")}>Edit</p>
          </div>:null

        })}
        </div>
      </main>


    </div>
  )
}
