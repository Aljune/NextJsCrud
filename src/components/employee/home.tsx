import Link from "next/link"

const HomePage = () => {
    return (
        <Link href="/">
            <a className="px-3 py-2 bg-blue-600 text-white rounded-xl">Home</a>
        </Link>
    )
}
export default HomePage