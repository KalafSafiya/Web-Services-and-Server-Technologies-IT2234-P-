const users = require ('./usersDB') 
const posts = require ('../posts/postsDB') 
const comments = require ('../comments/commentsDB') 

function getUser()
{
    return users;
}

function getUserByID(id)
{
  
    const user = users.find((user)=>user.id==id) 
    const postsByUser = posts.filter(post=>post.authorId===id)
    const noOfPosts = postsByUser.length
    const commentsByUser = comments.filter(comment=>comment.userId===id)
    const noOfComments = commentsByUser.length

    user.NumberOfPosts=noOfPosts
    user.NumberOfComments=noOfComments

    return user;
    
    
}


module.exports={getUser,getUserByID}