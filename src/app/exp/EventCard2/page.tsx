"use client"
import React from "react";
import "@/styles/event-card.css";
import CardEventSlider from "@/components/CardEventSlider";




const events = [
    {
      type: "Upcoming Events",
      title: "Workshop on Cognitive Assistive Technologies",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      date: "12 Nov-2024",
      location: "A-413 PerSisst-Lab, IIITD",
      background_image_url:
        "https://info.smartevals.com/wp-content/uploads/2024/01/image-6-1024x683.jpeg",
      learn_more_link: "/events/upcoming",
    },
    {
      type: "Ongoing Events",
      title: "AI & Machine Learning Seminar",
      description: "Join us for an in-depth seminar on the latest advancements.",
      date: "Ongoing - Join Anytime",
      location: "Online Event",
      background_image_url:
        "https://media.licdn.com/dms/image/v2/C561BAQE-51J-8KkMZg/company-background_10000/company-background_10000/0/1584559866970/eventscom_cover?e=2147483647&v=beta&t=3bktbE7ts5aNwH8XEUM5rW0G2aMbuQ1b2dHBVQgZqmA",
      learn_more_link: "/events/ongoing",
    },
    {
      type: "Past Events",
      title: "Blockchain for Beginners Workshop",
      description: "This workshop covered the basics of blockchain technology.",
      date: "5 Nov-2024",
      location: "B-221 IIITD Conference Room",
      background_image_url:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
      learn_more_link: "/events/past",
    },
  ];
  
function EventCard2() {
  return (
   <main className="p-2 lg:p-0 bg-gray-900">
        <div className="h-48"></div>
         <div className="w-full pb-2 xl:max-w-[1024px] 2xl:max-w-[1280px] mx-auto  relative   rounded-2xl z-0 bg-slate-100" >
        <CardEventSlider cards={events}/>
    </div>
   </main>
  )
}

export default EventCard2;