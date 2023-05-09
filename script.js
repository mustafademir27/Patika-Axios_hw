import axios from "axios"

async function getData(user_id){
    const {data : user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

    const {data : post} = await axios ("https://jsonplaceholder.typicode.com/posts?userId=" + user_id && "https://jsonplaceholder.typicode.com/posts?id=" + user_id );

    console.log("user :", user);
    console.log("post : ", post);
    
}


export default getData;