class AnswerForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    debugger
    event.preventDefault()
    $.ajax({
      url: event.target.action,
      method: event.target.method,
      data: $(event.target).serialize()
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} method="post" action="/questions/1/answers">
        <textarea ref="answer" placeholder="Answer this question" name="body" />
        <button type="submit">Submit new answer</button>
      </form>
    )
  }
}
