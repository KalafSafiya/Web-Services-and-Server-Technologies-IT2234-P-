const users = require ('../user/usersDB') 
const posts = require ('./postsDB') 
const comments = require ('../comments/commentsDB') 

function getPost()
{
    return posts;
}

function getPostByID(id)
{
    const result = [] 
    comments.forEach(comment=>{
        if(comment.postId===id)
        {
            const userInComment = users.find(user=>user.id===comment.userId)
            result.push({
                comment:comment.content,
                commentator:userInComment.username
            })
        }
    })   
    return result
}


module.exports={getPost,getPostByID}