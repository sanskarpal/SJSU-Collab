import React from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css'; // Assuming the CSS file name is ProfilePage.css

function ProfilePage() {
  return (
    <div className="profile-page">
      <header>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png" alt="SJSU Logo" />
          <h1>SJSU COLLAB</h1>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><img id="profile-image" src = "https://steamuserimages-a.akamaihd.net/ugc/2061007234587149642/02CD559FA7BBA7C9593CAFE36AD342052579587F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img></button>
          <div className="dropdown-content">
            <p><Link to="/">Home</Link></p>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>

      <main>
        <div className="profile-container">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2061007234587149642/02CD559FA7BBA7C9593CAFE36AD342052579587F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="User Avatar" />
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email address" />
            <button type="button">Log out</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
