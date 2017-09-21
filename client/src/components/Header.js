import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <div className='blue darken-3 nav-wrapper'>
        <Link to='/' className='left brand-logo' style={{marginLeft: '5px'}}>React TodoList</Link>
      </div>
    </nav>
  )
}

export default Header;