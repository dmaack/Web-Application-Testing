import React from 'react';


class Dashboard extends React.Component {
    render() {
        return(
            <div className='dashboard'>
                <button>Strike</button>
                <button>Ball</button>
                <button>Foul</button>
                <button>Hit</button>
            </div>
        )
    }
}

export default Dashboard;