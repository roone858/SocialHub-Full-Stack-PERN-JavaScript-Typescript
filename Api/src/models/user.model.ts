import { client } from "../database";
import { User } from "../types";
class UsersModel {
  async getOneById(id: number): Promise<User> {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "SELECT * FROM users where user_id=$1 ;",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async getAll(): Promise<User[]> {
    const conn = await client.connect();
    try {
      const result = await conn.query("SELECT * FROM users ;");
      return result.rows;
    } finally {
      conn.release();
    }
  }
  async insert(user: User): Promise<User> {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "INSERT INTO users (name, username, email, bio, password) VALUES ($1, $2, $3, $4, $5) RETURNING *  ;",
        [user.name, user.username, user.email, user.bio, user.password]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
  async delete(id: number): Promise<User> {
    const conn = await client.connect();
    try {
      const result = await conn.query(
        "DELETE FROM users WHERE user_id=$1 RETURNING * ;",
        [id]
      );
      return result.rows[0];
    } finally {
      conn.release();
    }
  }
}

export default UsersModel;
