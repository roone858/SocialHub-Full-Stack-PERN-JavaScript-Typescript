import { client } from "../database";
import { PostType } from "../types";
class PostsModel {
  async getOneById(id: number): Promise<PostType> {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "SELECT * FROM posts where post_id=$1 ;",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async getAll(): Promise<PostType[]> {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM posts ;");
      return result.rows;
    } finally {
      conn.release();
    }
  }
  async insert(post: PostType): Promise<PostType> {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "INSERT INTO posts ( content, created_at, user_id) VALUES ($1, $2, $3) RETURNING *  ;",
        [post.content, post.created_at, post.user_id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async delete(id: number): Promise<PostType> {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "DELETE FROM posts WHERE post_id=$1 RETURNING * ;",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
}

export default PostsModel;
