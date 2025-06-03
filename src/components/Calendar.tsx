import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

interface CalendarProps {
  googleCalendarApiKey?: string;
  googleCalendarId?: string;
  height?: string | number;
  initialView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';
}

export default function Calendar({ 
  googleCalendarApiKey, 
  googleCalendarId,
  height = 'auto',
  initialView = 'dayGridMonth'
}: CalendarProps) {
  const eventSources = [];

  // Add Google Calendar source if API key and calendar ID are provided
  if (googleCalendarApiKey && googleCalendarId) {
    eventSources.push({
      googleCalendarApiKey,
      googleCalendarId,
      color: '#3788d8',
      textColor: 'white'
    });
  }

  return (
    <div className="w-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
        initialView={initialView}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        height={height}
        eventSources={eventSources}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        // Optional: Handle event interactions
        select={(selectInfo) => {
          console.log('Date selected:', selectInfo);
        }}
        eventClick={(clickInfo) => {
          console.log('Event clicked:', clickInfo.event);
        }}
        // Styling
        themeSystem="standard"
      />
    </div>
  );
} 