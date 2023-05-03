import React from 'react';
import NavBtn from './components/navBtn';
import NotificationIcon from './components/NotificationIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { faListUl} from '@fortawesome/free-solid-svg-icons'
class Navbar extends React.Component {
    render() {
      return <div className='navbar'>
    
    <div className='search-section'>
        <FontAwesomeIcon icon={faSearch} />
        <p Style={"margin:15px;"}>search anything</p>
    </div>
    <div className='right-section'>
        <NavBtn />
        <NotificationIcon count={5} />
        <div className='cart fa-lg'><FontAwesomeIcon  icon={faShoppingCart} />   </div>
        <img className='avatar' src="/images/img1.jpg"></img>
        <div className='info'>
          <h1>Carl Esquer</h1>
          <p>Level 3</p>
        </div>
    </div>
   
      </div>;
    }
  }
export default Navbar;