import Post from "./Post";
import CreatePost from "./CreatePost";
import { useSelector } from "react-redux";
import { PostType } from "../types";

export default function PostFeed() {
  const posts = useSelector((state: any) => state.posts.data);
 
  return (
    <div className="my-2">
      <CreatePost />
      {posts?.map((post: PostType, index: number) => (
        <Post
          key={index}
          user_id={post?.user_id}
          content={post?.content}
          created_at={post?.created_at}
          post_id={post?.post_id}
        />
      ))}
    </div>
  );
}
