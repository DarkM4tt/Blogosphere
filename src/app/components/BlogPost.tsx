import { formatDate } from "../utils/formatDate";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    date: string;
    author: string;
    description: string;
    thumbnail: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => (
  <div className="mb-8 border-b-[2px] border-gray-100 hover:bg-gray-200 hover:p-4 hover:rounded-lg">
    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
    <div className="mb-2">
      <span className="mr-2">{formatDate(post.date)}</span> | <span className="ml-2 text-gray-400">{post.author}</span>
    </div>
    <p className="mb-6 text-sm">{post.description}</p>
  </div>
);

export default BlogPost;
