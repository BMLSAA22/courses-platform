import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';

class ContentCard extends React.Component {
    render() {
        const style={  background: "linear-gradient(225deg,"+" #FFA674"+" 0%, "+"#FF3737"+" 100%)"
      };
       return (
        <div className='content-card'>
            <div className='upper'>
                <div className='left'>
                    <FontAwesomeIcon icon={faAdd} />


                </div>
                <div className='right'>
                    <h1>1.2 K</h1>
                    <p>Courses Completed</p>
                </div>
            </div>
            
            <div className='bottom'>
            <div><ProgressBar animated now={45} /></div>
            <div><p>70</p></div>
            </div>
            
        
        
        </div>);
    }
  }
export default ContentCard;