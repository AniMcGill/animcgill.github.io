import type { EventStatus, ScheduledEvent } from '@/types/event';
import { useEffect, useState } from 'preact/hooks';
import Spinner from './Spinner';
import EventCard from './EventCard';

type EventGroupProps = {
  events: ScheduledEvent[];
  status: EventStatus;
};

const EventGroup = ({ events, status }: EventGroupProps) => {
  return (
    <div class='flex flex-wrap justify-center gap-6'>
      {events.map((e) => (
        <EventCard event={e} status={status} />
      ))}
    </div>
  );
};

type EventData = {
  currentEvents: ScheduledEvent[];
  upcomingEvents: ScheduledEvent[];
  pastEvents: ScheduledEvent[];
};

const Events = () => {
  const [eventData, setEventData] = useState<EventData | null | undefined>(
    undefined
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/events`)
      .then((res) => res.json())
      .then(setEventData)
      .catch((e) => {
        console.error(e);
        setEventData(null);
      });
  }, []);

  if (eventData === undefined) {
    return (
      <div className='flex h-screen justify-center'>
        <Spinner />
      </div>
    );
  }

  if (eventData === null) {
    return (
      <div className='flex min-h-96 justify-center'>
        <div className='text-2xl text-red-700'>
          An error occured when trying to fetch event info :(
        </div>
      </div>
    );
  }

  const { currentEvents, upcomingEvents, pastEvents } = eventData;

  return (
    <>
      {currentEvents && currentEvents.length > 0 && (
        <>
          <h2 class='mx-auto text-2xl font-bold lg:text-4xl'>Happening now!</h2>
          <div class='py-1 lg:py-2' />
          <div class='mx-auto w-16 bg-background py-0.5 lg:w-24 lg:py-1' />
          <div class='py-2 lg:py-4' />
          <EventGroup events={currentEvents} status='live' />
          <div class='py-6' />
        </>
      )}

      <h2 class='text-2xl font-bold lg:text-3xl'>Upcoming events</h2>
      <div class='py-1 lg:py-2'></div>
      <div class='mx-auto w-16 bg-background py-0.5 lg:w-24 lg:py-1'></div>
      <div class='py-2 lg:py-4'></div>
      {upcomingEvents.length > 0 ? (
        <EventGroup events={upcomingEvents} status='upcoming' />
      ) : (
        <div class='text-2xl text-gray-700'>No events happening soon :(</div>
      )}
      <div class='py-6'></div>

      <h2 class='text-2xl font-semibold text-gray-700 lg:text-3xl'>
        Past events
      </h2>
      <div class='py-2 lg:py-4'></div>
      {pastEvents.length > 0 ? (
        <EventGroup events={pastEvents} status='past' />
      ) : (
        <div class='text-xl text-gray-700 lg:text-2xl'>Nothing found.</div>
      )}
    </>
  );
};

export default Events;
