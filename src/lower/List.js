import React from 'react';
import './List.css';
import img1 from '../images/mj-tangonan-OE6qLhRHhhs-unsplash.jpg';
import img2 from '../images/jcob-nasyr-ppMxyOhPtd8-unsplash.jpg';

let List = () => {
  const Arr = [
    {
      image: img1,
      para: 'Explore the hidden waterfall deep inside the Amazon Jungle'
    },
    {
      image: img2,
      para: 'Travel through the island of Bali in a private Cruise'
    }
  ];

  return (
    <>
    <div className='super'>
      {Arr.map((item, index) => (
        // <div className='super'>
        <div key={index} className='mainnn'>
          <div className="images">
            <img src={item.image} width={480} height={320} alt={`Image ${index + 1}`}  className='paji' />
          </div>
          <div>
            <h4 className='oe'>{item.para}</h4>
          </div>
        </div>
        // </d/iv>
      ))}
      </div>
      

    </>
  );
};

export default List;
