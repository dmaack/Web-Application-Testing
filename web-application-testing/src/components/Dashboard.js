import React from 'react';

const Dashboard = props => {
  
        return(
            <div className='dashboard'>
                <button onClick={props.strikeChange}>Strike</button>
                <button onClick={props.ballChange}>Ball</button>
                <button onClick={props.foulChange}>Foul</button>
                <button onClick={props.hitChange}>Hit</button>
            </div>
        )
    }
    
        

export default Dashboard;


