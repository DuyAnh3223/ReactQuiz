import React from 'react'

const Results = ({score, totalQuestionNum, restartQuiz, reviewQuiz}) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p className="result">Bạn trả lời đúng {score}/{totalQuestionNum} câu</p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={reviewQuiz}>Xem lại</button>
         <button className="result-button" onClick={restartQuiz}>Chơi lại</button>
      </div>
    </div>
  )
}

export default Results
