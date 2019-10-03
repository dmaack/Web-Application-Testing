import React from 'react';

const Display = props => {
    
        return (
            <div className='display-container'>
                <div>
                    <h3>Balls: {props.balls}</h3>
                </div>
                <div>
                    <h3>Strikes: {props.strikes}</h3>
                </div>
                
            </div>
        )
    }
    
        

    export default Display;


