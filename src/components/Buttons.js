import '../style/Buttons.css'

function Buttons({workout, completeWorkout,deleteWorkout,changeWorkout}) {
    const handleCompleted = (workout) => {
        completeWorkout(workout)
    }

    const handleDelete = (workout) => {
        deleteWorkout(workout)
    }

    const handleChangeWorkout = (workout => {
        changeWorkout(workout)
    })

    return (
        <div className="buttons">
            {!workout.done && 
                <button onClick={e=>handleCompleted(workout)}>Done</button>}
            {workout.done && 
                <p>✅</p>}
            <button onClick={e=>handleDelete(workout)}>Delete</button>
            <button onClick={e=>handleChangeWorkout(workout)}>Change</button>
        </div>   
    )
}

export default Buttons