import React from 'react';

const Dashboard = props => {
  
        return(
            <div className='dashboard'>
                <button onClick={props.strikeChange}>Strike</button>
                <button onClick={props.ballChange}>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        )
    }
    
        

export default Dashboard;


