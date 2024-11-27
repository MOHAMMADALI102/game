"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="home">{
            pathname!== "/login/loginteacher" ?
                <ul>
                <li><h1>Login Page</h1></li>
                <li>
                    <Link href="/login">Login main</Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">Login main</Link>
                </li>
                <li>
                    <Link href="/login/loginstudent">Login main</Link>
                </li>
            </ul>:null
}
            {children}
        </div>
    );
}
