import { useParams } from "react-router-dom";

const blogData = {
  1: { title: "React Router Guide", content: "React Router allows navigation in React apps..." },
  2: { title: "Using React.lazy()", content: "Lazy loading helps improve performance in React..." },
  3: { title: "Tailwind in React", content: "Tailwind CSS makes styling in React easy and fast..." },
};

function Blogdetail() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <h2 className="p-8 text-red-500">Blog not found!</h2>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{blog.title}</h2>
      <p className="mt-4 text-gray-700">{blog.content}</p>
    </div>
  );
}

export default Blogdetail;
