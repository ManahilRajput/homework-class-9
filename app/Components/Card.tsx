import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-lg text-blue-400 font-bold mt-4">{title}</h2>
      <p className="text-blue-900 capitalize font-bold">{description}</p>
    </div>
  );
};

export default Card;