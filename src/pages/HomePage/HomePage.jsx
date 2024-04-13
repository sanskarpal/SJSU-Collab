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
  const [replyTexts, setReplyTexts] = useState(posts.map(() => ''));

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { ...newPost, replies: [] }]);
      setNewPost({ title: '', content: '' });
      setReplyTexts([...replyTexts, '']); // Add a new reply state for the new post
    }
  };

  const handleAddReply = (postIndex, replyText) => {
    if (replyText.trim()) {
      const updatedPosts = posts.map((post, index) => {
        if (index === postIndex) {
          return {
            ...post,
            replies: [...post.replies, replyText],
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      const newReplyTexts = [...replyTexts];
      newReplyTexts[postIndex] = ''; // Reset the reply input for this post only
      setReplyTexts(newReplyTexts);
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
                className="reply-input"
                type="text"
                placeholder="Write a reply..."
                value={replyTexts[postIndex]}
                onChange={(e) => {
                  const newReplyTexts = [...replyTexts];
                  newReplyTexts[postIndex] = e.target.value;
                  setReplyTexts(newReplyTexts);
                }}
              />
              <button
                className="reply-button"
                onClick={() => handleAddReply(postIndex, replyTexts[postIndex])}
              >
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
