import Link from "next/link"

const UpdateButton = (props: any) => {
    const {employee} = props
    return (
        <Link href={`/employee/${employee.id}/edit`}>
            <a className="px-3 py-2 bg-yellow-600 text-white rounded-xl">
                Update Employee
            </a>
        </Link>
    )
}
export default UpdateButton