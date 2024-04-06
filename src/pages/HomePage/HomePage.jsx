import './HomePage.css'; // Make sure to create and import your HomePage.css
import { useState } from 'react';
import Header from '../../components/Header/Header.jsx';



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
     <Header />
      <main>
        <input
          id="postTitle"
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          id="postContent"
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
