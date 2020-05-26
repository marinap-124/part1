import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    
    const header = 'statistics'
    const states = ["good", "neutral", "bad"]
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const all = good + neutral + bad

    if (all === 0) {
        return (
            <div>
                <Header name={header}/>
                <table>
                    <tbody>
                        <Statistic  name="No feedback given" />
                    </tbody>
                </table>
              
            </div>
        )
    }
   
    return (
        <div>
            <Header name={header}/>
            <table>
                <tbody>
                    <Statistic value={good}  name={states[0]} />
                    <Statistic value={neutral}  name={states[1]} />
                    <Statistic value={bad}  name={states[2]} />
 
                    <Statistic value={all}  name="All" />
                    <Statistic value={(good - bad) / all} all={all} name="Average" />
                    <Statistic value={good  * 100 / all + " %"} all={all} name="Positive" />    


                </tbody>

            </table>

             
        </div>
    )
}



const Header = (props) => {
    return (  
       <h1>{props.name}</h1>  
    )
}

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)  

const Statistic = props => {
    return (
        <tr><td>{props.name}</td><td>{props.value}</td></tr>
    )
}

const App = () => {
    const header = 'give feedback'
    const states = ["good", "neutral", "bad"]
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
     const [bad, setBad] = useState(0)

    const setToGood = (newValue) =>  {
        setGood(newValue)
    }

    const setToNeutral = (newValue) => { 
        setNeutral(newValue)
    }

    const setToBad = (newValue) => {
        setBad(newValue)
    }    


  return (
    <div>
        <Header name={header}/>
        <Button handleClick={() => setToGood(good + 1)} text={states[0]} /> 
        <Button handleClick={() => setToNeutral(neutral + 1)} text={states[1]}/> 
        <Button handleClick={() => setToBad(bad + 1)} text={states[2]} />
         
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
