import type { Post } from "../post/Post";

export type User = {
    userName:string,
    password:string,
    email:string,
    posts:Post[],
}