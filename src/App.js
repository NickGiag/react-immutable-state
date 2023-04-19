import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"
import Workout from "./components/Workout.js"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)
  const [showDone, setShowDone] = useState(false)
  const [doneWorkouts, setDoneWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    // console.log("addNewWorkout:", newWorkout)

    const newWorkouts = [...workouts,newWorkout]
    
    setWorkouts(newWorkouts)
  }

  const doneOnly = () => {
    setShowDone(!showDone)

    const doneWorkouts = workouts.filter(item => (item.done === true))
    setDoneWorkouts(doneWorkouts)
  }

  const deleteWorkout = (workout) => {
    // console.log("deleteWorkout:", workout)
    const filteredWorkouts = workouts.filter(item => item !== workout)

    setWorkouts(filteredWorkouts)
  }

  const completeWorkout = (workout) => {
    // console.log("completeWorkout:", workout)
    const updateWorkouts = workouts.map(item => {
      if (item === workout) {
        item.done = true
      }
      return item
    })
    setWorkouts(updateWorkouts)
  }

  const changeWorkout = (workout) => {
    const newWorkout = generateWorkout()

    const changedWorkouts = workouts.map(item => {
      if (item === workout) {
        item = newWorkout
      }
      return item
    })
    setWorkouts(changedWorkouts)
  }

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <div className="inputs">
        <button onClick={addNewWorkout}>Add New Workout</button>
        <input onChange={doneOnly} className="doneCheck" type="checkbox"></input>
        <label>Show only completed</label>
      </div>
      
      <ul>
        {!showDone &&
          workouts.map((workout, index) => (
          <Workout 
          workout={workout} 
          key={index}
          deleteWorkout={deleteWorkout}
          completeWorkout={completeWorkout}
          changeWorkout={changeWorkout}
          />
        ))}
        {
          showDone &&
            doneWorkouts.map((workout, index) => (
            <Workout 
             workout={workout} 
             key={index}
             deleteWorkout={deleteWorkout}
             completeWorkout={completeWorkout}
             changeWorkout={changeWorkout}
             />
           ))
        }
      </ul>
      
    </div>
  )
}

export default App
