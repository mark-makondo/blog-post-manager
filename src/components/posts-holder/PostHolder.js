import React from 'react'

const PostHolder = ({ index, postData, refs, postHolderClickHandler, postHolderSubmitHandler, inputOnchangeHandler }) => {
   
    return (
        <form className={`post-holder post-holder--${index} normal-2`}  onSubmit={e => postHolderSubmitHandler(e)} onClick={e => postHolderClickHandler(e)}>
            <div className="post-uid">
                <label htmlFor="uid">UID:</label>
                <input disabled autoComplete="off" name="uid"  type="text" onChange={e => inputOnchangeHandler(e)} value={postData.uid}/>
            </div>

            <div className="post-title">
                <label htmlFor="title">Title:</label>
                <input disabled autoComplete="off" name="title" type="text" defaultValue={postData.title} ref={refs.title}/>
            </div>
            
            <div className="post-date">
                <label htmlFor="date">Date:</label>
                <input disabled autoComplete="off" name="date" type="date" defaultValue={postData.datePosted} ref={refs.datePosted}/>
            </div>

            <div className="post-content">
                <label htmlFor="content">Content:</label>
                <textarea disabled autoComplete="off" name="content"type="text" defaultValue={postData.content} ref={refs.content}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default PostHolder;
