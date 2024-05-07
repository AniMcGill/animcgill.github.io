import { type ScheduledEvent, type EventStatus } from '@/types/event';
import { CalendarClock, MapPin } from 'lucide-preact';
import { formatEventDate } from '@/lib/time';
import { clsx } from 'clsx';
import Markdown from 'markdown-to-jsx';

type Props = {
  event: ScheduledEvent;
  status: EventStatus;
};

const EventCard = ({ event, status }: Props) => {
  const date = formatEventDate(event.startTime, event.endTime, true);

  return (
    <a
      class='h-80 w-80 cursor-pointer overflow-hidden rounded-xl shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-xl'
      href={`/events/info?id=${event.id}`}
    >
      <img src={event.imageUrl} />
      <div class='p-4'>
        <h3 class='overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold'>
          {event.name}
        </h3>
        <div
          className={clsx(
            'flex items-center gap-x-1 text-sm font-semibold',
            status === 'live'
              ? 'text-green-600'
              : status === 'upcoming'
                ? 'text-accent'
                : 'text-gray-600'
          )}
        >
          <CalendarClock size={18} />
          {date}
        </div>
        <div class='py-0.5'></div>
        <div class='flex items-center gap-x-1 text-sm font-semibold text-gray-600'>
          <MapPin className='stroke-gray-500' size={18} />
          {event.location}
        </div>
        <div class='py-1'></div>
        <div class='line-clamp-4 overflow-hidden overflow-ellipsis text-sm text-gray-700'>
          <Markdown
            options={{
              overrides: {
                a: {
                  component: 'span',
                  props: {
                    class: 'text-gray-800 underline',
                  },
                },
              },
            }}
          >
            {event.description}
          </Markdown>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
