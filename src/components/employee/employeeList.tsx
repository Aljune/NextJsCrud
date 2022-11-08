import { Avatar, Pagination } from "@mantine/core";
import moment from "moment";
import Link from "next/link";
import Logout from "./logoutButton";

const EmployeeList = (props: any) => {
    const { employeeData } = props

    return (
        <div className="flex flex-row items-center justify-center w-full h-screen">
            <div className="flex flex-col items-center justify-center w-full max-w-6xl h-full space-y-5">

                < Logout />

                <div className="flex flex-row items-center justify-between w-full">
                    <h1 className="font-black text-xl">Employee List</h1>
                </div>

                <div className="flex w-full">
                    <table className="border-collapse border border-slate-400 w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-300">ID</th>
                                <th className="border border-slate-300">Profile</th>
                                <th className="border border-slate-300">Name</th>
                                <th className="border border-slate-300">Department</th>
                                <th className="border border-slate-300">Position</th>
                                <th className="border border-slate-300">Employment Type</th>
                                <th className="border border-slate-300">Date Hired</th>
                                <th className="border border-slate-300">Created at</th>
                                <th className="border border-slate-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeData.map((item: any) => (
                                <tr>
                                    <td className="border border-slate-300 p-3">{item.id}</td>
                                    <td className="border border-slate-300 p-3">
                                        <>
                                            <Avatar radius="md" size="xl" src={process.env.NEXT_PUBLIC_API_URL + item.file?.url} /> {/*using mantine*/}
                                        </>

                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        {item.last_name} {item.first_name}
                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        {item.department}
                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        {item.position}
                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        {item.employment_status}
                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        {moment(item.date_hired).format("l")}
                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        {moment(item.created_at).format("l")}
                                    </td>
                                    <td className="border border-slate-300 p-3">
                                        <div className="space-x-1">
                                            <Link href={`/employee/${item.id}`}>
                                                <a className="px-3 py-2 bg-green-600 text-white rounded-xl">
                                                    View
                                                </a>
                                            </Link>
                                            <Link href={`/employee/${item.id}/edit`}>
                                                <a className="px-3 py-2 bg-yellow-600 text-white rounded-xl">
                                                    Update
                                                </a>
                                            </Link>
                                            <Link href={`/employee/${item.id}/delete`}>
                                                <a className="px-3 py-2 bg-red-600 text-white rounded-xl">
                                                    Delete
                                                </a>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList