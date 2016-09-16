class QuestionDetails extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="show_questions">
        <QuestionContainer />
        <AnswerForm />
        <AnswersContainer />
      </div>
    )
  }
}
