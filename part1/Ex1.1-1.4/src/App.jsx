import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header=(props)=>{ 
  return (
  <div>
   {props.course} 
  </div>
  );
}
const Content=(props)=>{ 
 
  return (
  <div>
    <Part parts={props.parts[0]}/>
    <Part parts={props.parts[1]}/>
    <Part parts={props.parts[2]}/>
  </div>
  );
}
const Part=(props)=>{
  return(
    <div>
  {props.parts.name}
  {props.parts.exercises}
</div>
  );
}
const Total=(props)=>{ 
  return (
  <div>
  {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </div>
  );
}

const App=()=> {
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
    <h1>
      <Header course={course.name} />
    </h1>
    <Content parts={course.parts} />
    <p>Number of exercises <Total parts={course.parts} /></p>
  </div>
          
  );
}



export default App
