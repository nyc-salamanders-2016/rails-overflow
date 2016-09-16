class CommentsContainer extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }

    this.newComment = this.newComment.bind(this)
  }

  componentDidMount() {
    this.setState({comments: this.props.comments})
  }

  newComment(response) {
    new_comment = response.comment
    new_comment.user = response.user
    this.setState({ comments: this.state.comments.concat(new_comment)})
  }

  render() {
    let comments
    if (this.props.comments) {
        comments = this.state.comments.map((comment, i) => {
        return <CommentBody data={comment} key={i}/>
      })
    }
    return (
      <div>
        <NewCommentForm id={this.props.id} type={this.props.type} onUpdate={this.newComment} />
        {comments}
      </div>
    )
  }
}
