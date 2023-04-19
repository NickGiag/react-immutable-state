import { useState } from "react"
import {initialWorkouts, generateWorkout} from "./Workouts.js"
import "./App.css"
import Workout from "./components/Workout.js"

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts)

  const addNewWorkout = () => {
    const newWorkout = generateWorkout()
    // console.log("addNewWorkout:", newWorkout)

    const newWorkouts = [...workouts,newWorkout]
    
    setWorkouts(newWorkouts)
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

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <Workout 
          workout={workout} 
          key={index}
          deleteWorkout={deleteWorkout}
          completeWorkout={completeWorkout}
          />
        ))}
      </ul>
      
    </div>
  )
}

export default App
