import React, { useState, useRef, useEffect } from "react";
import {
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaShareAlt,
} from "react-icons/fa";

const GalleryModal = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false); // For share dialog
  const [direction, setDirection] = useState("none");
  const modalRef = useRef(null);

  const handleNext = () => {
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 50); // Match the duration of the animation
    setDirection("right");
  };

  const handlePrev = () => {
    setTimeout(() => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }, 50); // Match the duration of the animation
    setDirection("left");
  };

  const handleZoomIn = () => {
    setZoom((prev) => prev + 0.1);
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(1, prev - 0.1));
  };

  const handleClose = () => {
    setZoom(1);
    onClose();
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (modalRef.current.requestFullscreen) {
        modalRef.current.requestFullscreen();
      } else if (modalRef.current.webkitRequestFullscreen) {
        modalRef.current.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");

    // Set the href to the current image URL
    link.href = images[currentImageIndex];

    // Set the download attribute to force download
    link.download = `image_${currentImageIndex + 1}.png`;

    // Add target to avoid navigation if it opens instead
    link.target = "_blank";

    // Append the link to the document (invisible)
    document.body.appendChild(link);

    // Trigger the click to download
    link.click();

    // Remove the temporary link
    document.body.removeChild(link);
  };

  const openShareDialog = () => {
    setIsShareDialogOpen(true);
  };

  const closeShareDialog = () => {
    setIsShareDialogOpen(false);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      images[currentImageIndex]
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      images[currentImageIndex]
    )}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      images[currentImageIndex]
    )}&media=${encodeURIComponent(images[currentImageIndex])}`,
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === modalRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-70 flex justify-center items-center"
    >
      {/* Header with Controls */}
      <div className="absolute top-5 left-8 flex  z-22 text-white font-semibold  ">
        <span className="w-[15px] text-center">{currentImageIndex + 1}</span>
        <span className="w-[10px] text-center">/</span>
        <span className="w-[15px] text-center">{images?.length} </span>
      </div>
      <div className="absolute top-5 right-8 flex space-x-6 z-20">
        <button onClick={handleFullscreen} className="text-white text-xl">
          <FaExpand />
        </button>
        <button onClick={handleZoomIn} className="text-white text-xl">
          <FaSearchPlus />
        </button>
        <button onClick={handleZoomOut} className="text-white text-xl">
          <FaSearchMinus />
        </button>
        <button onClick={openShareDialog} className="text-white text-xl">
          <FaShareAlt />
        </button>
        <button onClick={handleClose} className="text-white text-3xl">
          <FaTimes />
        </button>
      </div>

      {/* Image Display */}
      <div className="relative p-4">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{
            transform: `scale(${1})`,
            transition: "transform 0.3s ease",
            maxWidth: "90vw",
            maxHeight: "80vh",
          }}
          className={`object-contain transition-all duration-300 ${
            direction === "right"
              ? "animate-slideInFromRight"
              : direction === "left"
              ? "animate-slideInFromLeft"
              : ""
          }`}
          onAnimationEnd={() => setDirection("none")} // Reset direction after animation
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 text-white h-[90vh] top-16 flex justify-center items-center   w-[10%] text-4xl z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 w-[10%] h-[90vh] top-16 flex justify-center items-center text-white text-4xl z-20"
      >
        <FaChevronRight />
      </button>

      {/* Share Dialog */}
      {isShareDialogOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeShareDialog}
        >
          <div
            className="bg-white  rounded-lg w-80 text-center"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="flex justify-end  ">
              <button
                onClick={closeShareDialog}
                className=" px-4 pt-4  text-gray-400 font-bold rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  fill="gray"
                  viewBox="0 0 384 512"
                >
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
              </button>
            </div>
            <div className="px-4 pb-4">
              <h2 className="text-lg font-bold mb-4">Share this Image</h2>
              <div className="flex justify-between items-center space-x-4">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  Facebook
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  Twitter
                </a>
                <a
                  href={shareLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600"
                >
                  Pinterest
                </a>
              </div>
              <button
                onClick={() => handleDownload()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Download Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryModal;
