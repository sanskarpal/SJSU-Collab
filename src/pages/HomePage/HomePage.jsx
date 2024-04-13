import './HomePage.css'; // Make sure to create and import your HomePage.css
import { useState } from 'react';
import Header from '../../components/Header/Header.jsx';

const HomePage = () => {
  // Placeholder for post data
  const [posts, setPosts] = useState([
    {
      title: 'Post Title 1',
      content: 'Post content goes here...',
      replies: [], // Array to hold replies
    },
    {
      title: 'Post Title 2',
      content: 'Another post content...',
      replies: [], // Array to hold replies
    },
    // ... other posts
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newReply, setNewReply] = useState('');

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { ...newPost, replies: [] }]);
      setNewPost({ title: '', content: '' }); // Reset new post state
    }
  };

  const handleAddReply = (postIndex, replyContent) => {
    if (replyContent) {
      const updatedPosts = posts.map((post, index) => {
        if (index === postIndex) {
          return {
            ...post,
            replies: [...post.replies, replyContent],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setNewReply(''); // Reset the reply input
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
        <button className="new-post-button" onClick={handleCreatePost}>
          Create a Post
        </button>

        {posts.map((post, postIndex) => (
          <div className="post" key={postIndex}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="replies">
              {post.replies.map((reply, replyIndex) => (
                <div className="reply" key={replyIndex}>
                  {reply}
                </div>
              ))}
              <input
                className = "reply-input"
                type="text"
                placeholder="Write a reply..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <button 
              className = "reply-button"
              onClick={() => handleAddReply(postIndex, newReply)}>
                Reply
              </button>
            </div>
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
