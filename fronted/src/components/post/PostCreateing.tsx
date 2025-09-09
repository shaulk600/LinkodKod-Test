import "./PostCreateing.css";
// import type { Post } from "../../logic/post/Post";
import { useRef, useState } from "react";

export default function PostCreateing() {


    // Upload to the cloud - absorption into a variable:
    // Uploading the image
    const [potoCreation, setPotoCreation] = useState();
    const choiceCreation = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setPotoCreation(e.target.files[0]);
        // במקום זה - לישם את
        const file = URL.createObjectURL(e.target.files[0]);
        setPotoCreation(file);
    }
    // others
    const [description, setDescription] = useState("");
    const [likes, setLikes] = useState([""]);
    const [postingName, setPostingName] = useState("");
    const [uploadDate, setUploadDate] = useState("");




    const objToSend: string[] = useRef([]);
    const send = () => {

        objToSend.current([...objToSend, { imageUrl: potoCreation, description: description, likes: likes, userName: postingName, createdAt: uploadDate }])
    }
    const sendParam = () => {
        const dataToSend = send();
        const res = async () => await fetch('http://localhost:3002/initPost', {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        }).then((data) => { console.log(data) })
    }
    return (
        <>
            <section id="initPost">

                <form action="/post/init" method="post">

                    <div id="imageToInit">
                        <input type="file" onChange={choiceCreation}> To upload a photo - click here </input> <br />
                        <img src={potoCreation}></img>
                    </div>

                    <div>
                        <label htmlFor="description"> description: </label>
                        <input type="text" name="description" id="description" value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
                    </div>
                    {/* <div>
                        <label htmlFor="likes"> {likesCount} </label>
                        <input type="number" name="likes" id="likes" />
                    </div> */}
                    <div>
                        <label htmlFor="postingName"> posting Name: </label>
                        <input type="text" name="postingName" id="postingName" value={postingName} onChange={(e) => setPostingName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="dateUpload"> upload date: </label>
                        <input type="text" name="dateUpload" id="dateUpload" value={uploadDate} onChange={(e) => setUploadDate(e.target.value)} />
                    </div>

                    <div><button type="submit" onSubmit={ }> send your post </button></div>
                </form>
            </section>
        </>
    )
}
