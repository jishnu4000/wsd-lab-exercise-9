import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getImages from '../api';

function Images() {
  const [images, setImages] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const fetchImages = async (query = '') => {
    const images = await getImages(query);
    setImages(images);
  };

  useEffect(() => {
    fetchImages('hospital');
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchImages(searchQuery);
  };

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Logout button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Logout
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col items-center">
        {/* Images Section */}
        <h2 className="text-3xl font-bold mb-6 text-center">Hospital Images</h2>
        <form onSubmit={handleSearchSubmit} className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for images..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Search
          </button>
        </form>
        <div className="flex flex-wrap justify-center mb-6">
          {images ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image.urls.small}
                alt={image.description}
                className="w-48 h-48 object-cover m-4 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
              />
            ))
          ) : (
            <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Images;
