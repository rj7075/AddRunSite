// src/components/OfficeLocations.jsx
export default function OfficeLocations({ city, locations }) {
  return (
    <div className="py-16 bg-[#1C398E]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold text-center mb-12">
          Pick your new office address, anywhere in {city.title}
        </h2>
        <p className="text-xl text-center text-gray-200 mb-12 max-w-3xl mx-auto">
          Choose an office address that best represents your business and enjoy
          a fully-serviced, real office experience.
        </p>

        <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex-none w-80 mx-4 bg-[#3f424d] rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-gray-300 font-bold mb-2">
                  {location.title}
                </h3>
                <p className="text-gray-400 mb-4">{location.description}</p>
                <p className="text-blue-600 font-semibold">
                  {location.startingPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-300">
            + 20 more virtual office locations in {city.title}
          </p>
        </div>
      </div>
    </div>
  );
}
