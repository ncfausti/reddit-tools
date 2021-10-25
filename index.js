function recurseComments(comments) {
  comments.forEach(comment => { 
      console.log(comment.data.author)
      if (comment.data.replies) {
        recurseComments(comment.data.replies.data.children)
      }
   })
}
