const query = {
    //modal email
    modalNewPost: () => document.querySelector('.modal-new-post'),
    //modal notif
    modalNotification: () => document.querySelector('.modal-notification'),
    //post holder
    postHolder: () => document.querySelectorAll('.post-holder'),
    postHolderActive: () => document.querySelector('.dashboard-cont-content__info__posts > .post-holder.active'),
    //post method
    postMethodEdit: () => document.querySelector('.post-method__edit'),
    postMethodSelect: () => document.querySelector('.post-method select')
    
}

export default query;