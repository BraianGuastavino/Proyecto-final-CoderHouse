import { useEffect, useState } from 'react';
import './Presentacion.css';

export const Presentacion = () => {
  const images = [
    {
      imageSrc: 'comics.jpg',
      imageText: 'Comics'
    },
    {
      imageSrc: 'manga.jpg',
      imageText: 'Mangas'
    },
    {
      imageSrc: 'libros.jpg',
      imageText: 'Libros'
    },
  ];

  const [index, setIndex] = useState(0);

  const currentImage = images[index].imageSrc;
  const currentText = images[index].imageText;

  const previous = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      previous();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className='carousel'>
      <img className='images-carousel' src={`src/components/ItemListContainer/images/${currentImage}`} alt=""/>
      <h1 className='images-text'>{currentText}</h1>
    </div>
  );
};

