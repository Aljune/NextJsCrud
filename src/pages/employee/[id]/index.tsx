import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import axios from "axios";
import EmployeeDetails from "../../../components/employee/employeeDetails";
import HomePage from "../../../components/employee/home";
import UpdateButton from "../../../components/employee/updateEmployeeBtn";

interface IProps {
  employee: any;
}

const EmployeeID: React.FC<IProps> = ({ employee }) => {
  const page = React.useState({ current_page: 1, per_page: 10 });

  // console.log(employee)
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl h-full space-y-5">
        <div className="flex flex-row items-center justify-evenly w-full">
          <div className="flex flex-row items-center justify-evenly w-full">
            <h1 className="font-black text-xl">Employee Details</h1>
          </div>

          <div className="flex flex-row items-center w-full left-0 justify-end">
          <HomePage />
            <UpdateButton employee={employee} />
          </div>
        </div>

      <EmployeeDetails employee={employee} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  const rest = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/employee/${params?.id}`);

  return {
    props: {
      employee: rest.data,
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const rest = await axios.get(`http://127.0.0.1:3333/employee?limit=300`)

//   console.log(rest, 'data for limit')
//   return {
//     paths: rest.data.data.map((employee: any) => ({
//       params: {
//         id: String(employee.id)
//       }
//     })),
//     fallback: false
//   }
// }

export default EmployeeID;
