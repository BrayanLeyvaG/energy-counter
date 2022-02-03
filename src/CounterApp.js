import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value ); //[]

    const handleAdd = () => setCounter(counter + 1 );

    const handleSubtract = () => setCounter(counter - 1 );

    const handleReset = () => setCounter( value );

    const handleEndTurn = () => setCounter(counter + 2 );


    

    return (
        <div className='allbody'>
            <h1>Energy Counter</h1>
            <h2> { counter } </h2>
            <div>
                <button className='b' onClick={ handleSubtract }>-1</button>
                <button className='b' onClick={ handleEndTurn }>End Turn</button>
                <button className='b' onClick={ handleAdd }>+1</button>
            </div>
                <button className='br' onClick={ handleReset }>Reset</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp 



