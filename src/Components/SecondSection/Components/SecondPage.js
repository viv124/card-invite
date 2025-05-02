import { Anek_Gujarati, Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const AnekGujrati = Anek_Gujarati({
  subsets: ["latin"],
});

function SecondPage() {
  const handleLinkClick = () => {
    window.open("https://maps.app.goo.gl/cXPdL9f75dJRFUge6", "_blank");
  };
  return (
    <div className="py-0 ">
      <div className="w-full flex justify-center" data-aos="fade-up">
        <div className=" py-6 max-w-[925px]">
          <hr className="border-[#b3b1b1]" />
          <div
            className={`${GreatVibes.className} tracking-[0.05em] text-[28px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold text-center py-3`}
            data-aos="flip-left"
            data-aos-easing="ease-in"
          >
            Date : 11 May 2025
          </div>
          <hr className="border-[#b3b1b1]" />
          <div
            style={{ fontFamily: "var(--font-main-global)" }}
            className={`tracking-[0.08em] text-[20px] md:text-[1.5rem] lg:text-[2rem] font-semibold text-center py-3`}
            data-aos="flip-up"
            data-aos-easing="ease-in"
          >
            <div className="flex justify-center items-center gap-2">
              Location:
            </div>
            Bilinaka, near Sagar Darshan Apartment,Asthmangal Apartment,
            Bilimora.
            <div
              className="flex justify-center items-center gap-1 cursor-pointer pt-2"
              onClick={handleLinkClick}
            >
              <svg
                style={{
                  animation: "rotateYAnimation 5s linear infinite",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 26"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div className="text-[16px] sm:text-[20px] text-blue-700 underline underline-offset-4">
                Map Location
              </div>
              <svg
                style={{
                  animation: "rotateYAnimation 5s linear infinite",
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 26"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
          </div>
          <hr className="border-[#b3b1b1]" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div
          className="flex  flex-row justify-center items-center py-4"
          data-aos="flip-up"
        >
          <div
            className="flex justify-center items-center"
            data-aos="fade-up-right"
          >
            <img
              src="/ganesha.png"
              className="h-[150px] md:h-[120px]"
              alt="wedding"
            />
          </div>
          <div
            className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}
          >
            <div className="font-extrabold">तेलवण (Telvan)</div>
            <div
              className={`font-medium tracking-wider text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem] `}
            >
              Date: 11-5-2025
            </div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Time: 6:00 PM
            </div>
          </div>
        </div>

        <hr className="sm:hidden" />
        <div
          className="flex  flex-row justify-center items-center py-4"
          data-aos="flip-up"
        >
          <div
            className="flex justify-center items-center"
            data-aos="fade-up-left"
          >
            <img
              src="/dandiyaRas.png"
              className=" h-[150px] md:h-[120px]"
              alt="wedding"
            />
          </div>
          <div
            className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}
          >
            <div className="font-extrabold">जागरण गोंधळ (Jagaran Gondhal)</div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Date: 11-5-2025
            </div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Time: 9:30 PM
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center" data-aos="fade-up">
        <div className=" py-6 max-w-[925px]">
          <hr className="border-[#b3b1b1]" />
          <div
            className={`${GreatVibes.className} tracking-[0.05em] text-[28px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold text-center py-3`}
            data-aos="flip-left"
            data-aos-easing="ease-in"
          >
            Date : 12 May 2025
          </div>
          <hr className="border-[#b3b1b1]" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div
          className="flex  flex-row justify-center items-center py-4"
          data-aos="flip-up"
        >
          <div
            className="flex justify-center items-center"
            data-aos="fade-up-right"
          >
            <img
              src="/ganesha.png"
              className="h-[150px] md:h-[120px]"
              alt="wedding"
            />
          </div>
          <div
            className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}
          >
            <div className="font-extrabold">गणेश स्थापना</div>
            <div
              className={`font-medium tracking-wider text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem] `}
            >
              Date: 12-5-2025
            </div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Time: 9:00 AM
            </div>
          </div>
        </div>

        <hr className="sm:hidden" />
        {/* <div className='flex max-sm:flex-row-reverse justify-center items-center flex-row py-4' data-aos="flip-up">
                    <div className='flex justify-center items-center' data-aos="fade-up">
                        <img src="/mameruVector1.png" className=' h-[150px] md:h-[120px]' alt="wedding" />
                    </div>
                    <div className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}>
                        <div className='font-extrabold'>
                            મામેરુ
                        </div>
                        <div className='font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]'>
                            Date: 1-2-2025
                        </div>
                        <div className='font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]'>
                            Time: 01:30 PM
                        </div>
                    </div>
                </div>


                <hr className='sm:hidden' /> */}
        <div
          className="flex justify-center items-center flex-row py-4  max-sm:col-span-1 max-lg:col-span-2"
          data-aos="flip-up"
        >
          <div
            className="flex justify-center items-center"
            data-aos="fade-up-left"
          >
            <img
              src="/twoKalsh.png"
              className="h-[150px] md:h-[120px]"
              alt="wedding"
            />
          </div>
          <div
            className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}
          >
            <div className="font-extrabold">मंडप मुहूर्त (Mandap Muhurat)</div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Date: 12-5-2025
            </div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Time: 10:00 PM
            </div>
          </div>
        </div>
        <hr className="sm:hidden" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <div
          className="flex max-sm:flex-row-reverse flex-row justify-center items-center py-4"
          data-aos="flip-up"
        >
          <div
            className="flex justify-center items-center"
            data-aos="fade-up-right"
          >
            <img
              src="/IndianDinner.png"
              className=" h-[150px] md:h-[120px]"
              alt="wedding"
            />
          </div>
          <div
            className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}
          >
            <div className="font-extrabold">भोजन समारंभ</div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Date: 12-5-2025
            </div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Time: 12:00 PM && 8:00 PM
            </div>
          </div>
        </div>
        <hr className="sm:hidden" />
        <div
          className="flex  flex-row justify-center items-center py-4"
          data-aos="flip-up"
        >
          <div
            className="flex justify-center items-center"
            data-aos="fade-up-left"
          >
            <img
              src="/dandiyaRas.png"
              className=" h-[150px] md:h-[120px]"
              alt="wedding"
            />
          </div>
          <div
            className={`${AnekGujrati.className} text-center text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] p-4`}
          >
            <div className="font-extrabold">गरबा रास (Garba Raas)</div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Date: 12-5-2025
            </div>
            <div className="font-medium text-[1rem] sm:text-[1.1rem] xl:text-[1.3rem]">
              Time: 9:30 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
