import Link from "next/link";

export default function Index() {
    return (
        <div>
            <h1>Pricing Demo with Next.js</h1>
            <Link href="/pricing/EUR">Go To Pricing</Link>
        </div>
    )
}
