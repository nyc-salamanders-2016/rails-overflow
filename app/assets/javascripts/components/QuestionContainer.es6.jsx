class QuestionContainer extends React.Component {
  render() {
    return (
      <div className="question-container">
        <QuestionBody />
        <CommentsContainer />
      </div>
    )
  }
}