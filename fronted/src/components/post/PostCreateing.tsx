import "./PostCreateing.css";
// import type { Post } from "../../logic/post/Post";

export default function PostCreateing() {
    // const likesCount = likes.length;




    // const file = event.target.files[0];

    return (
        <>
            <section>
                <form action="/post/init" method="post">

                    <div>
                        <input type="file" accept="image/*"></input>
                    </div>
                    <div>
                        <label htmlFor="description"> description </label>
                        <input type="text" name="description" id="description" />
                    </div>
                    <div>
                        <label htmlFor="likes"> {likesCount} </label>
                        <input type="number" name="likes" id="likes" />
                    </div>
                    <div>
                        <label htmlFor="postingName"> Posting name </label>
                        <input type="text" name="postingName" id="postingName" />
                    </div>
                    <div>
                        <label htmlFor="dateUpload"> upload date </label>
                        <input type="text" name="dateUpload" id="dateUpload" />
                    </div>


                </form>
            </section>
        </>
    )
}
