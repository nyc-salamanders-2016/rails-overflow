class NewCommentForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getCommentPath = this.getCommentPath.bind(this)
  }

  handleSubmit() {
    // do ajax stuff but for now
  }

  getCommentPath() {
    return "/questions/1/comments"
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} method="post" action={this.getCommentPath}>
        <input type="text" placeholder="create a new comment" />
        <button type="submit">Submit new comment</button>
      </form>
    )
  }
}
