import React from "react";
import ListingCard from "./ListingCard";
import { eventDetails } from "@/data/eventDetails";

const Listings = ({ eventName }: { eventName: string }) => {
  const filteredEvents = eventDetails.filter((event) =>
    event.name.toUpperCase().match(eventName.toUpperCase())
  );
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 p-3">
      {filteredEvents.map((event, id) => (
        <ListingCard
          key={id}
          id={event.id}
          image={event.image}
          name={event.name}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default Listings;
