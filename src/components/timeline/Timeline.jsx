import React, { useEffect, useRef, useState } from 'react';
import './timeline.scss';

const events = [
  { 
    startDate: new Date(2022, 7, 1), 
    endDate: new Date(2024, 7, 31), 
    description: "University of Southern California",
    details: "Master's in Computer Science",
    color: "#FF6B6B"
  },
  { 
    startDate: new Date(2019, 7, 1), 
    endDate: new Date(2022, 5, 30), 
    description: "K. K. Wagh Institute of Engineering Education and Research",
    details: "Bachelor's in Computer Engineering",
    color: "#4ECDC4"
  },
  { 
    startDate: new Date(2018, 5, 1), 
    endDate: new Date(2019, 4, 30), 
    description: "Sai Info Solutions",
    details: "Software Development Engineer Intern",
    color: "#45B7D1"
  },
  { 
    startDate: new Date(2016, 8, 1), 
    endDate: new Date(2019, 5, 30), 
    description: "K. K. Wagh Polytechnic",
    details: "Diploma in Computer Technology",
    color: "#FF9F1C"
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const formatDateRange = (start, end) => {
    const formatDate = (date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  return (
    <div className={`timeline ${isVisible ? 'visible' : ''}`} ref={timelineRef}>
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <div key={index} className={`event ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="event-content" style={{ backgroundColor: event.color }}>
            <h3>{formatDateRange(event.startDate, event.endDate)}</h3>
            <h4>{event.description}</h4>
            <p>{event.details}</p>
          </div>
          <div className="event-dot" style={{ backgroundColor: event.color }}></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;