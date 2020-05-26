import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

const randomNumber = (props) => (
    Math.floor(Math.random() * (props.anecdotes.length ))
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const setToSelected = (newValue) =>  {
        setSelected(newValue)
    }

    const points = new Array(props.anecdotes.length).fill(0)
    const [clicks, setClicked] = useState(points)

    const setToClicked = (random) => {
        const arrCopy = [...clicks]
        arrCopy[random] += 1          
        setClicked(arrCopy)
    }

  
    return (
      <div>
        <Header name="Anecdote of the day"/>

        {props.anecdotes[selected]}
        <br/>
        has {clicks[selected]} votes
        <br/><br/>
        <Button handleClick={() => setToClicked(selected)} text="vote" />
        <Button handleClick={() => setToSelected(randomNumber(props))} text="next anecdote" />

        <Header name="Anecdote with most votes"/>
        {props.anecdotes[clicks.indexOf(Math.max(...clicks))]}
        <br/><br/>
        has {clicks[clicks.indexOf(Math.max(...clicks))]} votes

      </div>
    )
  }
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
  