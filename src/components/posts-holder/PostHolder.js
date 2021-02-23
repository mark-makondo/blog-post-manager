import React from 'react'

const PostHolder = ({ index, postData, refs, postHolderClickHandler, postHolderSubmitClickHandler, postHolderDeleteClickHandler, inputOnchangeHandler }) => {
   
    return (
        <form className={`post-holder post-holder--${index} normal-2`}   onClick={e => postHolderClickHandler(e)}>
            <div className="post-uid form-input">
                <label htmlFor="uid">UID:</label>
                <input className="normal-2" disabled name="uid"  type="text" onChange={e => inputOnchangeHandler(e)} value={postData.uid}/>
            </div>

            <div className="post-title form-input">
                <label htmlFor="title">Title:</label>
                <input className="normal-2" autoComplete="off" name="title" type="text" defaultValue={postData.title} ref={refs.title}/>
            </div>
            
            <div className="post-date form-input">
                <label htmlFor="date">Date:</label>
                <input className="normal-2" disabled name="date" type="text" defaultValue={postData.datePosted} ref={refs.datePosted}/>
            </div>

            <div className="post-content form-input">
                <label htmlFor="content">Content:</label>
                <textarea rows="4" cols="50" className="normal-2" autoComplete="off" name="content"type="text" defaultValue={postData.content} ref={refs.content}/>
            </div>

            <div className="post-button">
                <button className="post-submit normal-2" onClick={e => postHolderSubmitClickHandler(e)}>Submit</button>
                <button className="post-delete normal-2" onClick={e => postHolderDeleteClickHandler(e)}>Delete</button>
            </div>
            
        </form>
    )
}

export default PostHolder;
