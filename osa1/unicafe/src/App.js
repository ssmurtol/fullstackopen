import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.handleClick}>
  {props.text}
  </button>
)

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
      {props.text} {props.value} {props.percent}
    </div>
  )

}

const History = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad

  if (props.allClicks.length === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <div>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={good + neutral + bad} />
      <Statistics text="average" value={(good * 1 + neutral * 0 
        + bad * -1) / (good + neutral + bad)} />
      <Statistics text="positive" value={((good) / (good + 
      neutral + bad)) * 100} percent="%" />
    </div>
  )

}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
          <History allClicks={allClicks} good={good} neutral={neutral}
            bad={bad}/>
    </div>
  )
}

export default App
