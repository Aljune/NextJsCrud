import type { NextPage } from "next";
import React, { useState } from "react";
import Route from "next/router";
import Link from "next/link";
import axios from "axios";
import { DatePicker } from "@mantine/dates";
import { Indicator } from "@mantine/core";
import moment from "moment";
import { parseCookies, destroyCookie } from 'nookies'
import EmployeeForm from "../components/employee/employee";
import HomePage from "../components/employee/home";

const CreateEmployee: NextPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    maritalStatus: '',
    department: '',
    position: '',
    dateHired: '',
    employmentStatus: '',
    contactNumber: '',
    email: '',
    address: '',
    city: '',
    province: '',
    nationality: '',
    uploadFile: ''
  })

  const onChange = (value: any, column: string) => {
    setForm(prev => {
      return { ...prev, [column]: value }
    })
  }

  const parsedToken = parseCookies()

  const onSubmit = async () => {
    const formdata = new FormData()
    formdata.append('banner', form.uploadFile)

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formdata)

    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/employee`, {
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
      cover_id: response.data.file.id
    }, { headers: { authorization: 'Bearer ' + parsedToken.JWTtoken } });
    Route.push("/");

    // console.log(form)

  };
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">

      <div className="flex flex-col items-center justify-center w-full max-w-6xl h-full">

        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-black text-xl">Add Employee</h1>
          <HomePage />
        </div>
        <div className="flex w-full">
          <EmployeeForm form={form} onChange={onChange} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
