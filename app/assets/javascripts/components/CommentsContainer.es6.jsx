class CommentsContainer extends React.Component {
  constructor() {
    super()
    this.listComments = this.listComments.bind(this)
  }
  listComments() {
    if (null) {
      return <CommentBody />
    }
  }
  render() {
    return (
      <div>
        {this.listComments()}
        <NewCommentForm />
      </div>
    )
  }
}
