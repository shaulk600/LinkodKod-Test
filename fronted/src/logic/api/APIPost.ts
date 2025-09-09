const APIURL: string = 'http://localhost:3002'

export async function getAllPosts() {
    // try {
        const res = await fetch("http://localhost:3002/read").then((data)=>console.log(data))
        // console.log(res);
        // return await res.json();
    // } catch (err) {
    //     console.log('errGetAllPosts', err)
    // }

}

export async function initPoat(data: object) {
    const response = await fetch(`${APIURL}/initPost`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function updatePost(dataToUpdate: object, idPost: string) {
    const response = await fetch(`${APIURL}/updatePost/id=${idPost}`, { //queryParams
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToUpdate),
    });
    return await response.json();
}

export async function deletePost(idPost: string) {
    // valid if your accounting..
    const response = await fetch(`${APIURL}/deletePost/id=${idPost}`, { //queryParams
        method: 'DELETE',
    });
    return await response.json();
}