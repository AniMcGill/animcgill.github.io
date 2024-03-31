import { useEffect, useRef, useState } from 'preact/hooks';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-preact';

export type ExecSummary = {
  name: string;
  position: string;
  major: string;
  year: string;
  desc: string;
  img: string;
};

type Props = {
  execs: ExecSummary[];
};

const ExecCarousel = ({ execs }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === execs.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? execs.length - 1 : prevIndex - 1
    );
  };

  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    interval.current = setInterval(nextSlide, 5000);
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
    interval.current = setInterval(nextSlide, 5000);
  };

  const exec = execs[activeIndex];

  return (
    <div className='flex w-full max-w-5xl flex-col items-center justify-between rounded-md p-8 md:flex-row'>
      <div>
        <div className='relative overflow-hidden rounded-md border-2 border-black'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              width: 360,
              height: 360,
            }}
          >
            {execs.map((exec, index) => (
              <img
                key={index}
                src={exec.img}
                alt={exec.name}
                width={360}
                height={360}
              />
            ))}
          </div>
          <button
            onClick={() => {
              handleClick();
              prevSlide();
            }}
            className='absolute left-2 top-1/2 -translate-y-1/2'
          >
            <ArrowLeftCircle size={32} stroke='white' />
          </button>
          <button
            onClick={() => {
              handleClick();
              nextSlide();
            }}
            className='absolute right-2 top-1/2 -translate-y-1/2'
          >
            <ArrowRightCircle size={32} stroke='white' />
          </button>
        </div>
      </div>
      <div className='flex-1 p-8 text-center'>
        <div className='text-4xl font-semibold'>{exec.name}</div>
        <div className='text-xl font-semibold uppercase text-gray-500'>
          {exec.position}
        </div>
        <div className='py-1' />
        <div className='text-xl font-medium text-gray-500'>
          {exec.major} ({exec.year})
        </div>
      </div>
    </div>
  );
};

export default ExecCarousel;
