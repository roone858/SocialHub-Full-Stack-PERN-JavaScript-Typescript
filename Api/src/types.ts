export interface User {
  user_id: number;
  name: string;
  address: string;
  username: string;
  email: string;
  password: string;
  bio: string;
}

export interface PostType {
  post_id: number;
  content: string;
  created_at: string;
  user_id: number;
}

export interface Comment {
  comment_id: number;
  content: string;
  created_at: string;
  user_id: number;
  post_id: number;
}

export interface Like {
  like_id: number;
  created_at: string;
  user_id: number;
  post_id: number;
}

export interface Friendship {
  friendship_id: number;
  user_id1: number;
  user_id2: number;
  created_at: string;
}
