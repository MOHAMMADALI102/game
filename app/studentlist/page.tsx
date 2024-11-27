import Link from "next/link";

export default function StudentList() {
    return (
        <>
            <h1>Student List:</h1>
            <ul>
                <li>
                    <Link href="/studentlist/mohammadali">Mohammad Ali</Link>
                </li>
                <li>
                    <Link href="/studentlist/shabbir">Shabbir</Link>
                </li>
                <li>
                    <Link href="/studentlist/abbas">Abbas</Link>
                </li>
                <li>
                    <Link href="/studentlist/shaid">Shaid</Link>
                </li>
            </ul>
        </>
    );
}
