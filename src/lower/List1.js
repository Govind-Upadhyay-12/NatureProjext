import './List1.css'
import React from 'react';
import img6 from '../images/ian-schneider-WymR2nYtj5M-unsplash.jpg';
import img4 from '../images/jcob-nasyr-ppMxyOhPtd8-unsplash.jpg';
import img5 from '../images/mike-benna-SBiVq9eWEtQ-unsplash.jpg';

const List1 = () => {
  const Hey = [
    {
      photo: img6,
    },
    {
      photo: img4,
    },
    {
      photo: img5,
    },
  ];

  return (
    <div className='aeo'>
      {Hey.map((item, index) => (
        <div key={index} className='pr'>
          <img src={item.photo} alt={`Image ${index + 1}` }  width={350} height={300}/>
        </div>
      ))}
    </div>
  );
};

export default List1;
