// pages/index.tsx
'use client';
import React from 'react'
import EventSlider from "@/components/EventSlider"; // Import the EventSlider component
const events = [
  {
    type: "Upcoming Events",
    title: "Workshop on Cognitive Assistive Technologies",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    date: "12 Nov-2024",
    location: "A-413 PerSisst-Lab, IIITD",
    background_image_url:
      "https://t3.ftcdn.net/jpg/02/21/36/48/360_F_221364834_GsaULQoVVobdJBHCrGHq3SFeO4FMzO66.jpg",
    learn_more_link: "", // Placeholder
  },
  {
    type: "Ongoing Events",
    title: "AI & Machine Learning Seminar",
    description: "Join us for an in-depth seminar on the latest advancements.",
    date: "Ongoing - Join Anytime",
    location: "Online Event",
    background_image_url:
      "https://media.licdn.com/dms/image/v2/C561BAQE-51J-8KkMZg/company-background_10000/company-background_10000/0/1584559866970/eventscom_cover?e=2147483647&v=beta&t=3bktbE7ts5aNwH8XEUM5rW0G2aMbuQ1b2dHBVQgZqmA",
    learn_more_link: "", // Placeholder
  },
  {
    type: "Past Events",
    title: "Blockchain for Beginners Workshop",
    description: "This workshop covered the basics of blockchain technology.",
    date: "5 Nov-2024",
    location: "B-221 IIITD Conference Room",
    background_image_url:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    learn_more_link: "", // Placeholder
  },
];

export default function HomePage() {
  return <div className="flex flex-col items-center justify-center h-screen">
    <EventSlider events={events} />
  </div>
    
}
