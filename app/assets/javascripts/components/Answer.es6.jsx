class Answer extends React.Component {
  render() {
    return(
      <div className="answer">
        <p className="lead">"This is the answer"</p><p><em>by snarky mcsnarksalot</em></p>
        <CommentsContainer />
      </div>
    )
  }
}
