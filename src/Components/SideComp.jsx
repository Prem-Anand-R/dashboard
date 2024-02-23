import React from 'react';
import './SideCom.css';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

function SideComp() {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 6,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
    return (
        <div className='side-comp p-4 '>
            <div className="comp_top mt-5">
                <p className='side_title'>Where your money go?</p>
                <div className="d-flex justify-content-between progress_text ">
                    <p>Food and Drinks</p>
                    <p>872.400</p>
                </div>
                <div className=" comp_prog">
                <BorderLinearProgress variant="determinate" value={30} /></div>
                <div className="d-flex justify-content-between mt-4 progress_text">
                    <p>Shopping</p>
                    <p>1.378.200</p>
                </div>
                <div className=" comp_prog">
                <BorderLinearProgress variant="determinate" value={50} /></div>
                <div className="d-flex justify-content-between mt-4 progress_text">
                    <p>Housing</p>
                    <p>928.500</p>
                </div>
                <div className=" comp_prog">
                <BorderLinearProgress variant="determinate" value={40} /></div>
                <div className="d-flex justify-content-between mt-4 progress_text">
                    <p>Transportation</p>
                    <p>420.700</p>
                </div>
                <div className=" comp_prog">
                <BorderLinearProgress variant="determinate" value={25} /></div>
                <div className="d-flex justify-content-between mt-4 progress_text">
                    <p>Vehicle</p>
                    <p>520.000</p>
                </div>
                <div className=" comp_prog">
                <BorderLinearProgress variant="determinate" value={33} /></div>
                </div>
                <div className=" mt-5 pt-5 d-flex justify-content-center">
                <div className="bottom_card mt-5 p-4">
                <img src={require('../images/Illustration-1.png')} alt="" className='bottom_card_img1' />
                <img src={require('../images/Illustration-2.png')} alt="" className='bottom_card_img2' />
                    <p className='bottom_card_header mt-5'>Save more money</p>
                    <p className='bottom_card_desc'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    <button>VIEW TIPS</button>
                </div>
                </div>
            </div>
    )
}

export default SideComp
