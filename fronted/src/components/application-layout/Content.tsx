import "./Content.css";
// import { arrToPost } from "../../DbHook/Hoock.ts" //now Server is ...
import PostComponents from "../post/PostComponents.tsx";
import { useEffect, useState } from "react";

import { getAllPosts } from "../../logic/api/APIPost.ts";
// import type { Post } from "../../logic/post/Post.ts";

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



  const [posts, setPosts] = useState([{
    id:0,
    imageUrl:`/`,
    description:"",
    likes:[],
    userName:"",
    createdAt:""
  }]);

  // getPosts
  useEffect(() => {

    getAllPosts().then(data => setPosts(data.slice(0, 2)));
  }, []);

  return (
    <div id="postsMenu" >

      {posts && (
        posts.map(post => (
        <div id={`${post.id}Div`} className="posts">
          < PostComponents postObj={{
            imageUrl: post.imageUrl, description: post.description, likes: post.likes,
            userName: post.userName, createdAt: post.createdAt
          }} idToBtn={post.id || 'aa'} />
        </div>
      )))/* (displayPosts(posts) ) */}
    </div >
  )
}
