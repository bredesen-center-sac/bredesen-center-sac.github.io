import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';

interface CalendarProps {
  googleCalendarApiKey?: string;
  googleCalendarId?: string;
  height?: string | number; // Note: aspectRatio might be overridden if height is a fixed value
  defaultView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';
  defaultAspectRatio?: number;
  mobileAspectRatio?: number;
}

const MOBILE_BREAKPOINT = 768; // pixels

const DESKTOP_TOOLBAR = {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay'
};

const DESKTOP_TITLE_FORMAT: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }; // Example for desktop

const MOBILE_TOOLBAR = {
  left: 'prev,next',
  center: 'title',
  right: 'today' // Simplified: removed listWeek button as view is fixed on mobile
};

// More compact title for mobile, especially for listWeek
const MOBILE_TITLE_FORMAT: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }; 

export default function Calendar({ 
  googleCalendarApiKey, 
  googleCalendarId,
  height = 'auto', // 'auto' works best with aspectRatio
  defaultView = 'dayGridMonth',
  defaultAspectRatio = 1.5, // Desktop aspect ratio (width/height)
  mobileAspectRatio = 2.0    // Changed to 2.0 for a shorter mobile calendar
}: CalendarProps) {
  const calendarRef = useRef<FullCalendar>(null);
  // State to hold the initial toolbar options, which might change on first load based on size
  const [initialToolbarOptions, setInitialToolbarOptions] = useState(DESKTOP_TOOLBAR);
  const [initialViewOption, setInitialViewOption] = useState(defaultView);
  const [initialAspectRatio, setInitialAspectRatio] = useState(defaultAspectRatio);
  const [initialTitleFormat, setInitialTitleFormat] = useState<Intl.DateTimeFormatOptions>(DESKTOP_TITLE_FORMAT);

  useEffect(() => {
    console.log("[Calendar Effect] Hook started. Default View:", defaultView, "Default AR:", defaultAspectRatio, "Mobile AR:", mobileAspectRatio);

    const setCalendarOptions = () => {
      const calendarApi = calendarRef.current?.getApi();
      if (!calendarApi) {
        console.log("[Calendar Effect] setCalendarOptions: calendarApi not ready.");
        return;
      }
      console.log(`[Calendar Effect] setCalendarOptions called. window.innerWidth: ${window.innerWidth}, Current Calendar View: ${calendarApi.view.type}`);

      if (window.innerWidth < MOBILE_BREAKPOINT) {
        console.log("[Calendar Effect] Applying MOBILE options. Target view: listWeek, Target AR:", mobileAspectRatio);
        if (calendarApi.view.type !== 'listWeek') {
          calendarApi.changeView('listWeek');
        }
        calendarApi.setOption('headerToolbar', MOBILE_TOOLBAR);
        calendarApi.setOption('aspectRatio', mobileAspectRatio);
        calendarApi.setOption('titleFormat', MOBILE_TITLE_FORMAT);
      } else {
        console.log("[Calendar Effect] Applying DESKTOP options. Target view:", defaultView, "Target AR:", defaultAspectRatio);
        if (calendarApi.view.type !== defaultView) {
          calendarApi.changeView(defaultView);
        }
        calendarApi.setOption('headerToolbar', DESKTOP_TOOLBAR);
        calendarApi.setOption('aspectRatio', defaultAspectRatio);
        calendarApi.setOption('titleFormat', DESKTOP_TITLE_FORMAT);
      }
       console.log(`[Calendar Effect] Options supposedly set. New AR: ${calendarApi.getOption('aspectRatio')}, New View: ${calendarApi.view.type}`);
    };
    
    console.log("[Calendar Effect] Setting initial options based on window width:", window.innerWidth);
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      setInitialViewOption('listWeek');
      setInitialToolbarOptions(MOBILE_TOOLBAR);
      setInitialAspectRatio(mobileAspectRatio);
      setInitialTitleFormat(MOBILE_TITLE_FORMAT);
      console.log("[Calendar Effect] Initial options set to MOBILE: listWeek, AR:", mobileAspectRatio);
    } else {
      setInitialViewOption(defaultView);
      setInitialToolbarOptions(DESKTOP_TOOLBAR);
      setInitialAspectRatio(defaultAspectRatio);
      setInitialTitleFormat(DESKTOP_TITLE_FORMAT);
      console.log("[Calendar Effect] Initial options set to DESKTOP:", defaultView, ", AR:", defaultAspectRatio);
    }

    window.addEventListener('resize', setCalendarOptions);
    const timeoutId = setTimeout(() => {
        console.log("[Calendar Effect] setTimeout: calling setCalendarOptions.");
        setCalendarOptions();
    }, 100); // Increased timeout slightly

    return () => {
      console.log("[Calendar Effect] Cleanup: removing resize listener and timeout.");
      window.removeEventListener('resize', setCalendarOptions);
      clearTimeout(timeoutId);
    };
  }, [defaultView, defaultAspectRatio, mobileAspectRatio]);

  const eventSources = [];
  if (googleCalendarApiKey && googleCalendarId) {
    eventSources.push({
      googleCalendarApiKey,
      googleCalendarId,
      color: 'var(--color-ut-orange)', // Using CSS variable
      textColor: 'white'
    });
  }
  console.log("[Calendar Render] Rendering FullCalendar. Initial View:", initialViewOption, "Initial AR:", initialAspectRatio);

  return (
    <div className="w-full">
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin, 
          timeGridPlugin, 
          interactionPlugin, 
          googleCalendarPlugin, 
          listPlugin
        ]}
        headerToolbar={initialToolbarOptions} // Set initial toolbar, effect will update
        initialView={initialViewOption} // Set initial view, effect will update if needed
        aspectRatio={initialAspectRatio} // Use the state for initial aspect ratio
        titleFormat={initialTitleFormat} // Add initial title format
        height={height}
        eventSources={eventSources}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        select={(selectInfo) => {
          console.log('Date selected:', selectInfo);
        }}
        eventClick={(clickInfo) => {
          console.log('Event clicked:', clickInfo.event);
        }}
        themeSystem="standard"
      />
    </div>
  );
} 