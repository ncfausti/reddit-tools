function recurseComments(comments, accumulator) {
  comments.forEach(comment => {
    if (comment.data.author in accumulator) {
      accumulator.push({ author: comment.data.author, comment });
    }
    else {
      accumulator.push({ author: comment.data.author, comment });
    }

    if (comment.data.replies) {
      recurseComments(comment.data.replies.data.children, accumulator)
    }
  })
  return accumulator;
}