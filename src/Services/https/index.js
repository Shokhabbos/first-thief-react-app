import Axios from "axios";

const instanse = Axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    }
})
export default instanse;