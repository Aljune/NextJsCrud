import Link from "next/link"

const AddEmployee = () => {
    return (
        <Link href="/new-employee">
            <a className="px-3 py-2 bg-blue-600 text-white rounded-xl">
                Add Employee
            </a>
        </Link>
    )
}
export default AddEmployee