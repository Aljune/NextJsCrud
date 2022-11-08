import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import React, { UIEvent, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { GetServerSidePropsContext } from "next/types";
import { DatePicker } from "@mantine/dates";
import { Indicator } from "@mantine/core";
import moment from "moment";
import { parseCookies } from 'nookies'
import EmployeeForm from "../../../components/employee/employee";
import HomePage from "../../../components/employee/home";

interface IProps {
  employee: any;
}

const UpdateEmployee: React.FC<IProps> = ({ employee }) => {

  const [form, setForm] = useState({
    firstName: employee.first_name,
    lastName: employee.last_name,
    birthdate: employee.birthdate,
    gender: employee.gender,
    maritalStatus: employee.marital_status,
    department: employee.department,
    position: employee.position,
    dateHired: employee.date_hired,
    employmentStatus: employee.employment_status,
    contactNumber: employee.contact_number,
    email: employee.email,
    address: employee.address,
    city: employee.city,
    province: employee.province,
    nationality: employee.nationality,
    uploadFile: employee.uploadFile
  })
  // const [firstName, setFirstName] = React.useState(employee.first_name);
  // const [lastName, setLastName] = React.useState(employee.last_name);
  // const [birthdate, setBirthdate] = React.useState(employee.birthdate);
  // const [gender, setGender] = React.useState<string>(employee.gender);
  // const [maritalStatus, setMaritalStatus] = React.useState<string>(
  //   employee.marital_status
  // );
  // const [department, setDepartment] = React.useState(employee.department);
  // const [position, setPosition] = React.useState(employee.position);
  // const [dateHired, setDateHired] = React.useState(employee.date_hired);
  // const [employmentStatus, setEmploymentStatus] = React.useState(
  //   employee.employment_status
  // );
  // const [contactNumber, setContactNumber] = React.useState(
  //   employee.contact_number
  // );
  // const [email, setEmail] = React.useState(employee.email);
  // const [address, setAddress] = React.useState(employee.address);
  // const [city, setCity] = React.useState(employee.city);
  // const [province, setProvince] = React.useState(employee.province);
  // const [nationality, setNationality] = React.useState(employee.nationality);

  // const [emploayeeInfo, setImployeeInfor] = useState({firstName: '', lastName: ''})
  const [initial, setInitial] = useState<boolean>(true)

  // useEffect(() => {
  // 	if(initial){
  // 		onChange(employee.gender, 'gender')
  // 	setInitial(false)
  // 	}
  // }, [initial])


  const parsedToken = parseCookies()

  const onChange = (value: any, column: string) => {
    setForm(prev => {
      return { ...prev, [column]: value }
    })
  }
  console.log(setForm, "palihug ko wagtang na axniety")

  const onSubmit = async (event: UIEvent) => {
    event.preventDefault()
    // const formdata = new FormData()
    // formdata.append('banner', form.uploadFile)

    // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formdata)

    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/employee/${employee.id}`, {
      first_name: form.firstName,
      last_name: form.lastName,
      birthdate: form.birthdate,
      gender: form.gender,
      marital_status: form.maritalStatus,
      department: form.department,
      position: form.position,
      date_hired: form.dateHired,
      employment_status: form.employmentStatus,
      contact_number: form.contactNumber,
      email: form.email,
      address: form.address,
      city: form.city,
      province: form.province,
      nationality: form.nationality,
      // cover_id: response.data.file.id
    }, { headers: { authorization: 'Bearer ' + parsedToken.JWTtoken } });
    Router.push("/");
  };

  // console.log('gender' , gender)
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl h-full space-y-5">
        
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-black text-xl">Update Employee</h1>
          <HomePage />
        </div>
        
        <div className="flex w-full">
          <EmployeeForm form={form} onChange={onChange} onSubmit={onSubmit} />
        
        </div>
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
// 	const rest = await axios.get(`http://127.0.0.1:3333/employee?limit=300`)

// 	return {
// 		paths: rest.data.data.map((employee: any) => ({

// 			params: {
// 				id: String(employee.id)
// 			}

// 		})),
// 		fallback: false

// 	}
// }

export default UpdateEmployee;
