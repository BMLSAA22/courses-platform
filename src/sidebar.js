import React from 'react';
import SidebarCard from './sidebar-card';
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faMessage} from '@fortawesome/free-solid-svg-icons'
import { faAssistiveListeningSystems} from '@fortawesome/free-solid-svg-icons'
import { faList} from '@fortawesome/free-solid-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'

class Sidebar extends React.Component {
    render() {
      return <div className='sidebar'>
    <h1>Sidebar</h1>
   
      <SidebarCard type={"Home"} icon={faHome} isActive={true}/>
      <SidebarCard type={"Discover"} icon={faList} isActive={false}/>
      <SidebarCard type={"Messages"} icon={faMessage} isActive={false} />
      <SidebarCard type={"Help & Support"} icon={faAssistiveListeningSystems} isActive={false} />
      <SidebarCard type={"Settings"} icon={faCog} isActive={false} />
      </div>;
    }
  }
export default Sidebar;