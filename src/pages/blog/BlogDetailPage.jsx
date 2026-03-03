import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function BlogDetailPage() {
  const { id } = useParams();
  const [postId, setPostId] = useState(id);
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getBlogPost(postId) {
      // use promises and get the two fetch endpoints which should get the post details and the comments users from the users api endpoint
      const postResponse = await fetch(
        `https://mimic-server-api.vercel.app/posts/${postId}`,
      );
      const postData = await postResponse.json();
      const postUserResponse = await fetch(
        `https://mimic-server-api.vercel.app/users/${postData.userId}`,
      );
      const postUserData = await postUserResponse.json();
      const postFullData = { ...postData, user: postUserData };
      setPost(postFullData);
      // console.log("Fetched blog post with user details:", postFullData);

      // const response = await fetch(
      //   `https://mimic-server-api.vercel.app/posts/${postId}`,
      // );
      // const data = await response.json();
      // console.log("Fetched blog post:", post);
      // setPost(data);
    }

    getBlogPost(postId);
  }, [postId]);

  return (
    <div className="p-10">
      {/* Go back icon */}
      <div className="flex items-center justify-between">
        <a
          href="/blog"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          &larr; Back to Blog
        </a>
        <button
          type="button"
          onClick={() => {
            const nextPostId = parseInt(postId) + 1;
            setPostId(nextPostId);
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded uppercase font-medium text-sm"
        >
          Next post &rarr;
        </button>
      </div>
      <div className=" mb-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <small>
          By{" "}
          <span className="font-semibold">{post.user?.name || "Unknown"}</span>
        </small>
      </div>
      <p className="text-gray-700">{post.body}</p>

      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">
          Comments ({post.comments?.length || 0})
        </h2>
        <ul className="space-y-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-4 rounded">
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-500 border w-8 h-8 text-white rounded-full flex items-center justify-center p-3">
                    {comment.id}
                  </div>
                  <span className="font-semibold">Unknown User</span>
                </div>
                {/* <p className="font-semibold">{comment.name}</p> */}
                <p className="text-gray-600 ml-10">{comment.text}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No comments available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
