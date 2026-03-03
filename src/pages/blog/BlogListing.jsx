import { useEffect, useState } from "react";

export default function BlogListing() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      // Simulate fetching posts from an API
      const response = await fetch("https://mimic-server-api.vercel.app/posts");
      const data = await response.json();
      //   console.log("Fetched posts:", data);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">My posts ({posts.length})</h1>
      <ul className="space-y-2">
        {posts.map((post) => {
          return (
            <li
              className="bg-zinc-100 hover:bg-zinc-200 p-5 rounded"
              key={post.id}
            >
              <a
                href={`/blog/${post.id}`}
                className="flex items-start justify-start gap-4"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {post.id}
                </div>
                <div>
                  <h1 className="font-semibold text-xl">{post.title}</h1>
                  <p className="text-gray-600 mt-2">{post.body}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
