import { useState } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import coworkingImage from "/coworking-feature.png";
import PSQ1 from "/PalmSquare/PSQ 1.jpg";
import PSQDirector from "/PalmSquare/PSQ Director Room.jpg";
import PSQConferance from "/PalmSquare/PSQ Conference Room.jpg";
import PSQ3seater from "/PalmSquare/PSQ 3-seater cabin big.jpg";
import PSQFrontDoor from "/PalmSquare/PSQ Front Door.jpg";
import Reception from "/PalmSquare/PSQ Reception.jpg";
import PSQoverview from "/PalmSquare/PSQ 2.jpg";
import PSQ2seeter from "/PalmSquare/PSQ 2-seater cabin.jpg";
import virtualOfficeImage from "/virtual-office.png";
import heroImage from "/hero-workspace.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: PSQFrontDoor,
      alt: "Modern coworking space with natural lighting",
      category: "Coworking",
    },
    {
      src: PSQ1,
      alt: "Collaborative workspace area",
      category: "Coworking",
    },
    {
      src: Reception,
      alt: "Professional office reception",
      category: "Virtual Office",
    },
    {
      src: PSQDirector,
      alt: "Private meeting room",
      category: "Meeting Rooms",
    },
    {
      src: PSQ2seeter,
      alt: "Open workspace with multiple desks",
      category: "Coworking",
    },
    {
      src: PSQoverview,
      alt: "Executive office space",
      category: "Virtual Office",
    },
    {
      src: PSQ3seater,
      alt: "Lounge and relaxation area",
      category: "Amenities",
    },
    {
      src: PSQConferance,
      alt: "Conference room setup",
      category: "Meeting Rooms",
    },
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#6aebe2] text-[#6e7c7b] border border-[#94fff8] text-sm font-medium mb-4">
              <FaCamera className="h-3 w-3 mr-1" />
              Gallery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Take a Tour of Our Spaces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our modern workspaces, premium amenities, and professional
              environments designed to help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="inline-flex items-center px-2 py-1 rounded-md bg-blue-600/90 text-white text-xs font-medium mb-2">
                      {image.category}
                    </div>
                    <p className="text-white text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaCamera className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal - FIXED VERSION */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-200 hover:scale-110"
            >
              <FaTimes className="h-3 w-3" />
            </button>

            {/* Full Image Only */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
