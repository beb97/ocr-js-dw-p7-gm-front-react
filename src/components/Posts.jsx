import '../styles/Posts.css';
import Api from '../js/api';
import Post from './Post';
import { useState, useEffect } from 'react'


// https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7135822-reutilisez-vos-composants-avec-les-props
function Posts() {
  
  const [posts, updatePosts] = useState([]) 
  
  useEffect( () => {

    Api.getPosts().then(
      // posts => console.log(posts)
      posts => updatePosts(posts)
    );

  }, []); 
  
  return (
    <section>
        <a href="new-post.html">
          <div className="card" id="new-post">
            <div className="card-body">
              <h2>
                <i className="fas fa-plus-circle"></i>
              </h2>
              <p className="message text-white">Composez un nouveau message</p>
            </div>
          </div>
        </a>

        {
            posts.map((post, index) => {
              return (
                <Post post={post} key={index}/>
             )}
            )
        }
    
      </section>
    );
  }


export default Posts;