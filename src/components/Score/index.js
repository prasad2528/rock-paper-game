import './index.css'
import {Paragraph} from './styledComponents'

const Score = props => {
  const {score} = props
  return (
    <div className="score-container">
      <h3 className="main-heading">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
        <br />
      </h3>
      <div className="score-details">
        <p className="heading">Score</p>
        <Paragraph>{score}</Paragraph>
      </div>
    </div>
  )
}
export default Score
