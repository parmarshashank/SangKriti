import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Exploring the Ancient Temples of India',
    excerpt: 'Discover the rich history and architecture of ancient temples across India.',
    image: '/images/article1.jpg',
  },
  {
    id: 2,
    title: 'My experience of the Heritage Craft Mela',
    excerpt: 'How I felt attending the heritage craft mela.',
    image: '/images/article2.jpg',
  },
  {
    id: 3,
    title: 'Sufi Night at Lodhi Garden',
    excerpt: 'A truly mesmerising experience.',
    image: '/images/article3.jpg',
  },
];

const ArticleList = ({ onArticleClick }) => {
  return (
    <div className="p-8 bg-black">
      <div className="space-y-6">
        {articles.map(article => (
          <div
            key={article.id}
            className="flex bg-gray-900 shadow-md rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition duration-300"
            onClick={() => onArticleClick(article.id)}
          >
            {/* Reduced height of image */}
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-1/4 h-32 object-cover"  // Changed width to w-1/4 and set fixed height
            />
            <div className="p-4 text-white flex-grow">
              <h2 className="text-lg font-bold">{article.title}</h2>
              {/* Shortened excerpt to keep article compact */}
              <p className="text-gray-400 text-sm">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
