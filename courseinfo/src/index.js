import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
         <h1>{props.name}</h1>
      )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]}/>
      <Part part={props.part[1]}/>
      <Part part={props.part[2]}/>
    </div>
    )
}

const Part = (props) => {
  return (
        <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
      <p>Number of exercises {props.exercise.reduce((prev,next) => prev + next.exercises,0)}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content part={course.parts} />
      <Total  exercise={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

