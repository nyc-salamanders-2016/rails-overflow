class QuestionBody extends React.Component {
  render() {
    const { title, score, user, body } = this.props.details
    return(
      <div className="question-details">
        <div className="page-header">
          <h1 className="display-3">{title}</h1>
        </div>
        <br/>
        <p className="pull-xs-right"><small>Score: </small><span className="tag tag-default tag-pill">{score}</span>    </p>
        <p><em>by {user.username}, date goes here lalalal</em></p>
        <p className="lead">{body}</p>
      </div>
    )
  }
}
