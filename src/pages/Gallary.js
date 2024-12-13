import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Gallary() {
  const images1 = [
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/187b1f25-ef33-45d0-9339-1535faf74e0b-q4f7io0hdkd9c625wfc0n3mo3yyth32ynzgjtvbr4m.jpg", // Replace with actual image URLs
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/170F4E95-DF0D-4E56-B549-0887CD157B5F-q4f7lxib3uu3nfbhuc4dsrzad4vp791es508tghjiu.jpg",
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/3755c150-a6ea-4509-a3e7-a76abe59664e-q4f7mqnazpxznc5646ptg2mks2w2tv93858ap1ac5y.jpg",
  ];
  const images2 = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/d26cebf7-6bd6-4a9c-8f13-43a9601caaa9.jpg",
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/c490b8a0-d3a5-45ba-9ef1-4a121695081f-q4f7rq6jq3ojgnrldreuen765evalxkzcgdf1pgb72.jpg",
  ];
  const images3 = [
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/e20b9d67-27ab-4361-bf58-fd51ba4d7fcf-q4hbdgoom2mf4vfbytsqjzs1777vws5ks67khmci6u.jpg",
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/IMG_0682-q4hbf20u6yswt341o0kza3b5fpd9ybh7c206rhzhna.jpg",
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/IMG_9509-q4hbfokyqznsjq7a0ac0xxm7oya331yrf5nua521hy.jpg",
  ];
  const images4 = [
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/IMG_8587-scaled-q4hbgnd28vw6p3nyr4gi8iptky2rxqbznkc6q76n5a.jpg",
    "https://gclassconstruction.com/wp-content/uploads/elementor/thumbs/IMG_9556-scaled-q4hbii3lq4fjlez0xfb0njvjraxu48oxkqnnsufovi.jpg",
  ];
  return (
    <div className="">
      <Navbar activePage="gallery" />
      <div className="gallery-main-content">
        <div className="bg-[#eaf6fa] text-5xl text-[#5b5b5b] p-8 text-center">
          Gallery
        </div>
        <div className="gallery-bg py-20 px-2">
          <p className="text-white font-bold text-4xl text-center">
            OUR GALLERY
          </p>

          <div className="container mx-auto grid gap-8  grid-cols-1 md:grid-cols-3 sm:w-[85%] md:w-[78%] lg:w-[74%] w-full mt-16">
            {images1.map((image, index) => (
              <div key={index} className=" ">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transform transition duration-1000 hover:scale-110 "
                />
              </div>
            ))}
          </div>
          <div className="container mx-auto grid gap-8  grid-cols-1 md:grid-cols-2 sm:w-[85%] md:w-[78%] lg:w-[74%] w-full mt-8">
            {images2.map((image, index) => (
              <div key={index} className=" ">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transform transition duration-1000 hover:scale-110 "
                />
              </div>
            ))}
          </div>
          <div className="container mx-auto grid gap-8  grid-cols-1 md:grid-cols-3 sm:w-[85%] md:w-[78%] lg:w-[74%] w-full mt-8">
            {images3.map((image, index) => (
              <div key={index} className=" ">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transform transition duration-1000 hover:scale-110 "
                />
              </div>
            ))}
          </div>
          <div className="container mx-auto grid gap-8  grid-cols-1 md:grid-cols-2 sm:w-[85%] md:w-[78%] lg:w-[74%] w-full mt-8">
            {images4.map((image, index) => (
              <div key={index} className=" ">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover transform transition duration-1000 hover:scale-110 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallary;
