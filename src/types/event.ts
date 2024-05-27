export type ScheduledEvent = {
  id: string;
  name: string;
  location: string;
  description: string;
  startTime: number;
  endTime: number;
  imageUrl: string;
};

export type EventStatus = 'live' | 'upcoming' | 'past';
