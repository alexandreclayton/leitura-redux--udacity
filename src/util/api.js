const api = "http://localhost:3001";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// Category
export const getAllCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);

// Post
export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json());

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json());

export const getPostsDetail = (Id) =>
    fetch(`${api}/posts/${Id}`, { headers })
        .then(res => res.json())

export const savePost = (PostEntity) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(PostEntity)
    }).then(res => res.json());

export const editPost = (PostEntity) =>
    fetch(`${api}/posts/${PostEntity.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(PostEntity)
    }).then(res => res.json());

export const removePost = (post_id) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json());

export const votePost = (post_id, voteOption) =>
    fetch(`${api}/posts/${post_id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voteOption)
    }).then(res => res.json());

// Comment
export const getAllCommentsByPostId = (post_id) =>
    fetch(`${api}/posts/${post_id}/comments`, { headers })
        .then(res => res.json());

export const getCommentDetail = (comment_id) =>
    fetch(`${api}/comments/${comment_id}`, { headers })
        .then(res => res.json());

export const saveComment = (CommentEntity) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(CommentEntity)
    }).then(res => res.json());

export const editComment = (CommentEntity) =>
    fetch(`${api}/comments/${CommentEntity.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(CommentEntity)
    }).then(res => res.json());

export const deleteComment = (comment_id) =>
    fetch(`${api}/comments/${comment_id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json());

export const voteComment = (comment_id, voteOption) =>
    fetch(`${api}/comments/${comment_id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voteOption)
    }).then(res => res.json());