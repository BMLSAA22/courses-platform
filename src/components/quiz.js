import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../sidebar';
import  Navbar  from '../navbar';
import './style/quiz.css'
class Quiz extends React.Component {
    render() {
        return(
        <>
        <Sidebar/><Navbar/>
        <div className="quiz">
            <h1>Quiz</h1>
    <form>
        <h3>What is the capital of France?</h3>
        <div className='options'>
            <div>
            <input className='custom-checkbox' type="radio" name="answer" value="paris" id="paris"/>
            <label for="paris">Paris</label>
            </div>
            <div>
            <input type="radio" name="answer" value="london" id="london"/>
            <label for="london">London</label>
            </div>
            <div>
            <input type="radio" name="answer" value="berlin" id="berlin"/>
            <label for="berlin">Berlin</label>
            </div>
        </div>  
    </form>
    <form>
        <h3 >Which of this capitals are situated in europe</h3>
        <div className='options'>
            <div>
            <input type="checkbox" name="answer" value="paris" id="paris"/>
            <label for="paris">Paris</label>
            </div>
            <div>
            <input type="checkbox" name="answer" value="london" id="london"/>
            <label for="london">London</label>
            </div>
            <div>
            <input type="checkbox" name="answer" value="berlin" id="berlin"/>
            <label for="berlin">Berlin</label>
            </div>
        </div>  
    </form>
    <button>Submit</button>
            
        </div>
        </>);
    }
  }
export default Quiz;