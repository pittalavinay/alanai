import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import StairsIcon from '@mui/icons-material/Stairs';
import DownloadIcon from '@mui/icons-material/Download';
import './Toolc.css'
const Tool = () => {
  return (
    <div className='to'>
        <div className='tool'><NotificationsIcon /><p>Notification Preferences</p></div><hr></hr>
        <div className='tool'><LiveHelpIcon /><p>24*7 Customer Care</p></div>
        <div className='tool'><StairsIcon /><p>Advertise</p></div>
        <div className='tool'><DownloadIcon />Download App</div>
        <div className='tool'></div>
    </div>
  )
}

export default Tool