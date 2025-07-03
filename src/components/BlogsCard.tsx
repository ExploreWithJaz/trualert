import React from 'react';

type BlogCardProps = {
  img: string;
  category: string;
  title: string;
  description: string;
  author: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ img, category, title, description, author }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img src={img} alt={title} className="h-48 w-full object-cover" />
    <div className="p-5 flex flex-col flex-1">
      <span className="text-xs font-semibold text-[#FF0F0F] mb-2">{category}</span>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>}
      <span className="text-xs text-gray-500">Written by <b>{author}</b></span>
    </div>
  </div>
);

export default BlogCard;