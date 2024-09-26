'use client';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Image from 'next/image';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Sample events and temporarly data
const events = [
  {
    id: 1,
    title: 'Meeting with Team',
    time: '10:00 AM 12.00 PM',
    description: 'Discuss project updates and next steps.',
  },
  {
    id: 2,
    title: 'Lunch with Client',
    time: '12:30 PM - 4.00 PM',
    description: 'Meet with the client to discuss new requirements.',
  },
  {
    id: 3,
    title: 'Code Review',
    time: '3:00 - 8.00 PM',
    description: 'Review the latest code changes and provide feedback.',
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
