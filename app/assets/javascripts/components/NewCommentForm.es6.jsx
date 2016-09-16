class NewCommentForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    $.ajax({
      url: event.target.action,
      method: event.target.method,
      data: $(event.target).serialize()
    })
    .done((response) => {
      this.props.onUpdate(response)
    } )
  }

  render () {
    return (
      <form className="new-comment-form" onSubmit={this.handleSubmit} method="post" action={`/${this.props.type}s/${this.props.id}/comments`}>
        <input type="text" placeholder="create a new comment" name="body"/>
        <button type="submit">Submit new comment</button>
      </form>
    )
  }
}
