import React, { useEffect, useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://192.168.0.96:3000/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming the images are in data.images array
        setImages(data.images || []); // Adjust based on your API response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={styles.gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={`Image ${index}`} // Fixed the template literal
          style={styles.image}
        />
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px', // Space between images
  },
  image: {
    width: '150px', // Adjust as necessary
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
};

export default ImageUpload;
