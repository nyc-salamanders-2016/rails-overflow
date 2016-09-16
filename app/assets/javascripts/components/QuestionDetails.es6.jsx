class QuestionDetails extends React.Component {

  render() {
    // <pre><code>
    //   {JSON.stringify(this.props, null, 4)}
    // </code></pre>
    return (
      <div className="container-fluid" id="show_questions">
        <QuestionContainer details={this.props.details} />
        <AnswersContainer answers={this.props.answers} questionId={this.props.details.id}/>
      </div>
    )
  }
}
