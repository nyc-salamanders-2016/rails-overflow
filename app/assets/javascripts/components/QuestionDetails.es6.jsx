class QuestionDetails extends React.Component {
  render() {

    return (
      <div className="container-fluid" id="show_questions">
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
        <QuestionContainer details={this.props.details} />
        <AnswerForm />
        <AnswersContainer answers={this.props.answers}/>
      </div>
    )
  }
}
