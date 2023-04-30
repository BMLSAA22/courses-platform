import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
import { faVideo} from '@fortawesome/free-solid-svg-icons'
import { faCopy} from '@fortawesome/free-solid-svg-icons'
import { faAudioDescription} from '@fortawesome/free-solid-svg-icons'
import { faMobilePhone} from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-solid-svg-icons'

class CoursePricing extends React.Component {
    render() {
        const style="position:relative;width:22%;height:100%;background:white;margin:3%;border-radius:20px ;display:flex;flex-direction:column;justify-content:start;align-items:start"
        return(<div Style={style}>
            <button Style={"position:relative;width:90%;border:none;margin:5%;height:7%;background:#4C6FFF;color:white;border-radius:10px"}>Buy Now</button>
            <h3 Style={'margin:5% 10% 5% 5%;color: #102844;font-weight:500'}>What you’ll learn</h3>
            <p Style={'margin:0% 5% 0% 5%;font-weight:400;font-size: 14px;line-height: 24px;color: #767278;'}> Access to IBM Cloud modelling what is I was looking for and Aaron got me the solution.</p>
            <h3 Style={'margin:2% 5% 5% 5%;color: #102844;font-weight:500'}>This course includes:</h3>
            <C Style={""} icon={faComment} text={"100% Positive reviews (45)"}/>
            <C Style={""} icon={faAdd} text={"2167 students"}/>
            <C Style={""} icon={faVideo} text={"59 Lessons (9h 11m)"}/>
            <C Style={""} icon={faAdd} text={"6 courses"}/>
            <C Style={""} icon={faCopy} text={"70 downloads (70 files)"}/>
            <C Style={""} icon={faMobilePhone} text={"Available from the app"}/>
            <C Style={""} icon={faAudioDescription} text={"Audio: Spanish"}/>
            <h3 Style={'margin:5% 10% 5% 5%;color: #102844;font-weight:500'}>Tags</h3>
        </div>);
    }
  }
  class C extends React.Component{
    render(props){
        return(
            <div Style={"display:flex;position:relative;width:90%;margin:5%;5%; color:#102844;"}>
                <FontAwesomeIcon className='addIcon' icon={this.props.icon} />
                <p Style={"margin-left:10%;color:#767278;"}>{this.props.text}</p>

            </div>
        );
    }
  }
export default CoursePricing;