import router from "next/router"
import { destroyCookie } from "nookies"

const Logout = () => {
    return (
        <button onClick={(e) => {
            e.preventDefault()
            destroyCookie({}, 'JWTtoken')
            router.reload()
          }}>logout</button>
    )
}
export default Logout