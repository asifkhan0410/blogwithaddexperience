import React, { useState } from 'react'
import like from './images/like.svg'
import commentsvg from './images/comment.svg'
import pic from './images/pic.png'

function Posts() {
    const [comment,setComment] = useState('')
    function addComment(e){
        e.preventDefault();
        localStorage.setItem('comment', JSON.stringify(comment));
        setComment('');
    }
    return (
    <div className="posts">
        <div className="profilepicture"><img src={pic} alt="profilepicture"/></div>
        <div className="post">
            <h4>Asif Ali Khan, Front-end Web Developer, Google India</h4>
            <h6>Posted a day ago</h6>
            <a href="https://asifalikhandev.vercel.app/"><h2>Why I am the best fit for the Internship Role?</h2></a>
            <span>React, HTML, CSS</span>
            <p>
                I am a Front-end Developer who is doing interesting things that
                matter. I believe the learning curve should never have a negative
                slope. I am always sharpening my axe(Javascript & React).{" "}
            </p>
            <div className="engagement">
                <span><img src={like} alt='like'/> 2000</span>
                <span> <img src ={commentsvg} alt ='comment'/> 213</span>
            </div>
            <div className="comment">
                <input placeholder="Add comment here" value={comment} onChange={(e)=> setComment(e.target.value)}></input>
                <button onClick={addComment}>Add</button>
            </div>
        </div>
    </div>
    )
}

export default Posts
