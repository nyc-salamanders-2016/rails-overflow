class QuestionContainer extends React.Component {
  render() {
    return (
      <div className="question-container">
        <QuestionBody details={this.props.details} />
        <CommentsContainer />
      </div>
    )
  }
}
