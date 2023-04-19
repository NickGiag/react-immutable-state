import Buttons from "./Buttons"
import '../style/Workout.css'

function Workout({workout, deleteWorkout, completeWorkout}) {

    
    return (
        <li >
            <p>
                {workout.sets}x sets of <strong>{workout.reps}x{workout.exercise}</strong> with {workout.rest} seconds rest
            </p>
            <Buttons 
            workout={workout}
            deleteWorkout={deleteWorkout}
            completeWorkout={completeWorkout}
            />
        </li>
    )
}

export default Workout