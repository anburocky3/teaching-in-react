import { useParams } from "react-router";
import Header from "../../components/Header";

export default function BlogDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog Detail Page</h1>
      <p className="text-gray-700">
        This is the detail page for a specific blog post. Here we will show the
        content of the blog post.
      </p>

      <div>
        <p>Blog ID: {id}</p>
        <small>
          Technically you should filter the blog post and display the content
          for the given ID.
        </small>
      </div>
    </div>
  );
}
