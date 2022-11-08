import React from "react";
import Route from "next/router";
import Link from "next/link";
import axios from "axios";
import { DatePicker } from "@mantine/dates";
import { Indicator } from "@mantine/core";
import moment from "moment";
import { parseCookies, destroyCookie } from 'nookies'

const EmployeeForm = (props:any) => {
  const { form, onChange, onSubmit } = props


  return (
    <form
      onSubmit={onSubmit}
    >

      <div className="flex flex-row space-x-12 w-full ">
        <div>
          <label htmlFor="File Upload"></label>
          <input
            type="file"
            name="file"
            onChange={(e: any) => {
              onChange(e.target.files[0], 'uploadFile')
              // setUploadFile(e.target.files[0]);
            }} />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'firstName')
                // setFirstName(e.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'lastName');
              }}
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate</label>
            <DatePicker
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              placeholder={"Birthdate"}
              value={form.birthdate}
              onChange={(e) => {
                onChange(moment(e).format('ll'), 'birthdate') //YYYY-MM-DD //LL
              }}
              renderDay={(date) => {
                const day = date.getDate();
                return (
                  <Indicator
                    size={6}
                    color="red"
                    offset={8}
                    disabled={day !== 16}
                  >
                    <div>{day}</div>
                  </Indicator>
                );
              }}
            />
            {/* <input
                className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
                type="text"
                placeholder="Birthdate"
                value={birthdate}
                onChange={(e: any) => {
                  setBirthdate(e.currentTarget.value);
                }}
              /> */}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>

            <div className="flex flex-row items-center w-full space-x-2">
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                name="male"
                id="male"
                value={"Male"}
                onChange={(e) => {
                  onChange(e.target.value, 'gender')
                }}
                checked={form.gender === "Male"}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="female"
                id="female"
                value={"Female"}
                onChange={(e) => {
                  onChange(e.target.value, 'gender')
                }}
                checked={form.gender === "Female"}
              />
            </div>
          </div>
          <div>
            <label htmlFor="marital_status">Marital Status</label>
            <select
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              name="Marital Status"
              value={form.maritalStatus}
              onChange={(e) => {
                onChange(e.target.value, 'maritalStatus');
              }}
            >
              <option value="" className="text-[#707070]" >Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Divorced">Divorced</option>
              <option value="Separated">Separated</option>
            </select>
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Department"
              value={form.department}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'department');
              }}
            />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Position"
              value={form.position}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'position');
              }}
            />
          </div>
          <div>
            <label htmlFor="date_hired">Date Hired</label>
            <DatePicker
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              placeholder="Date Hired"
              value={form.dateHired}
              onChange={(e) => {
                onChange(moment(e).format('ll'), 'dateHired') //YYYY-MM-DD //LL
              }}
              renderDay={(date) => {
                const day = date.getDate();
                return (
                  <Indicator
                    size={6}
                    color="red"
                    offset={8}
                    disabled={day !== 16}
                  >
                    <div>{day}</div>
                  </Indicator>
                );
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div>
            <label htmlFor="employment_status">Employment Status</label>
            <select
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              name="Employment Status"
              value={form.employmentStatus}
              onChange={(e) => {
                onChange(e.target.value, 'employmentStatus');
              }}
            >
              <option value="" className="text-[#707070]">Employment Status</option>
              <option value="Job Order">Job Order</option>
              <option value="Regular">Regular</option>
              <option value="Temporary Worker">Temporary Worker</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact_number">Contact Number</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Contact Number"
              value={form.contactNumber}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'contactNumber');
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'email');
              }}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Address"
              value={form.address}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'address');
              }}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'city');
              }}
            />
          </div>
          <div>
            <label htmlFor="province">Province</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Province"
              value={form.province}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'province');
              }}
            />
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <input
              className="shadow-xl w-full outline-none border border-blue-400 p-2 rounded-md"
              type="text"
              placeholder="Nationality"
              value={form.nationality}
              onChange={(e: any) => {
                onChange(e.currentTarget.value, 'nationality');
              }}
            />
          </div>
        </div>
      </div>
      <div className="pt-6">
        <button
          className="px-3 py-2 bg-blue-600 text-white rounded-xl active:bg-blue-200"
          type="submit"
          disabled={
            form.firstName !== "" &&
              form.lastName !== "" &&
              form.birthdate !== "" &&
              form.gender !== "" &&
              form.maritalStatus !== "" &&
              form.department !== "" &&
              form.position !== "" &&
              form.dateHired !== "" &&
              form.employmentStatus !== "" &&
              form.contactNumber !== ""
              ? false
              : true
          }
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default EmployeeForm