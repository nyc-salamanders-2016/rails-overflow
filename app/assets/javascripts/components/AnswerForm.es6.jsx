class AnswerForm extends React.Component {
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

  render() {
    return(
      <form onSubmit={this.handleSubmit} method="post" action={`/questions/${this.props.id}/answers`}>
        <textarea ref="answer" placeholder="Answer this question" name="body" />
        <button type="submit">Submit new answer</button>
      </form>
    )
  }
}
