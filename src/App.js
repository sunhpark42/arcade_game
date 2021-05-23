import RoundButton from './components/Button/RoundButton';
import Display from './components/Display/Display';

import {
  FaQuestion,
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandPeace,
} from 'react-icons/fa';
import { useState } from 'react';
import {
  Container,
  Inner,
  ResultText,
  Title,
  Score,
  Field,
  GameController,
  ResetButton,
  Computer,
  Player,
} from './App.style';

const status = ['?', 'rock', 'scissors', 'paper'];

const getRandomStatus = () => {
  const index = Math.floor(Math.random() * 3 + 1);

  return status[index];
};

const getResult = (user, computer) => {
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 1;
  }

  if (
    (computer === 'rock' && user === 'scissors') ||
    (computer === 'scissors' && user === 'paper') ||
    (computer === 'paper' && user === 'rock')
  ) {
    return -1;
  }
  return 0;
};

function App() {
  const [current, setCurrent] = useState('?');
  const [computer, setComputer] = useState('?');
  const [score, setScore] = useState(0);
  const [resultText, setResultText] = useState('🕹PRESS THE BUTTON🕹');
  const [count, setCount] = useState(0);

  const play = (status) => () => {
    const computerStatus = getRandomStatus();
    const result = getResult(status, computerStatus);

    setCount(count + 1);

    if (result === 1) {
      setScore(score + result);
      setResultText('🎉WIN🎉');
    }

    if (result === 0) {
      setResultText('🙃DRAW🙃');
    }

    if (result === -1) {
      setResultText('😭LOSE😭');
    }

    setCurrent(status);
    setComputer(computerStatus);
  };

  const restart = () => {
    setScore(0);
    setCount(0);
    setResultText('🕹PRESS THE BUTTON🕹');
    setComputer('?');
    setCurrent('?');
  };

  return (
    <Container>
      <Inner>
        <Title>ROCK SCISSORS PAPER!</Title>
        <Display>
          <ResultText aria-label="status text">{resultText}</ResultText>
          <Score aria-label="score of com and player">{`COM : ${
            count - score
          } | PLAYER : ${score}`}</Score>
          <Score aria-label="winning rate">{`RATE: ${Number(
            ((score / count || 0) * 100).toFixed(1)
          )}%`}</Score>
          {/* computer */}
          <Field>
            <Computer>
              {computer === '?' && <FaQuestion />}
              {computer === 'rock' && <FaRegHandRock aria-label="rock" />}
              {computer === 'scissors' && (
                <FaRegHandPeace aria-label="scissors" />
              )}
              {computer === 'paper' && <FaRegHandPaper aria-label="paper" />}
            </Computer>
            {/* player */}
            <Player>
              {current === '?' && <FaQuestion />}
              {current === 'rock' && <FaRegHandRock aria-label="rock" />}
              {current === 'scissors' && (
                <FaRegHandPeace aria-label="scissors" />
              )}
              {current === 'paper' && <FaRegHandPaper aria-label="paper" />}
            </Player>
          </Field>
        </Display>
        <GameController>
          <RoundButton
            aria-label="rock"
            buttonColor={'red'}
            onClick={play('rock')}
          >
            <FaRegHandRock />
          </RoundButton>
          <RoundButton
            aria-label="scissors"
            buttonColor={'yellow'}
            onClick={play('scissors')}
          >
            <FaRegHandPeace />
          </RoundButton>
          <RoundButton
            aria-label="paper"
            buttonColor={'blue'}
            onClick={play('paper')}
          >
            <FaRegHandPaper />
          </RoundButton>
        </GameController>
        <ResetButton type="button" aria-label="restart" onClick={restart}>
          RESTART
        </ResetButton>
      </Inner>
    </Container>
  );
}

export default App;
