import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})

  
  return (
    <div>
      <h1>Feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

<Stats good={clicks.good} bad={clicks.bad} neutral={clicks.neutral}/>
      



    </div>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Stats = (props) => {
  const { good, bad, neutral } = props;
  const total = good + bad + neutral;

  if (total === 0) {
    return <div>No Feedback</div>;
  } else {
    return (
      <div>
        <h1>Stats</h1>
        <table>
          <thead>
            <tr>
              <th>Feedback Type</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <StatsLine text="good" value={good} />
            <StatsLine text="bad" value={bad} />
            <StatsLine text="neutral" value={neutral} />
            <StatsLine text="All" value={total} />
            <StatsLine text="Average" value={(good - bad) / total} />
            <StatsLine text="Positive" value={(good / total) * 100} />
          </tbody>
        </table>
      </div>
    );
  }
};

const StatsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};




export default App
