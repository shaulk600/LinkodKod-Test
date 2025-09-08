import "./Content.css";
import { arrToPost } from "../../DbHook/Hoock.ts"
import PostComponents from "../post/PostComponents.tsx";
import { useEffect, useState } from "react";

export default function Content() {

  const [idDiv, setIdDiv] = useState("a");

  const GoSpecificPost = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const descriptionSearch = e.currentTarget.description.value;
    const post = arrToPost.filter((post) => descriptionSearch === post.description);
    <PostComponents postObj={{ post }} />
  }





  useEffect(() => {

  }, [arrToPost])

  return (

    <div id="postsMenu" >
      {
        arrToPost.map(post => {
          return <div id="idDiv" className="posts" onClick={(e) => {
            GoSpecificPost(e);
            setIdDiv(idDiv + idDiv); //return 'aa'
          }}>

            < PostComponents postObj={{
              imageUrl: post.imageUrl, description: post.description, likes: post.likes,
              userName: post.userName, createdAt: post.createdAt
            }} />

          </div>

        })
      }
    </div>

  )
}
