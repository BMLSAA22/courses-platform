import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'


class TutoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          image:"images/down.png",
          display:"block"
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        if (this.state.image==="images/down.png"){
            this.setState({image:"images/up.png",display:"none"})
        }else{this.setState({image:"images/down.png",display:"block"})}

      }
    render() {
        return(<div >
 <div Style={"padding:3%"}>
            <div Style={"display:flex;justify-content:space-between"}><h2>Course 1 - Introduction</h2>
            <button onClick={this.handleClick} Style={"background:white;border:none"}><img src={this.state.image}></img></button></div>
            <div Style={"display:"+this.state.display}>
            {/* <div Style={"display:flex;justify-content:space-between"}>
                <div Style={"display:flex;justify-content:flex-start;margin-top:1%"}>
           <FontAwesomeIcon icon={faPlayCircle} />
           <p Style={"margin-left:10px;color: #102844;"}>U1:presentation</p>
           </div>
           <FontAwesomeIcon icon={faCheck} Style={"color: #30A876"}/>

           </div> */}
           <TutoUnit isfinished={true} />
            </div>
            </div>

        </div>);
    }
  }
export default TutoSection

class TutoUnit extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div Style={"display:flex;justify-content:space-between"}>
                <div Style={"display:flex;justify-content:flex-start;margin-top:1%"}>
           <FontAwesomeIcon icon={faPlayCircle} />
           <p Style={"margin-left:10px;color: #102844;"}>U1:presentation</p>
           </div>
           { this.props.isfinished ?<FontAwesomeIcon icon={faCheck} Style={"color: #30A876"}/> : null}

           </div>
           
        );

    }

}
