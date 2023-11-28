import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameResult from '../GameResult'
import {
  BgContainer,
  CardContainer,
  RulesView,
  PopupView,
} from './styledComponents'
import Score from '../Score'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isShowGame: true,
    score: 0,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
  }

  restartGame = () => this.setState({isShowGame: true})

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onCLickCheckResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachLogo => eachLogo.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(choice1[0], choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShowGame: false,
      score: newScore,
      newArray: [choice1[0], choice2],
      text: result,
    })
  }

  render() {
    const {newArray, text, isShowGame, score} = this.state
    return (
      <BgContainer>
        <CardContainer>
          <Score score={score} />
          <GameResult
            isShowGame={isShowGame}
            text={text}
            restartGame={this.restartGame}
            checkResult={this.onCLickCheckResult}
            newArray={newArray}
            choicesList={choicesList}
          />
        </CardContainer>
        <RulesView>
          <Popup
            modal
            trigger={
              <button className="button" type="button">
                Rules
              </button>
            }
          >
            {close => (
              <PopupView>
                <button
                  type="button"
                  aria-label="close"
                  className="trigger-popup"
                  onClick={() => close()}
                >
                  <RiCloseLine className="close-icon" />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="image"
                />
              </PopupView>
            )}
          </Popup>
        </RulesView>
      </BgContainer>
    )
  }
}
export default Home
