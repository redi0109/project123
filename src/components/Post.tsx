export function Post ({post, setPosts, posts, }){
    return (
        <div>
        <img
          className="profile-image"
          src={post.profileImg}
          alt="profile image"
          width={50}
        />
        <h3 className="username">{post.userName}</h3>
        <img
          className="post-image"
          src={post.postImg}
          alt="post image"
          width={200}
        />

        <div className="likes-section">
          <p>Likes: {post.likes}</p>
          <button
            className="like-button"
            onClick={() => {
              // make a copy of original state
              // change what you have to change
              // update state

              const newPosts = structuredClone(posts);
              let likedPost = newPosts.find(
                (likePost) => post.id === likePost.id
              );
              likedPost.likes++;

              setPosts(newPosts);
            }}
          >
            Like Post
          </button>
          <button 
            className="delete-button"
            onClick = {( ) =>{
                // krijo kopje te te dhenave origjinale
                // ndrysho vetem te dhenen qe duhet ndryshuar
                // ri-update te dhenat

                const newPosts = structuredClone(posts);
                let deletedPost = newPosts.find(
                    (deletePost) => post.id === deletePost.id
                );
                newPosts.splice(newPosts.indexOf(deletedPost), 1);
                setPosts(newPosts);
                
            }}
          >
            Delte Post
          </button>
        </div>
      </div>
    )
}