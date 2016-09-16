class CommentsContainer extends React.Component {
  constructor() {
    super()
    // this.listComments = this.listComments.bind(this)
  }

  // listComments() {
  //   if (null) {
  //     return <CommentBody />
  //   }
  // }

  render() {
    let comments
    if (this.props.comments) {
        comments = this.props.comments.map((comment, i) => {
        return <CommentBody data={comment} key={i}/>
      })
    }
    return (
      <div>
        <NewCommentForm />
        {comments}
      </div>
    )
  }
}
