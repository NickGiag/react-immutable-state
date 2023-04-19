import '../style/Buttons.css'

function Buttons({workout, completeWorkout,deleteWorkout}) {
    const handleCompleted = (workout) => {
        completeWorkout(workout)
    }

    const handleDelete = (workout) => {
        deleteWorkout(workout)
    }

    return (
        <div className="buttons">
            {!workout.done && 
            <button onClick={e=>handleCompleted(workout)}>Done</button>}
            {workout.done && 
            <p>✅</p>}
        <button onClick={e=>handleDelete(workout)}>Delete</button>
        </div>   
    )
}

export default Buttons