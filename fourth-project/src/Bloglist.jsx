import { Link } from "react-router-dom";

const blogs = [
  { id: 1, title: "React Router Guide", description: "Learn React Router basics" },
  { id: 2, title: "Using React.lazy()", description: "Optimize your React app" },
  { id: 3, title: "Tailwind in React", description: "Style React apps with Tailwind" },
];

function Bloglist() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-2 inline-block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bloglist;
