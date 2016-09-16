class AnswersContainer extends React.Component {
  render() {
    let answers = this.props.answers.map((answer, i) => {
      return <Answer data={answer} key={i}/>
    })
    return(
      <div className="answers-container">
        {answers}
      </div>
    )
  }
}
