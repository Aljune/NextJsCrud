import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import React from "react";
import { GetServerSideProps } from "next";
import { GetServerSidePropsContext } from "next/types";
import { parseCookies } from 'nookies'
import HomePage from "../../../components/employee/home";
import DeletePage from "../../../components/employee/delete";

interface Props {
  employee: any;
}

const DeleteEmployee: React.FC<Props> = ({ employee }) => {

  const parsedToken = parseCookies()
  const onSubmit = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/employee/${employee.id}`, { headers: { authorization: 'Bearer ' + parsedToken.JWTtoken } });
    Router.push("/");
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-row justify-evenly w-full ">
          <h1 className="font-black text-xl">Delete Employee</h1>
          <HomePage />
        </div>
        <DeletePage employee={employee} onSubmit={onSubmit} />
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
//     const rest = await axios.get(`http://127.0.0.1:3333/employee?limit=300`)
//     return {
//         paths: rest.data.data.map((employee: any) => ({
//             params: {
//                 id: String(employee.id)
//             }
//         })),
//         fallback: false
//     }
// }

export default DeleteEmployee;
