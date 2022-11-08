const EmployeeDetails = (props: any) => {
    const {employee} = props
    
    return(
<div className="flex flex-row space-x-12 w-full ">
          <div className="flex flex-col w-full items-center justify-evenly">
            <div className="flex flex-col w-full">
              <h1>Employee ID</h1>
              <h1>{employee.id}</h1>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee First Name</h1>
              <h3>{employee.first_name}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Last Name</h1>
              <h3>{employee.last_name}</h3>
              </div>
            <div className="flex flex-col w-full">
              <h1>Employee Birthdate</h1>
              <h3>{employee.birthdate}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Gender</h1>
              <h3>{employee.gender}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Marital status</h1>
              <h3>{employee.marital_status}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Department</h1>
              <h3>{employee.department}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Position</h1>
              <h3> {employee.position}</h3>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col w-full">
              <h1>Employee Date Hired</h1>
              <h3> {employee.date_hired}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Employment Status</h1>
              <h3> {employee.employment_status}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Contact Number</h1>
              <h3> {employee.contact_number}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Email</h1>
              <h3> {employee.email}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Address</h1>
              <h3> {employee.address}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee City</h1>
              <h3> {employee.city}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee City</h1>
              <h3> {employee.province}</h3>
            </div>
            <div className="flex flex-col w-full">
              <h1>Employee Nationality</h1>
              <h3> {employee.nationality}</h3>
            </div>
          </div>
        </div>
    )
}
export default EmployeeDetails