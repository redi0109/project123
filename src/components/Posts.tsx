import React, { useState } from "react";
import { Post } from "./Post";



export function Posts (){
    const [posts, setPosts] = useState([
        {
          id: 1,
          userName: "Nico",
          profileImg:
            "https://imgs.search.brave.com/GXlLh1OiX7ri_ho2ET3VgE4ekiPpgpbF_zAIGZ_wJUQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/aTd0T3VlQ1ZpTllV/S1JpQzRMYTlnSGFI/YSZwaWQ9QXBp",
          postImg:
            "https://imgs.search.brave.com/CLcn3nd8xAkF5qZtNO1uqCgntuE3mlDQw3Se9jIqR6k/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/S1lOUmZoQmRRdnZG/UUhYUGVoVUtBSGFG/aiZwaWQ9QXBp",
          likes: 167,
        },
        {
          id: 2,
          userName: "redi.boraj",
          profileImg:
            "https://imgs.search.brave.com/NRuCf8ve6caCxKQVRrISAosKFJKFpDEU3-uHp5zFYTk/rs:fit:739:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/VDVVaXBxLWJiNmJm/MVZoWXRScU5nSGFF/dyZwaWQ9QXBp",
          postImg:
            "https://imgs.search.brave.com/wR0O_MqRzSqPPBBRZdxF12W4kryFsQWXiup7uGIgkwQ/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/S2FhaE9DVkZoS3lv/cVppNGh1OEJnSGFG/aiZwaWQ9QXBp",
          likes: 125,
        },
      ]);
    return (
       
        <div className="post-section">
          {posts.map((post) => (
          <Post
          post={post}
          posts={posts}
          setPosts={setPosts}
          />
          ))}
        </div>
    )
}