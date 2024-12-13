import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import home_img from "../assets/navbar/home-img.png";
import Footer from "../component/Footer";
import GalleryModal from "../component/GalleryModal";

function HomePage() {
  const [serviceTab, setServiceTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const imageCommercial = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/2F08122C-CB14-4BDA-8C3A-1A5EC7DF2BE8.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_1504-scaled.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3142-e1681753849475.png",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_1884-scaled.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/194B42E7-5546-4F2D-93B7-CA757CEF2970.jpg",
    // Add more image URLs here
  ];
  const imagePaint = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/DA651AFF-4652-4218-B47A-59BCB6A3596C.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_31461.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3143.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3144.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_31451.jpg",
    // Add more image URLs here
  ];
  const imageTiling = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3149.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3151.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3152.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3153.jpg",
    // Add more image URLs here
  ];
  const imageLegal = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_0674.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_0675.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_0678.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_0679.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_0682-1.jpg",
    // Add more image URLs here
  ];
  const imageDecks = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Deck4.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Deck3.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Deck2.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Deck1.jpg",
    // Add more image URLs here
  ];
  const imageSheds = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Shed1.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Shed2.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Shed3.jpg",
    // Add more image URLs here
  ];
  const imageLand = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3165.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3166.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3170.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3171.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/IMG_3172.jpg",
    // Add more image URLs here
  ];
  const imageSide = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Side-Entrance1.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Side-Entrance2.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Side-Entrance3.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/Side-Entrance4-e1681635574503.jpg",
    // Add more image URLs here
  ];
  const imageCustom = [
    "https://gclassconstruction.com/wp-content/uploads/2023/04/8CC5FF37-DB93-4F79-9225-E53EC4E1CAB4.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/170F4E95-DF0D-4E56-B549-0887CD157B5F-1.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/3755c150-a6ea-4509-a3e7-a76abe59664e-1.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/5403586a-b465-4bcd-a016-c6d6d5c396a4.jpg",
    "https://gclassconstruction.com/wp-content/uploads/2023/04/c501dfaf-1a2e-4d52-a520-dbb200842ded.jpg",
    // Add more image URLs here
  ];

  const handleScrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#service") {
      handleScrollToService();
    }
  }, [serviceTab]);
  return (
    <>
      {isModalOpen && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={modalImg}
        />
      )}
      <div className="home-container">
        <Navbar activePage="home" setServiceTab={setServiceTab} />
        <div className="home-main-content">
          <div>
            <img
              src={home_img}
              className="w-full h-full object-cover"
              alt="Home"
            />
          </div>
          <div>
            <div
              id="service"
              className="text-[#ffb716] font-semibold text-5xl text-center mt-2"
            >
              OUR SERVICE
            </div>
            <div className="sm:mt-16 md:mt-24 lg:mt-32 mt-10">
              <div className="flex sm:flex-row flex-col sm:gap-20 gap-12 justify-center sm:items-end items-center w-full mb-3 sm:px-8 px-4">
                <div
                  className="text-center sm:w-[25%] w-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageCommercial);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      fill="#ffb716"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">
                    COMMERCIAL UNITS AND OFFICES
                  </p>
                  <p className="text-[#7a7a7a] text mt-5">
                    We make office space in commercial units for offices.
                  </p>
                </div>
                <div
                  className="text-center sm:w-[25%] w-full "
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imagePaint);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      fill="#ffb716"
                      class="bi bi-map"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                      />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">PAINT</p>
                  <p className="text-[#7a7a7a] text mt-5">
                    All kind of residential and commercial painting.
                  </p>
                </div>
                <div
                  className="text-center sm:w-[25%] w-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageTiling);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      fill="#ffb716"
                      class="bi bi-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">TILING</p>
                  <p className="text-[#7a7a7a] text mt-5">
                    Tiling in residential and commercial.
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col mt-20  sm:gap-20 gap-12 justify-center sm:items-end items-center w-full     mb-3 sm:px-8 px-4">
                <div
                  className="text-center sm:w-[25%] w-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageLegal);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      fill="#ffb716"
                      class="bi bi-hammer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">
                    LEGAL BASEMENTS
                  </p>
                  <p className="text-[#7a7a7a] text mt-5">
                    We make basements in GTA according to the customer need that
                    meets city guidelines too.
                  </p>
                </div>
                <div
                  className="text-center sm:w-[25%] w-full "
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageDecks);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      fill="#ffb716"
                      class="bi bi-house-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
                      <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">DECKS</p>
                  <p className="text-[#7a7a7a] text mt-5">
                    We make outside decks and patio.
                  </p>
                </div>
                <div
                  className="text-center sm:w-[25%] w-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageSheds);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      width="90"
                      height="90"
                      fill="#ffb716"
                    >
                      <path d="M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24l0-56 384 0 0 56c0 13.3-10.7 24-24 24zM128 400l0-64 384 0 0 64-384 0zm0-96l0-80 384 0 0 80-384 0z" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">SHEDS</p>
                  <p className="text-[#7a7a7a] text mt-5">
                    We are specialize in commercial sheds in farm house and
                    country area.
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col mt-20  sm:gap-20 gap-12 justify-center sm:items-end items-center w-full     mb-3 sm:px-8 px-4">
                <div
                  className="text-center sm:w-[25%] w-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageLand);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      width="90"
                      height="90"
                      fill="#ffb716"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32zm79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">LANDSCAPING</p>
                  <p className="text-[#7a7a7a] text mt-5">
                    Any kind of foundation work and landscaping.
                  </p>
                </div>
                <div
                  className="text-center sm:w-[25%] w-full "
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageSide);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="90"
                      height="90"
                      fill="#ffb716"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">SIDE ENTRANCE </p>
                  <p className="text-[#7a7a7a] text mt-5">
                    Side entrance and new windows for basement and residential
                    space.
                  </p>
                </div>
                <div
                  className="text-center sm:w-[25%] w-full"
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalImg(imageCustom);
                  }}
                >
                  <p className="text-center  flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="90"
                      fill="#ffb716"
                      class="bi bi-house-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                    </svg>
                  </p>
                  <p className="font-bold text-[1.3rem] mt-8">
                    CUSTOM WASHROOMS{" "}
                  </p>
                  <p className="text-[#7a7a7a] text mt-5">
                    Construction and Renovation of washrooms. We do
                    customization also such as adding and removing tub, tiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer setServiceTab={setServiceTab} />
      </div>
    </>
  );
}

export default HomePage;
