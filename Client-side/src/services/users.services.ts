import axios from "axios";
import { User } from "../types";

class Users {
  async getAll() {
    const res = await axios.get("http://localhost:4000/users/");
   
    return res.data;
  }

  async getOne(id: number) {
    const res = await axios.get("http://localhost:4000/users/" + id);
   
    return res.data;
  }
  async insert(user: User) {
    const res = await axios.post("http://localhost:4000/users/", user);
   
    return res.data;
  }

  async delete(id: number) {
    const res = await axios.delete("http://localhost:4000/users/" + id);
   
    return res.data;
  }
}

export default Users;
