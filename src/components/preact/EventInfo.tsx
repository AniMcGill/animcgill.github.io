import type { ScheduledEvent } from '@/types/event';
import { format } from 'date-fns-tz';
import { useEffect, useState } from 'preact/hooks';
import Spinner from './Spinner';
import { CalendarClock, MapPin } from 'lucide-preact';
import { formatEventDate } from '@/lib/time';

const getEvent = async () => {
  return {
    id: '1',
    name: 'Spring 2024 Anime Screening',
    description:
      'We are partnering with the wonderful Anime North Compass to offer our members a 10$ discount on tickets! We will also be covering the 4.49$ Eventbrite fees for you. Membership card owners can pre-order their ticket using this link🧭',
    location: 'Toronto Congress Centre',
    startTime: 1716523200,
    endTime: 1716781500,
    imageUrl:
      'https://cdn.discordapp.com/guild-events/1213185245646688347/24672f25f4c3cebb19170df538c3baa1?size=1024',
  };
};

const formatDate = (time: number) => {
  return format(new Date(time * 1000), 'PPp', {
    timeZone: 'America/Montreal',
  });
};

const EventInfo = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const id = params.id;

  if (!id) {
    return (
      <div class='flex h-96 items-center justify-center text-center text-4xl text-gray-700'>
        Event not found :(
      </div>
    );
  }

  const [event, setEvent] = useState<ScheduledEvent | undefined>();
  useEffect(() => {
    setEvent(undefined);
    getEvent().then(setEvent);
  }, [id]);

  if (!event) {
    return (
      <div class='flex h-96 items-center justify-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div class='mx-auto flex max-w-2xl flex-col px-2 py-8 pb-2 sm:px-4 md:p-12'>
      <img src={event.imageUrl} />
      <div className='py-2' />

      <h3 class='text-2xl font-bold'>{event.name}</h3>
      <div className='py-0.5' />

      <div className='flex items-center gap-x-2 font-semibold text-gray-700'>
        <CalendarClock className='stroke-gray-500' size={24} />
        <div>
          {formatEventDate(event.startTime, event.endTime)}
          {/* {formatDate(event.startTime)} - {formatDate(event.endTime)} */}
        </div>
      </div>
      <div class='py-0.5'></div>
      <div className='text flex items-center gap-x-2 font-semibold text-gray-700'>
        <MapPin className='stroke-gray-500' size={24} />
        <div>{event.location}</div>
      </div>
      <div class='py-2'></div>

      <div class='line-clamp-5 overflow-hidden overflow-ellipsis text-gray-700'>
        {event.description}
      </div>
      <div className='py-8' />
    </div>
  );
};

export default EventInfo;
