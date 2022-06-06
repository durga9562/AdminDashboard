import React from 'react'
import "./Topbar.css";
import {NotificationsNone,Language,Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>DurgaPrasad</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
       <NotificationsNone/>
       <span className='topIconBadge'>3</span>
                </div>
                <div className='topbarIconContainer'>
       <Language/>
       <span className='topIconBadge'>3</span>
                </div>
                 <div className='topbarIconContainer'>
       <Settings/>
                </div>
                <img src="https://img.freepik.com/free-vector/glowing-blue-cuircuit-lines-diagram_1017-33018.jpg?t=st=1654249078~exp=1654249678~hmac=91117d558d38324da5045d621495ee0ae58fd6ae60fc9c89ce0bef84c5a58ff7&w=826" alt="" className='topAvatar'/>
            </div>
        </div>
        </div>
  )
}
