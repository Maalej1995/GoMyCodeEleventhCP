import React, { useState } from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    return (
        <div>
            <h1> The counter value is : {props.counterState} </h1>
            <button onClick={() => props.dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => props.dispatch({ type: 'DECREMENT' })}>-</button>

            <br />

            <button onClick={() => props.dispatch({ type: 'INCREMENT', payload: 5 })}> +5 </button>
            <button onClick={() => props.dispatch({ type: 'DECREMENT', payload: 5 })}> -5 </button>

            <h3> The letter is : {props.letterState} </h3>

            <button onClick={() => props.dispatch({ type: 'CHANGE_LETTER', payload: 'X' })}> X </button>
            <button onClick={() => props.dispatch({ type: 'CHANGE_LETTER', payload: 'Y' })}> Y </button>
            <button onClick={() => props.dispatch({ type: 'CHANGE_LETTER', payload: 'Z' })}> Z </button>
        </div>
    )
}

const mapStateToProps = (stateInStore) => {
    return ({
        counterState: stateInStore.counter,
        letterState: stateInStore.letter
    })
}

export default connect(mapStateToProps)(Counter)
