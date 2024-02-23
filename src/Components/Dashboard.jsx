import React from 'react';
import './dashboard.css'
import CenterComp from './CenterComp';
import SideComp from './SideComp';

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="left">
                <div className="left_top">
                    <div className="notification">4</div>
                    <img src={require('../images/Profile.png')} alt="" />
                    <h1>Samantha</h1>
                    <p>samantha@email.com</p>
                </div>
                <div className="left_down">
                    <p className='non_active'>Dashboard</p>
                    <p className='active_tab'>Expenses</p>
                    <p className='non_active'>Wallets</p>
                    <p className='non_active'>Summary</p>
                    <p className='non_active'>Accounts</p>
                    <p className='non_active'>Settings</p>
                </div>
            </div>
            <div className="right row p-0 m-0">
                <div className="right_inner_left p-0 col">
                    <CenterComp/>
                </div>
                
                <div className="right_inner_right px-1 col-5">
                   <SideComp/>
                    </div>
            </div>
        </div>
    )
}

export default Dashboard
