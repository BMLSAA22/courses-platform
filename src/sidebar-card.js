import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
class SidebarCard extends React.Component {
    render(props) {
      const style={background:  this.props.isActive ? 'rgba(255, 255, 255, 0.1)' : 'none',
      borderRadius: '8px'
    };
  
      return (
    <div className='card' style={style
    }>
      <FontAwesomeIcon classname="icn" icon={this.props.icon} />
      <h1>{this.props.type}
      </h1>
      </div>);  
    }
  }
export default SidebarCard;