import axios from "axios";
import { PostType } from "../types";

class Posts {
  async getAllPosts() {
    const res = await axios.get("http://localhost:4000/posts/");
    
    return res.data;
  }

  async getOne(id: number) {
    const res = await axios.get("http://localhost:4000/posts/" + id);
    
    return res.data;
  }
  async insert(post: PostType) {
    const res = await axios.post("http://localhost:4000/posts/", post);
    
    return res.data;
  }

  async delete(id: number) {
    const res = await axios.delete("http://localhost:4000/posts/" + id);
    
    return res.data;
  }
}

export default Posts;
