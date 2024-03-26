
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure to create and import your HomePage.css
import { useState } from 'react';


const HomePage = () => {
  // Placeholder for post data
  const [posts, setPosts] = useState([
    { title: 'Post Title 1', content: 'Post content goes here...' },
    { title: 'Post Title 2', content: 'Another post content...' },
    // Add more posts as needed
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: '', content: '' }); // Reset new post state
    }
  };

  return (
    <div>
      <header>
        <img id="homepageLogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png" alt="SJSU Logo" />
        <h1>SJSU COLLAB</h1>
        <div className="dropdown">
          <button className="dropbtn"><img id="profile-image" src = "https://steamuserimages-a.akamaihd.net/ugc/2061007234587149642/02CD559FA7BBA7C9593CAFE36AD342052579587F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img></button>
          <div className="dropdown-content">
            <p><Link to="/profile">Profile</Link></p>
            <p><Link to="/login">Sign In</Link></p>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>

      <main>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        ></textarea>
        <button className="new-post-button" onClick={handleCreatePost}>Create a Post</button>
        
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </main>

      <footer>
        <p>SJSU Collab © 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
