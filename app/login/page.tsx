import Link from "next/link";

const Login=()=>{
    return(
        <div>
            <h1>Login</h1>
            <Link href="/">Go to Home page</Link><br/>
            <Link href="/about">Go to About page</Link>
        </div>
    );
}

export default Login;