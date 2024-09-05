import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Explore = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: 'Heritage Walk',
      description: 'Join us for a heritage walk through the historic streets of the city, exploring ancient landmarks and learning about the rich cultural history.',
      venue: 'Old Fort, Delhi',
      date: '2024-09-15',
      timings: '10:00 AM - 12:00 PM',
      lat: 28.472172,
      lng: 77.488363,
    },
    {
      id: 2,
      name: 'Cultural Festival',
      description: 'A celebration of traditional music, dance, and cuisine. Experience the vibrant culture of the region through various performances and activities.',
      venue: 'Central Park, Connaught Place',
      date: '2024-09-20',
      timings: '4:00 PM - 10:00 PM',
      lat: 28.473572,
      lng: 77.482474,
    },
    {
      id: 3,
      name: 'Traditional Music Event',
      description: 'Enjoy a night of traditional music featuring renowned artists from across the country. An evening filled with soulful melodies and cultural expressions.',
      venue: 'Lotus Temple, Delhi',
      date: '2024-09-25',
      timings: '6:00 PM - 9:00 PM',
      lat: 28.458060,
      lng: 77.500253,
    },
  ];

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToList = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-8 bg-black text-white">
      {!selectedEvent ? (
        <>
          {/* Search bar */}
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search for events..."
              className="w-1/2 p-2 border-b-2 border-gray-400 bg-black text-white outline-none text-lg"
            />
          </div>

          {/* Host New Event button */}
          <div className="flex justify-center mb-6">
            <button className="text-lg text-white hover:underline">Host New Event</button>
          </div>

          {/* Map */}
          <div className="mb-8">
            <MapContainer center={[28.505, 77.50]} zoom={13} className="h-96 w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {events.map(event => (
                <Marker key={event.id} position={[event.lat, event.lng]}>
                  <Popup>{event.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Recommended Events */}
          <div className="mb-4">
            <h2 className="text-2xl text-white mb-2">Recommended Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map(event => (
                <div key={event.id} className="border border-gray-700 p-4 bg-gray-900">
                  <h3 className="text-xl text-white">{event.name}</h3>
                  <p className="text-gray-400">Venue: {event.venue}</p>
                  <p className="text-gray-400">Date: {event.date}</p>
                  <p className="text-gray-400">Timings: {event.timings}</p>
                  <button
                    onClick={() => handleLearnMore(event)}
                    className="text-gray-200 hover:underline"
                  >
                    Learn more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="p-8">
          <button
            onClick={handleBackToList}
            className="text-gray-200 underline mb-4"
          >
            Back to events
          </button>
          <h1 className="text-4xl font-bold mb-4">{selectedEvent.name}</h1>
          <p className="text-gray-400 leading-7 mb-4">{selectedEvent.description}</p>
          <p className="text-gray-400 leading-7 mb-2"><strong>Venue:</strong> {selectedEvent.venue}</p>
          <p className="text-gray-400 leading-7 mb-2"><strong>Date:</strong> {selectedEvent.date}</p>
          <p className="text-gray-400 leading-7 mb-2"><strong>Timings:</strong> {selectedEvent.timings}</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black">
            RSVP
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;
