import React from 'react';
import CommentSection from './CommentSection';

const articles = [
  {
    id: 1,
    title: 'Exploring the Ancient Temples of India',
    content: `


India's ancient temples are masterpieces of architectural splendor and spiritual heritage. From the erotic sculptures of Khajuraho to the chariot-shaped Sun Temple in Konark and the vibrant Meenakshi Temple in Madurai, these sites reflect India's rich history and diverse culture. Each temple is not just a place of worship but a testament to artistic brilliance and cultural tradition, offering a unique glimpse into a civilization that has thrived for millennia.

These temples are more than historical relics; they are vibrant centers of religious and cultural life. They host festivals, rituals, and ceremonies that bring communities together and preserve age-old traditions. Exploring these ancient marvels is like stepping back in time, revealing stories and artistry that continue to resonate with spiritual and historical significance.

    `,
    image: '/images/article1.jpg',
  },
  {
    id: 2,
    title: 'My experience of the Heritage Craft Mela',
    content: `
      
Attending the Heritage Craft Mela this weekend was a truly enriching experience. The event was a vibrant celebration of India's rich cultural heritage, blending tradition with community spirit.

The mela featured an array of traditional Indian crafts, including pottery, weaving, metalwork, and painting. Each stall was a window into the past, with artisans passionately explaining the history and techniques behind their crafts. I particularly enjoyed the pottery stall, where I tried my hand at shaping clay. The experience was both educational and meditative, connecting me to the ancient craft in a very personal way.

The atmosphere was alive with the sounds of classical Indian music playing in the background, complemented by the aroma of delicious street food like chaat and jalebi. The colorful decorations and rangoli patterns added to the festive mood, making it a feast for the senses.

One of the highlights of the event was the communal weaving project, where visitors were invited to contribute to a large, intricate tapestry. This collaborative effort symbolized the unity and diversity of our community, making it a powerful and meaningful experience.

I highly recommend the Heritage Craft Mela to anyone interested in exploring the depth of Indian culture. It’s an event that brings people together, educates, and entertains in equal measure. Kudos to the organizers for creating such a memorable event!
    `,
    image: '/images/article2.jpg',
  },
  {
    id: 3,
    title: 'Sufi Night at Lodhi Garden',
    content: `
      The Sufi Music and Poetry Evening at Lodhi Garden was an unforgettable experience that beautifully combined music, poetry, and spirituality. Set in the tranquil and historic surroundings of one of Delhi's most beloved gardens, the event was a perfect homage to the rich traditions of Sufism.

The ambiance was enchanting, with soft lighting and traditional lanterns creating a serene and mystical atmosphere. The evening opened with a mesmerizing qawwali performance that immediately drew the audience into a state of collective reverie. The musicians' passionate voices and the rhythmic clapping were both invigorating and soothing, creating a powerful sense of unity among everyone present.

Throughout the event, the recitations of Sufi poetry, featuring works by luminaries such as Rumi and Hafiz, added depth and introspection to the night. The verses, delivered in a mix of Hindi, Urdu, and Persian, resonated with themes of love, devotion, and mysticism, leaving the audience in thoughtful silence followed by appreciative applause.

A standout moment was the performance by a Sufi dance troupe, whose graceful whirling dervish dance symbolized the soul’s journey toward enlightenment. The dancers, clad in flowing white robes, moved with such elegance and spiritual intensity that it felt as though time had paused, allowing the audience to fully immerse in the experience.

The event also featured stalls selling Sufi literature, handcrafted jewelry, and traditional attire, adding a cultural touch to the evening. I couldn't resist picking up a beautifully crafted pendant as a keepsake.

As the night concluded with a collaborative performance between musicians, poets, and dancers, the audience left with a sense of spiritual fulfillment and a deeper appreciation for Sufi culture. The Sufi Music and Poetry Evening was more than just an event; it was a soulful journey that I would highly recommend to anyone looking for an enriching cultural experience.
    `,
    image: '/images/article3.jpg',
  },
];

const ArticlePage = ({ articleId, onBack }) => {
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return <div className="text-white">Article not found.</div>;
  }

  return (
    <div className="p-8 bg-black text-white">
      <button 
        onClick={onBack} 
        className="text-slate-50 underline mb-4 hover:text-gray-300 transition duration-300"
      >
        Back to feed
      </button>
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-64 object-cover rounded-lg mb-4" 
      />
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="leading-7 text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <CommentSection articleId={articleId} />
    </div>
  );
};

export default ArticlePage;
