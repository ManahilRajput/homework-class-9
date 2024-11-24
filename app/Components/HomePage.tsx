import React from 'react';
import Card from './Card';

const HomePage = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'This is the first card of the first row.',
      imageUrl: '/Screenshot_107.png',
    },
    {
      title: 'Card 2',
      description: 'This is the second card of the first row.',
      imageUrl: '/Screenshot_108.png',
    },
    {
      title: 'Card 1',
      description: 'This is the first card of second row.',
      imageUrl: '/Screenshot_109.png',
    },
    {
      title: 'Card 2',
      description: 'This is the second card of the second row',
      imageUrl: '/Screenshot_110.png',
    },
    {
      title: 'Card 3',
      description: 'This is the third card of the third row',
      imageUrl: '/Screenshot_111.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row gap-5">
        <div className='flex-1'>
          <Card {...cards[0]} />
        </div>
        <div className='flex-1'>
          <Card {...cards[1]} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8 gap-5">
        <div className='flex-1 md:flex-1/3'>
          <Card {...cards[2]} />
        </div>
        <div className='flex-1 md:flex-1/3'>
          <Card {...cards[3]} />
        </div>
        <div className='flex-1 md:flex-1/3'>
          <Card {...cards[4]} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;