import React, { useEffect, useRef } from 'react';
import artPic from '../../assets/art.png';
import chemistryPic from '../../assets/chemistry.png';
import codingPic from '../../assets/coding.png';
import cookingPic from '../../assets/cooking.png';
import dancePic from '../../assets/dance.png';
import designPic from '../../assets/design.png';
import languagePic from '../../assets/language.png';
import musicPic from '../../assets/music.png';
import sciencePic from '../../assets/science.png';
import yogaPic from '../../assets/yoga.png';

const skills = [
  { name: 'Art', icon: artPic },
  { name: 'Chemistry', icon: chemistryPic },
  { name: 'Coding', icon: codingPic },
  { name: 'Cooking', icon: cookingPic },
  { name: 'Dance', icon: dancePic },
  { name: 'Design', icon: designPic },
  { name: 'Language', icon: languagePic },
  { name: 'Music', icon: musicPic },
  { name: 'Science', icon: sciencePic },
  { name: 'Yoga', icon: yogaPic },
];

const LogoItem = ({ icon, name }) => (
  <li className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
    <img
      src={icon}
      alt={name}
      className="w-20 h-20 object-contain transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/112x112/f87171/ffffff?text=Error';
      }}
    />
  </li>
);

const Scroller = ({ items, speed = 'normal', direction = 'left' }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollerInner = scrollerRef.current?.querySelector('.scroller-inner');
    if (scrollerInner && !scrollerInner.hasAttribute('data-duplicated')) {
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      });
      scrollerInner.setAttribute('data-duplicated', 'true');
    }
  }, [items]);

  const speedMap = { slow: '80s', normal: '50s', fast: '30s' };

  return (
    <div
      ref={scrollerRef}
      className="w-full overflow-hidden scroller"
      style={{
        maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
      }}
    >
      <ul
        className="flex flex-nowrap scroller-inner"
        style={{
          width: '200%',
          gap: '2rem',
          '--scroll-duration': speedMap[speed],
          '--scroll-direction': direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {items.map((skill, index) => (
          <LogoItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </ul>
    </div>
  );
};

const InfinityScroller = () => {
  const scroller1Items = skills;
  const scroller2Items = skills;

  return (
    <div className="w-full overflow-hidden">
      <style>
        {`
          .scroller-inner {
            animation: scroll var(--scroll-duration) linear infinite var(--scroll-direction);
          }
          .scroller:hover .scroller-inner {
            animation-play-state: paused;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <Scroller items={scroller1Items} speed="normal" direction="left" />
      <Scroller items={scroller2Items} speed="normal" direction="right" />
    </div>
  );
};

export default InfinityScroller;