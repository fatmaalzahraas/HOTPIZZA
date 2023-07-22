'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function NotFound() {
    const router = useRouter();
    
    return (
        <div className="bg-hero flex items-center justify-center h-screen flex-col gap-y-5">
            <h1 className="text-white text-[1.3rem] font-semibold xxs:text-[1.2rem] xxs:w-[80%] text-center">404 | The requested order does not exist.</h1>
            {/*<Link href='/' className="text-secondary underline font-medium text-[1.1rem]">Back To Home</Link>*/}
            <button className="text-secondary font-medium  underline text-[1.1rem]" onClick={() => router.replace('/')}>Back To Home</button>
        </div>
    )
}