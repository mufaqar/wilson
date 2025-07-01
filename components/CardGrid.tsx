import React from 'react';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  date: string;
  timeOrMonth?: string;
  category: 'PRODUCT' | 'TECH';
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  author,
  date,
  timeOrMonth,
  category,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
              {category}
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            {timeOrMonth && (
              <span className="flex items-center">
                {category === 'PRODUCT' ? (
                  <>
                    <FiCalendar className="mr-1" />
                    {timeOrMonth}
                  </>
                ) : (
                  <>
                    <FiClock className="mr-1" />
                    {timeOrMonth}
                  </>
                )}
              </span>
            )}
          </div>
        </div>

        <div className="mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <h4 className="text-lg text-gray-600">{subtitle}</h4>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">{author}</span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>

        <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
          Read more <FiArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

const CardGrid: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: 'Improving Cybersecurity Awareness In Healthcare',
      subtitle: 'FeqRAMP\'s Latest Changes And Expectations',
      description: 'Direct description goes hard when mail now shows digital beam teams slide six short after...',
      author: 'Ablea',
      date: '2022 - 1 st month',
      timeOrMonth: '4 st month',
      category: 'PRODUCT',
    },
    {
      title: 'FeqRAMP Compliance: What You Need To Know?',
      subtitle: 'Discover Innovative Solutions',
      description: 'Other description goes hard when mail now shows digital beam teams slide six short after...',
      author: 'Davis',
      date: 'May 2022',
      timeOrMonth: '7 min out',
      category: 'TECH',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Discover Innovative Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;