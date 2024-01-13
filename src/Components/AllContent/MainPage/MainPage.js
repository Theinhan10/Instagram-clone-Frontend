import React, { useState } from 'react'
import Post from '../Posting/Post'
import "./MainPage.css"
import pic from "../../../images/DSC09653.jpeg";

export default function MainPage() {
    const [postList, setPostList] = useState([
        {
            "id": "12",
            "userName": "John",
            "postImage": pic, 
            "likes": "124"
        },
        {
            "id": "12",
            "userName": "John",
            "postImage": pic, 
            "likes": "124"
        },
        {
            "id": "12",
            "userName": "John",
            "postImage": pic, 
            "likes": "124"
        }
    ]);



  return (
    <div>
        {
            postList.map((post,index) =>((
                <Post id={post.id} userName={post.userName} postImage={post.postImage} likes={post.likes}/>
            )))
        }
    </div>
  )
}
