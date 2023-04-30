import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
function NotificationIcon(props) {
    return (
     <div className="notif">
      <FontAwesomeIcon className='bellIcon fa-lg' icon={faBell} />
      <div className="notification-circle">
        {props.count}     
      </div>
    
  </div>  
      
    );
  }
  export default NotificationIcon;