import React from 'react'

const PostHolder = ({ index, postData, refs, postHolderClickHandler, postHolderSubmitClickHandler, postHolderDeleteClickHandler, inputOnchangeHandler }) => {
   
    return (
        <form className={`post-holder post-holder--${index} normal-2`}   onClick={e => postHolderClickHandler(e)}>
            <div className="post-uid">
                <label htmlFor="uid">UID:</label>
                <input disabled name="uid"  type="text" onChange={e => inputOnchangeHandler(e)} value={postData.uid}/>
            </div>

            <div className="post-title">
                <label htmlFor="title">Title:</label>
                <input autoComplete="off" name="title" type="text" defaultValue={postData.title} ref={refs.title}/>
            </div>
            
            <div className="post-date">
                <label htmlFor="date">Date:</label>
                <input disabled name="date" type="text" defaultValue={postData.datePosted} ref={refs.datePosted}/>
            </div>

            <div className="post-content">
                <label htmlFor="content">Content:</label>
                <textarea autoComplete="off" name="content"type="text" defaultValue={postData.content} ref={refs.content}/>
            </div>

            <button onClick={e => postHolderSubmitClickHandler(e)}>Submit</button>
            <button onClick={e => postHolderDeleteClickHandler(e)}>Delete</button>
        </form>
    )
}

export default PostHolder;
