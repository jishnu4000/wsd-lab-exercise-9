import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getDogImages from '../api';

function Dog() {
  const [images, setImages] = useState(false);
  const navigate = useNavigate();

  const fetchDogImages = async () => {
    const images = await getDogImages();
    setImages(images);
  };

  useEffect(() => {
    getDogImages();
  }, []);

  const handleLogout = () => {
    navigate('/');
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

      {/* Dog Images Section */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Dog Images</h2>
        <div className="flex flex-wrap justify-center mb-6">
          {images ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Dog"
                className="w-48 h-48 object-cover m-4 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
              />
            ))
          ) : (
            <h2 className="text-xl font-semibold text-gray-800">Loading...</h2>
          )}
        </div>
        <button
          onClick={fetchDogImages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Get Dog Images
        </button>
      </div>
    </div>
  );
}

export default Dog;
