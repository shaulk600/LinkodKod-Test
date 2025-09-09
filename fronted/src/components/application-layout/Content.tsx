import "./Content.css";
// import { arrToPost } from "../../DbHook/Hoock.ts" //now Server is ...
import PostComponents from "../post/PostComponents.tsx";
import { useEffect, useState } from "react";

import { getAllPosts } from "../../logic/api/APIPost.ts";
import type { Post } from "../../logic/post/Post.ts";

export default function Content() {

  const [idDiv, setIdDiv] = useState("a");
  const [idToBtnLike, setIdToBtnLike] = useState('like1');

  //This method is used to change the name of the button ID when creating a new component.

  // const sendIdToButton = (): string => {
  //   setIdToBtnLike(idToBtnLike + idToBtnLike);
  //   return idToBtnLike;
  // }

  // const GoSpecificPost = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   const descriptionSearch = e.currentTarget.description.value;
  //   const post = arrToPost.filter((post) => descriptionSearch === post.description);
  //   <PostComponents postObj={{ post }} />
  // }



  const [posts, setPosts] = useState(null);

  const displayPosts = (data:[]) => {

    return data.map((post: Post) => {
      return <div id={`${post.id}Div` || 'aa'} className="posts">
        < PostComponents postObj={{
          imageUrl: post.imageUrl, description: post.description, likes: post.likes,
          userName: post.userName, createdAt: post.createdAt
        }} idToBtn={post.id || 'aa'} />
      </div>
    })

  
    // setPosts(displayPosts);
}

useEffect(() => {
  debugger
  getAllPosts().then((data) => {
    console.log('dataPost:', data);
    // getPosts(data);
  })
    
  }, []);

return (
  <div id="postsMenu" >
    {posts}
  </div >
)
}
