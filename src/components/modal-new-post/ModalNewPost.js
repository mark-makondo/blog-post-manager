import React from 'react';

const ModalNewPost = ({ formClickHandler, handleTextOnChange }) => {
    return(
        <div className="modal-new-post">
            <div className="form-container">
                <form onSubmit={formClickHandler}>
                    <input onChange={e => handleTextOnChange(e)} autoComplete="off" className="normal-2" placeholder="Title" type="text" id="title"/>
                    <textarea id="content" onChange={e => handleTextOnChange(e)}
                        className="normal-1" placeholder="What's on you mind?" cols="30" rows="5">
                    </textarea>
                    <input className="normal-2" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default ModalNewPost;