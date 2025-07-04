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
        <img src={img} alt={title} className="h-60 w-full object-cover object-center" />
        <div className="p-6 flex flex-col justify-between flex-1 gap-5">
            <div className='flex flex-col gap-2.5'>
                <span className="text-sm font-semibold text-[#FF0F0F]">{category}</span>
                <h2 className="text-black text-lg font-bold tracking-wide">{title}</h2>
                {description && <p className="text-[#666666] text-sm mb-[14.px] flex-1 tracking-wide">{description}</p>}
            </div>
            <div className='flex flex-row items-center gap-2.5 pt-4 border-t border-[#C4C4C4]'>
                <img className='rounded-full' src="/placeholder-person.jpeg" alt="Placeholder Person" />
                <span className="text-sm text-[#A8A6AC]">Written by <br />
                    <span className='text-[16px] text-[#141414] font-semibold mt-2'>{author}</span>
                </span>
            </div>
        </div>
    </div>
);

export default BlogCard;