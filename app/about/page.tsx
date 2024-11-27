import Link from "next/link";
import React from "react";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <Link href="/login">Go to Login page</Link><br/>
            <Link href="/">Go to Home page</Link>
        </div>
    );
}

export default About;