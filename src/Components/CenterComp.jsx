import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function CenterComp() {





    return (
        <div>
            <div className="header">
                <div className="header-title">
                    <div className="title d-flex justify-content-between p-5">
                        <div className="header-title">
                            <h1 style={{ color: '#262A41' }}>Expenses</h1>
                            <p className='header-date'>01 - 25 March, 2020</p>
                        </div>
                        <div className="profile-card-top">
                            <AvatarGroup >
                                <Avatar alt="Remy Sharp" src={require('../images/1.png')} sx={{ width: 31.14, height: 31.2 }} />
                                <Avatar alt="Travis Howard" src={require('../images/2.png')} sx={{ width: 31.14, height: 31.2 }} />
                                <Avatar alt="Cindy Baker" src={require('../images/3.png')} sx={{ width: 31.14, height: 31.2 }} />
                            </AvatarGroup>
                        </div>
                    </div>
                </div>

                <div class="graph-container d-flex gap-3 border-0 ">

                    <div className="bar" style={{ left: "50px", height: "35px" }}></div>
                    <div className="bar" style={{ left: "80px", height: "52px" }}></div>
                    <div className="bar" style={{ left: "110px", height: "27px" }}></div>
                    <div className="bar" style={{ left: "140px", height: "35px" }}></div>
                    <div className="bar" style={{ left: "170px", height: "30px" }}></div>
                    <div className="bar" style={{ left: "200px", height: "44px" }}></div>
                    <div className="bar" style={{ left: "230px", height: "27px" }}></div>
                    <div className="bar" style={{ left: "260px", height: "35px" }}></div>
                    <div className="bar" style={{ left: "290px", height: "52px" }}></div>
                    <div className="bar" style={{ left: "320px", height: "44px" }}></div>
                    <div className="bar" style={{ left: "350px", height: "27px" }}></div>
                    <div className="bar" style={{ left: "380px", height: "35px" }}></div>
                    <div className="bar" style={{ left: "410px", height: "27px" }}></div>
                    <div className="bar" style={{ left: "440px", height: "35px" }}></div>
                    <div className="bar" style={{ left: "470px", height: "60px", opacity: '1' }}></div>
                    <div className="bar" style={{ left: "500px", height: "44px" }}></div>
                </div>
            </div>
            <div className="body p-5">
                <Typography sx={{ color: '#262A41', fontSize: '18px' }} variant="h5" component="p" className='ms-2 mb-1'>
                    Today
                </Typography>
                <div className="today-card w-100 mb-5 pb-4">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height: '20px' }} className='p-0 m-0'>
                        <ListItem className=' d-flex justify-content-between'>
                            <ListItemAvatar>
                                <Avatar sx={{ background: '#32A7E2' }}>
                                    <ShoppingCartIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Grocery" secondary="5:12 pm  •  Belanja di pasar" />

                            <div className="values">
                                <p>-326.800</p>
                            </div>

                        </ListItem>
                        <ListItem className=' d-flex justify-content-between'>
                            <ListItemAvatar>
                                <Avatar sx={{ background: '#B548C6' }}>
                                    <DirectionsBusIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Transportation" secondary="5:12 pm  •  Naik bus umum" />

                            <div className="values">
                                <p>-15.000</p>
                            </div>

                        </ListItem>
                        <ListItem className=' d-flex justify-content-between w-100'>

                            <ListItemAvatar>
                                <Avatar sx={{ background: '#FF8700' }}>
                                    <HomeIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Housing" secondary="5:12 pm  •  Bayar Listrik" />
                            <div className="values">
                                <p>-185.750</p>
                            </div>

                        </ListItem>
                    </List>

                </div>

            </div>
            <div className="footer p-5 mt-5">
                <Typography sx={{ color: '#262A41', fontSize: '18px' }} variant="h5" component="p" className='ms-2 mb-1'>
                    Monday, 23 March 2020
                </Typography>
                <div className="today-card w-100">
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height: '20px' }}>
                        <ListItem className=' d-flex justify-content-between'>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    background: '#DC3434'
                                }}>
                                    < svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4013 9.7446H16.9798C16.4686 9.7446 16.4883 9.25734 16.4883 9.25734C16.4883 9.25734 16.485 9.25847 16.4841 9.25847C16.1996 6.39734 14.3357 4.00688 11.7749 2.96572C11.7676 2.96207 11.7625 2.95841 11.7552 2.95504C11.3399 2.77341 11.3301 2.36656 11.3301 2.36656V1.27452C11.3301 0.571045 10.7602 0 10.0558 0H7.77195C7.06819 0 6.49743 0.571045 6.49743 1.27452V2.52879C6.4859 2.63395 6.42377 2.80855 6.15216 2.92355C6.13473 2.93114 6.12151 2.93845 6.10746 2.94492C3.52496 3.97201 1.63891 6.36613 1.34509 9.2385L1.34172 9.23738C1.34172 9.23738 1.29954 9.7446 0.814815 9.7446H0.499348C0.399254 9.74685 0 9.78199 0 10.1936V10.5229C0.00590446 10.664 0.0671983 11 0.529433 11H17.2781C17.7361 11 17.8157 10.7037 17.8275 10.5552V10.22C17.8275 9.82417 17.5447 9.75444 17.4013 9.7446ZM10.4098 2.02804C10.4073 2.12982 10.3685 2.50574 9.89699 2.46188C9.87112 2.45935 9.85397 2.46019 9.83654 2.46103C9.53345 2.42364 9.22754 2.39861 8.91376 2.39861C8.55696 2.39861 8.20804 2.4332 7.86389 2.48184C7.83999 2.48071 7.81244 2.48184 7.77842 2.48606C7.40419 2.53048 7.33868 2.29599 7.32968 2.17565V1.59505C7.32968 1.14631 7.69294 0.782481 8.14196 0.782481H9.59783C10.0466 0.782481 10.4101 1.14631 10.4101 1.59505V2.02804H10.4098ZM13.8949 9.73841H13.2513C12.922 9.73841 12.8383 9.56156 12.8191 9.43785C12.8191 9.40833 12.8177 9.36784 12.816 9.32004C12.7941 8.67393 12.6288 6.45666 11.4029 4.70276L11.4088 4.70248L11.2671 4.46236C11.2519 4.37408 11.2573 4.24558 11.4738 4.42581C12.5363 5.34128 14.1069 7.08478 14.1971 9.46484C14.1912 9.56803 14.1454 9.73841 13.8949 9.73841Z" fill="white" />
                                    </svg>

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Food and Drink" secondary="5:12 pm  •  Makan Steak" />

                            <div className="values">
                                <p>-156.000</p>
                            </div>

                        </ListItem>
                        <ListItem className=' d-flex justify-content-between'>
                            <ListItemAvatar>
                                <Avatar sx={{ background: '#4BA83D' }}>
                                    <PlayCircleIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Entertainment" secondary="5:12 pm  •  Nonton Bioskop" />

                            <div className="values">
                                <p>-35.200</p>
                            </div>

                        </ListItem>
                    </List>

                </div>
            </div >

        </div >
    )
}

export default CenterComp
