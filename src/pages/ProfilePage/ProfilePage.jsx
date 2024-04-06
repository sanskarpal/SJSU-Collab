import './ProfilePage.css'; // Assuming the CSS file name is ProfilePage.css
import Header from '../../components/Header/Header.jsx';

function ProfilePage() {
  return (
    <div className="profile-page">
      <Header/>
      <main>
        <div className="profile-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdWHcffKPDbUMWEVLor3x7sknODQ7SP-Qmw&usqp=CAU" alt="User Avatar" />
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
