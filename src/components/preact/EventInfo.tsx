import { formatEventDate } from '@/lib/time';
import type { ScheduledEvent } from '@/types/event';
import { CalendarClock, MapPin } from 'lucide-preact';
import { useEffect, useState } from 'preact/hooks';
import Spinner from './Spinner';

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

  const [event, setEvent] = useState<ScheduledEvent | undefined | null>(
    undefined
  );
  useEffect(() => {
    setEvent(undefined);
    fetch('http://localhost:8000/events/' + id)
      .then((res) => res.json())
      .then(setEvent)
      .catch((e) => {
        console.error(e);
        setEvent(null);
      });
  }, [id]);

  if (event === undefined) {
    return (
      <div class='mt-16 flex h-screen justify-center'>
        <Spinner />
      </div>
    );
  }

  if (event === null) {
    return (
      <div className='mt-16 flex min-h-96 justify-center text-2xl text-red-700'>
        An error occured when trying to fetch event info :(
      </div>
    );
  }

  return (
    <div class='mx-auto flex min-h-96 max-w-2xl flex-col px-2 py-8 pb-2 sm:px-4 md:p-12'>
      <img src={event.imageUrl} />
      <div className='py-2' />

      <h3 class='text-2xl font-bold'>{event.name}</h3>
      <div className='py-0.5' />

      <div className='flex items-center gap-x-2 font-semibold text-gray-700'>
        <CalendarClock className='stroke-gray-500' size={24} />
        <div>{formatEventDate(event.startTime, event.endTime)}</div>
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
