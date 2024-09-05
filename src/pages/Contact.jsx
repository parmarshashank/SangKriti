import React, { useState } from 'react';
import ArticleList from '../components/ArticleList';
import ArticlePage from '../components/ArticlePage';

const Community = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (articleId) => {
    setSelectedArticle(articleId);
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto py-8">
        <button className="bg-black hover:bg-gray-200 text-white hover:text-black font-bold py-2 px-4 rounded mb-8">
          + Add New Post
        </button>
        {selectedArticle ? (
          <ArticlePage articleId={selectedArticle} onBack={handleBackToArticles} />
        ) : (
          <ArticleList onArticleClick={handleArticleClick} />
        )}
      </div>
    </div>
  );
};

export default Community;
