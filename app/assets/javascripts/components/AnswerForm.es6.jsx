class AnswerForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    // ajax stuff
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} method="post" action="/questions/1/answers">
        <textarea placeholder="Answer this question" />
        <button type="submit">Submit new answer</button>
      </form>
    )
  }
}
