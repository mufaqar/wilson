import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Author {
  name: string;
  profile: string;
}

interface CardProps {
  img: string;
  title: string;
  link: string;
  description: string;
  author: Author;
  date: string;
  timeOrMonth?: string;
  category: string;
}

const BlogGrid: React.FC = () => {
  const cards: CardProps[] = [
    {
      img: '/images/post1.png',
      title: 'FedRAMP’s Latest Changes and Expectations',
      link: '#',
      description:
        '[short description goes here] minim mollit non deseru aliqua lorem ipsum dolor do amet sint...',
      author: {
        name: 'Ablea',
        profile: '/images/authore1.png',
      },
      date: '10 May 2022',
      timeOrMonth: '3 min read',
      category: 'NEWS',
    },
    {
      img: '/images/post1.png',
      title: 'Improving Cybersecurity Awareness in Healthcare',
      link: '#',
      description:
        '[short description goes here] minim mollit non deseru aliqua lorem ipsum dolor do amet sint...',
      author: {
        name: 'Bruce',
        profile: '/images/authore1.png',
      },
      date: '9 May 2022',
      timeOrMonth: '5 min read',
      category: 'PRODUCT',
    },
    {
      img: '/images/post1.png',
      title: 'FedRAMP Compliance: What You Need to Know?',
      link: '#',
      description:
        '[short description goes here] minim mollit non deseru aliqua lorem ipsum dolor do amet sint...',
      author: {
        name: 'Daria',
        profile: '/images/authore1.png',
      },
      date: '8 May 2022',
      timeOrMonth: '7 min read',
      category: 'TECH',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-5 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-medium text-black">
            Discover Innovative Solutions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index}>
              <div>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={387}
                  height={387}
                  className="object-contain"
                />
              </div>
              <div className='px-4 pb-10 pt-5 flex flex-col flex-grow'>
                <Link href="#" className="md:text-xs text-xs font-bold text-wils_orang mb3">
                  {card.category}
                </Link>
                <Link href={card?.link} className="md:text-2xl text-xl font-medium text-black mb-3.5">
                  {card.title}
                </Link>
                <p className='text-sm font-normal text-black'>
                  {card.description}
                </p>
                <div className='flex gap-4 items-center py-5 border-t border-black/15 mt-5'>
                  <div className='w-2/12'>
                    <Image
                      src={card.author.profile}
                      alt={card.author.name}
                      width={46}
                      height={46}
                      className="rounded-full w-full"
                    />
                  </div>
                  <div className='w-10/12'>
                    <p className='text-sm font-medium text-black'>
                      {card.author.name}
                    </p>
                    <ul className='flex items-center flex-wrap gap-5'>
                      <li className='text-xs font-normal text-black/50 '>
                        {card?.date}
                      </li>
                      <li className='text-xs font-normal text-black/50 '>
                        {card?.timeOrMonth}
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;