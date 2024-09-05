import React from 'react';
import Carousel from '../components/Carousel';
import ChatBot from '../components/ChatBot';

const Home = () => {
  return (
    <>
      <div className="relative">
        <img 
          src="/images/home-bg.jpg" 
          alt="Cultural Background" 
          className="w-full h-auto" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 style={{ 
            fontSize: '3rem', 
            fontFamily: 'Calibri, sans-serif', 
            color: 'white',
            textAlign: 'center',
            marginBottom: '6rem',
            fontWeight: 'bold' 
          }}>
            Where culture <br /> meets community
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 px-8 py-8 pb-8 bg-black">
        <div className="w-1/2 pr-8">
          <h2 
            style={{ fontSize: '36px', fontFamily: 'Calibri', fontWeight: 'bold' }} 
            className="text-white"
          >
            Welcome to SangKriti
          </h2>
          {<br></br>}
          <p 
            style={{ fontSize: '18px', fontFamily: 'Calibri', lineHeight: '1.6' }} 
            className="text-white"
          >
            Explore the vibrant world of culture and heritage with SangKriti. Connect with your roots, discover nearby heritage sites, and engage in cultural events. Our community-driven platform, powered by KritiBot, helps you uncover hidden gems, learn fascinating stories, and share your experiences. Join us in celebrating and preserving our diverse cultural heritage.
          </p>
        </div>

        <div className="w-1/2">
          <img 
            src="/images/heritage-banner.jpg" 
            alt="Cultural Heritage"
            className="w-full h-auto m-0 p-0"
          />
        </div>
      </div>
      <Carousel />
      
      {/* Footer Section */}
      <footer className="bg-black text-white px-8 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">About SangKriti</h4>
            <p className="text-gray-400">
              SangKriti is your platform to explore culture and heritage, connect with like-minded individuals, and discover the beauty of cultural history. Join us to celebrate and preserve our heritage.
            </p>
          </div>
          
          <div className="space-y-4">

          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 ScaredToCompile</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
