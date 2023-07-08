
import PostFeed from "../component/PostFeed";


export default function Home() {
  return (
    <div className="home d-flex p-3   " >
      <div className="left-section my-5"  style={{width:"70%"}}>
        <PostFeed />
      </div>
      {/* <div className="right-section my-4" style={{width:"30%"}}>
        <MostPopular />
      </div> */}
    </div>
  );
}
