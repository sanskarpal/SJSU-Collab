import { Link } from 'react-router-dom';
import './Header.css'; // Make sure you have corresponding CSS file for styles

const Header = () => {
  return (
    <header>
      <img 
        id="homepageLogo" 
        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png" 
        alt="SJSU Logo" 
      />
      <h1>SJSU COLLAB</h1>
      <div className="dropdown">
        <button className="dropbtn">
          <img 
            id="profile-image" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdWHcffKPDbUMWEVLor3x7sknODQ7SP-Qmw&usqp=CAU" 
            alt="Profile"
          />
        </button>
        <div className="dropdown-content">
          <p><Link to="/profile">Profile</Link></p>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/login">Sign In</Link></p>
          <a href="#">Logout</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
