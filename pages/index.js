
import AuthForm from '@/components/AuthForm'
import { Inter } from 'next/font/google'
import Head from "next/head"


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
 
  return (
   <>
   <Head>
    <title>Sign In</title>
   </Head>
    <div className="w-full h-96 grid place-items-center">
          {/* authform component. We pass a prop isSignIn to help it understand whether it is sign in or sign up form */}
     <AuthForm isSignIn={true} />
    </div>
   </>
  )
}
/*
*color encoding for based on number of attendance
* A search bar to search employee by name (E)
* Sign in and sign up {E}
* This will be used by HRs
* Add users by HR [O] 
*Filter by date or date range {O}
*/