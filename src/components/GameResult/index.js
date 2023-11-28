import './index.css'
import {
  GameContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultName,
  ResultImage,
  CustomButton,
} from './styledComponents'

const GameResult = props => {
  const {
    choicesList,
    isShowGame,
    text,
    newArray,
    checkResult,
    restartGame,
  } = props
  const showGame = () => (
    <GameContainer>
      {isShowGame && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShowGame && (
        <>
          <ResultContainer>
            <ResultName>You</ResultName>
            <ResultImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultName>Opponent</ResultName>
            <ResultImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultName>{text}</ResultName>
            <CustomButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </CustomButton>
          </ResultContainer>
        </>
      )}
    </GameContainer>
  )
  return showGame()
}
export default GameResult
