import React , { useState }  from "react";
import axios from "axios";

export default function CommentCreate({ postId }) {
    const [content, SetContent] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        SetContent('')
    }
    //console.log(postId)
    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input 
                        value={content}
                        onChange={e => SetContent(e.target.value)}
                        className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}