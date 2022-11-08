import Router from "next/router";

const DeletePage = (props: any) => {
    const {employee, onSubmit} = props
    return (
        <div>
        <h1>
          Are you sure you want to delete {employee.first_name}{" "}
          {employee.last_name}?
        </h1>
        <div className="flex flex-row justify-evenly">
          <button
            className="px-3 py-2 bg-blue-600 text-white rounded-xl"
            onClick={onSubmit}
          >
            Yes
          </button>
          <button
            className="px-3 py-2 bg-blue-600 text-white rounded-xl"
            onClick={() => {
              Router.push("/");
            }}
          >
            No
          </button>
        </div>
      </div>
    )
}
export default DeletePage