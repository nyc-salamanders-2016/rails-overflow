class CommentBody extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.data.body}</p>
        <p>- {this.props.data.user.username} </p>
        <CommentsContainer />
      </div>
    )
  }
}
