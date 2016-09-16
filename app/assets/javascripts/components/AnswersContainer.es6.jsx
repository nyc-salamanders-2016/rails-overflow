class AnswersContainer extends React.Component {
  constructor() {
    super()
    this.state = { answers: [] }

    this.newAnswer = this.newAnswer.bind(this)
  }

  componentDidMount() {
    this.setState({answers: this.props.answers})
  }

  newAnswer(response) {
    new_answer = response.answer
    new_answer.user = response.user
    this.setState({ answers: this.state.answers.concat(new_answer)})
  }

  render() {
    let answers = this.state.answers.map((answer, i) => {
      return <Answer data={answer} key={i}/>
    })
    return(
      <div className="answers-container">
        <AnswerForm id={this.props.questionId} onUpdate={this.newAnswer}/>
        {answers}
      </div>
    )
  }
}
