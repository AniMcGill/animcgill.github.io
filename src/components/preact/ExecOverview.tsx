import { useState } from 'preact/hooks';
import '../../styles/util.css';
import clsx from 'clsx';

type Exec = {
  name: string;
  role: string;
  major: string;
  favorite: string;
  funFact: string;
  image: string;
  fullImage: boolean;
};

const EXECS: Exec[] = [
  {
    name: 'Claire',
    role: 'President',
    major: 'U2 East Asian Studies',
    favorite: "Mobile Suit Gundam: Char's Counterattack",
    funFact:
      "there's some execs that aren't listed on the website or the instagram so you gotta come to club events to meet them. its like unlocking funky kong",
    image: '/assets/execs/claire.png',
    fullImage: true,
  },
  {
    name: 'Raiden',
    role: 'Vice President',
    major: 'U2(?) Honours physics',
    favorite: 'CITY THE ANIMATION',
    funFact:
      'The above is a lie. The best anime is Revolutionary Girl Utena actually',
    image: '/assets/execs/raiden.png',
    fullImage: false,
  },
  {
    name: 'Vee',
    role: 'VP Arts',
    major: 'U2 Psychology',
    favorite: '(Manga) Vinland Saga',
    funFact: "I'm (almost) always tabling at Comic Con and Otakuthon!",
    image: '/assets/execs/vee.png',
    fullImage: true,
  },
  {
    name: 'Tina',
    role: 'VP Arts',
    major: 'U2 Business Analytics',
    favorite: 'Nichijou',
    funFact: 'i’ve made my own visual novel before!',
    image: '/assets/execs/tina.png',
    fullImage: true,
  },
  {
    name: 'Gianna',
    role: 'VP Arts/Finance',
    major: 'U1 Stats & CS',
    favorite: 'Blue Period!!!!!',
    funFact: 'i play 5 instruments :)',
    image: '/assets/execs/gianna.png',
    fullImage: true,
  },
  {
    name: 'pom',
    role: 'VP Comms',
    major: 'U1 Pharmacology',
    favorite: 'Yohaji',
    funFact:
      "most of my stationary is from picking up other people's lost items",
    image: '/assets/execs/pom.png',
    fullImage: true,
  },
  {
    name: 'Laika',
    role: 'VP External',
    major: 'U3 Liberal Arts',
    favorite: 'Bocchi the Rock',
    funFact: 'i like vocaloid and wagging my tail',
    image: '/assets/execs/laika.png',
    fullImage: true,
  },
  {
    name: 'Derek',
    role: 'VP Events',
    major: 'U2 Materials Engineering',
    favorite: 'Girls Band Cry',
    funFact:
      'I own every Togenashi Togeari album and a Kessoku Band album signed by ZAQ',
    image: '/assets/execs/derek.jpg',
    fullImage: true,
  },
  {
    name: 'Jade :3',
    role: 'VP Special Events',
    major: 'U2 Psychology',
    favorite: 'Blue Period',
    funFact:
      'i have over 500 tabs of manga, manhwa, and light novels open on my phone',
    image: '/assets/execs/jade.png',
    fullImage: false,
  },
  {
    name: 'Jessica',
    role: 'VP Finance',
    major: 'U3 Anatomy & Cell Biology',
    favorite: 'One Piece',
    funFact: 'I avoid watching the last few episodes of any series',
    image: '/assets/execs/jessica.jpg',
    fullImage: false,
  },
  {
    name: 'Jane',
    role: 'VP Photos',
    major: 'U2 Pharmacology',
    favorite: 'One Piece',
    funFact: 'bread ends are the best part of bread',
    image: '/assets/execs/jane.png',
    fullImage: true,
  },
  {
    name: 'James',
    role: 'VP Special Events',
    major: 'U2 Political Science',
    favorite: 'Attack on Titan & Magi',
    funFact: 'Been reading Naruto self insert fanfics for over 4 years',
    image: '/assets/execs/james.jpg',
    fullImage: true,
  },
  {
    name: 'Matt',
    role: 'VP Event (singular) + Equity',
    major: 'U3',
    favorite: 'Attack On Titan',
    funFact: 'i invented the golden ninja from lego ninjago before lego did',
    image: '/assets/execs/matt.png',
    fullImage: true,
  },
  {
    name: 'Atlas',
    role: 'VP Camera',
    major: 'U4 East Asian Studies',
    favorite: 'Lord of the Mysteries',
    funFact: 'A horse has more than 1 power',
    image: '/assets/execs/atlas.png',
    fullImage: true,
  },
];

type ExecDescriptionProps = {
  exec: Exec;
};

const ExecDescription = ({ exec }: ExecDescriptionProps) => {
  return (
    <div class='flex min-h-full max-w-xl flex-col items-center overflow-hidden border-l-[3px] border-gray-200 px-16 py-8'>
      <div class='px-2 py-1 text-2xl font-semibold'>{exec.name}</div>
      <div class='px-2 py-1 text-xl font-semibold text-gray-700'>
        {exec.role}
      </div>
      <div class='py-4' />
      <img
        src={exec.image}
        width='340px'
        class='border border-gray-500 grayscale'
      />
      <div class='py-4' />
      <div class='text-center'>
        <div class='text-lg font-semibold text-gray-700'>
          Favorite anime/manga:
        </div>
        <div>{exec.favorite}</div>
        <div class='py-4' />
        <div class='text-lg font-semibold text-gray-700'>Fun fact:</div>
        <div class='max-w-80'>{exec.funFact}</div>
      </div>
    </div>
  );
};

const ExecOverview = () => {
  const [selectedExec, setSelectedExec] = useState(0);

  return (
    <div class='mx-auto flex h-full w-fit gap-2'>
      <div class='min-w-[768px] px-16 pt-8'>
        <div class='relative mx-auto grid grid-cols-4 grid-rows-5'>
          {EXECS.map((exec, i) => (
            <div
              class='noise relative col-span-1 h-56 w-40 cursor-pointer overflow-hidden border-[5px]'
              onClick={() => setSelectedExec(i)}
            >
              <div
                class={clsx(
                  'absolute z-10 flex h-10 w-full items-center border-b-[4px] border-gray-800'
                )}
              >
                <div class='flex h-full w-10 items-center justify-center border-r-[3px] border-gray-800 bg-white text-xl font-bold'>
                  {i + 1}
                </div>
                <div class='flex h-full w-full items-center bg-white p-1'>
                  {exec.name}
                </div>
              </div>
              <img
                class={clsx('grayscale', !exec.fullImage ? 'mt-10' : '')}
                src={exec.image}
              />
              <div
                class={clsx(
                  i === selectedExec
                    ? 'bg-blue-600/40'
                    : 'transition duration-200 hover:bg-blue-600/40',
                  'absolute top-0 z-10 h-full w-full'
                )}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <ExecDescription exec={EXECS[selectedExec]} />
    </div>
  );
};

export default ExecOverview;
