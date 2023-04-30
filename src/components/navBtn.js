import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
class NavBtn extends React.Component {
    render() {
        return(<button 
        onClick={() => alert('Button Clicked!')} 
        className="btn-primary" 
        disabled={false}>
        <FontAwesomeIcon className='addIcon' icon={faAdd} />
        <p>Create</p>
      </button>);
    }
  }
export default NavBtn;