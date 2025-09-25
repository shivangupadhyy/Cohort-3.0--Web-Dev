import { useState } from "react";
import { PostComponent } from "./PostComponent";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    ></PostComponent>
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Shivang",
        subtitle: "2000 follower",
        time: "2m ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "What to know how to win big? check out how these folks won $6000 bounties",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
