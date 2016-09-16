class QuestionDetails extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="show_questions">
        <pre><code>
          {JSON.stringify(this.props.details, null, 2)}
        </code></pre>
        <QuestionContainer />
        <AnswerForm />
        <AnswersContainer />
      </div>
    )
  }
}
