import type { NextPage } from "next";
import React from "react";
// import axios from "../src/common/axiosInterceptor";
import axios from "axios";
import interceptAxios from "../common/axiosInterceptor";
import { parseCookies, destroyCookie } from 'nookies'
import EmployeeList from "../components/employee/employeeList";
import { Pagination } from "@mantine/core";

const Home: NextPage = () => {
  const [page, setPage] = React.useState<{
    current_page: number;
    per_page: number;
    total?: number;
    last_page?: number;
  }>({ current_page: 1, per_page: 10 });

  const [employeeData, setEmployee] = React.useState([]);
  const parsedToken = parseCookies()

  const test = async (pageNumber?: number) => {
    const rest = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/employee?page=${pageNumber || 1}&limit=${page.per_page
      } ` , { headers: { authorization: 'Bearer ' + parsedToken.JWTtoken } });
    setEmployee(rest.data.data);
    setPage(rest.data.meta);
  };

  React.useEffect(() => {
    test();
  }, []);

  return (
    <div>
        <EmployeeList employeeData={employeeData} />
      <div className="flex flex-col items-center justify-center w-full max-w-6xl h-full space-y-5">
        <Pagination
          page={page.current_page}
          onChange={(page) => {
            setPage((prev) => {
              return { ...prev, current_page: page };
            });
            test(page);
          }}
          total={page.last_page || 0}
        />
      </div>    
    </div>
  )
}

export default Home;
