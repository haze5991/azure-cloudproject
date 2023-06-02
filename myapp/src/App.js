import { useEffect, useState } from 'react'
import './App.css';

function App() {
    const [blog, setBlogs] = useState([])
    useEffect (() => {
        fetch('http://localhost:4000/')
          .then(res => res.json())
          .then(data => setBlogs(data))
    }, [])
 
  return (
    <div className="App">
      <header className="App-header">
          <h1> Welcome to HelloWorld app </h1>
          {blogs && blog.map(blog => (
            <div key= {blog.id}>{blog.title}</div>
            ))}
      </header>
    </div>
  );
}

export default App;