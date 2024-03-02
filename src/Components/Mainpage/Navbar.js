import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import '../../Styles/styles.css';
import { signOutUser } from '../../actions/AuthenticationAction/Authactions';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate=useNavigate();
  const userData = useSelector(state => state.auth.userData);
  {userData&&(
   localStorage.setItem('email',userData.email)
  )}
   const dispatch = useDispatch()
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    dispatch(signOutUser(navigate));
  };

  const menu = (
    <Menu>
      <Menu.Item key="signout" onClick={handleSignOut}>
        Sign Out
      </Menu.Item>
    </Menu>
  );
  const userEmail= localStorage.getItem('email');

  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo">A2Z</span>
        <span className="logo-animated">Trip planner</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={isMenuOpen ? "menu active" : "menu"}>
        <li><Link to="/">Home</Link></li>
        {userEmail ? (
          <>
                    <li><Link to="/createtrip">Create Trip</Link></li>
        <li><Link to="/mytrips">My Trips</Link></li>
           <li> <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link dropbtn" onClick={e => e.preventDefault()}>
                {userEmail.charAt(0).toUpperCase()}
              </a>
            </Dropdown>
          </li>
          </>
        ) : (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
