class QuestionDetails extends React.Component {
  render() {
    question_details = this.props.details
    question_details.score = this.props.question_score
    question_details.username = this.props.question_username
    return (
      <div className="container-fluid" id="show_questions">
        <pre><code>
          {JSON.stringify(this.props, null, 2)}
          {JSON.stringify(question_details, null, 2)}
        </code></pre>
        <QuestionContainer details={question_details} />
        <AnswerForm />
        <AnswersContainer />
      </div>
    )
  }
}
