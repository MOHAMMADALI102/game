"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function home(){
  const router = useRouter();
  const nav =(name: string)=>{
    router.push(name)
  }

  return(
    <div>
      <h1>Welcome to my home page</h1>
      <Link href="/login">Go to Login page</Link><br/>
      <Link href="/about">Go to About page</Link><br/>
      <button onClick={()=>nav("/about")}>Go to Login page</button>
    </div>
  )
}