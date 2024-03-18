import React from 'react';
import './HomePage.css'; // Make sure to create and import your HomePage.css

const HomePage = () => {
  // Placeholder for post data
  const posts = [
    { title: 'Post Title 1', content: 'Post content goes here...' },
    { title: 'Post Title 2', content: 'Another post content...' },
    // Add more posts as needed
  ];

  return (
    <div>
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/San_Jose_State_Spartans_logo.svg/1200px-San_Jose_State_Spartans_logo.svg.png" alt="SJSU Logo" className="logo" />
        <div className="dropdown">
          <button className="dropbtn">Profile</button>
          <div className="dropdown-content">
            <a href="#">View Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>

      <main>
        <button className="new-post-button">Create a Post</button>
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
