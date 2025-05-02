import moment from "moment";
import { useEffect, useState } from "react";

function Intro() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = moment("2025-05-13T12:30:00");

    const updateCountdown = () => {
      const currentDate = moment();
      const duration = moment.duration(targetDate.diff(currentDate));

      if (duration.asMilliseconds() > 0) {
        setCountdown({
          days: Math.floor(duration.asDays()),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initialize countdown and update every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex w-auto items-center">
          <div className="flex flex-col items-center gap-7">
            <div>
              <div
                style={{ fontFamily: "var(--font-main-Cassandra)" }}
                className="text-[24px] leading-[50px!important] md:leading-[80px!important] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-center"
              >
                With great excitement, we invite you to share this special day
                with us!
              </div>
            </div>
            <div className="flex gap-2 sm:gap-5 justify-center items-center">
              {countdown.days >= 1 && (
                <>
                  <div className="countDownBg py-4 px-5 rounded-full relative">
                    <div className="w-full flex h-full flex-col items-center justify-center">
                      <div
                        className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                        style={{ fontFamily: "var(--font-main-global)" }}
                      >
                        {countdown.days}
                      </div>
                      <div
                        className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                        style={{ fontFamily: "var(--font-main-global)" }}
                      >
                        Days
                      </div>
                      <img
                        src="/LatkanHeart.png"
                        className="absolute top-[3.5rem] z-[-1]"
                        alt="wedding"
                      />
                    </div>
                  </div>
                  <div className="font-extrabold blinking-text">:</div>
                </>
              )}
              <div className="countDownBg py-4 px-4 rounded-full relative">
                <div className="w-full flex h-full flex-col items-center justify-center">
                  <div
                    className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                    style={{ fontFamily: "var(--font-main-global)" }}
                  >
                    {countdown.hours}
                  </div>
                  <div
                    className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                    style={{ fontFamily: "var(--font-main-global)" }}
                  >
                    Hours
                  </div>
                  <img
                    src={
                      countdown.days < 1
                        ? "/LatkanHeart.png"
                        : "/LatkanHeart2.png"
                    }
                    className="absolute top-[3.5rem] z-[-1]"
                    alt="wedding"
                  />
                </div>
              </div>
              <div className="font-extrabold blinking-text">:</div>
              <div className="countDownBg py-4 px-6 rounded-full relative">
                <div className="w-full flex h-full flex-col items-center justify-center">
                  <div
                    className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                    style={{ fontFamily: "var(--font-main-global)" }}
                  >
                    {countdown.minutes}
                  </div>
                  <div
                    className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                    style={{ fontFamily: "var(--font-main-global)" }}
                  >
                    Min
                  </div>
                  <img
                    src={
                      countdown.days < 1
                        ? "/LatkanHeart2.png"
                        : "/LatkanHeart3.png"
                    }
                    className={`absolute ${
                      countdown.days < 1 ? "top-[3rem]" : "top-[2rem]"
                    } z-[-1]`}
                    alt="wedding"
                  />
                </div>
              </div>
              <>
                <div className="font-extrabold blinking-text">:</div>
                <div className="countDownBg py-4 px-6 rounded-full relative">
                  <div className="w-full flex h-full flex-col items-center justify-center">
                    <div
                      className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                      style={{ fontFamily: "var(--font-main-global)" }}
                    >
                      {countdown.seconds}
                    </div>
                    <div
                      className="font-bold max-md:text-[14px] max-lg:text-[12px]"
                      style={{ fontFamily: "var(--font-main-global)" }}
                    >
                      Sec
                    </div>
                    <img
                      src="/LatkanHeart3.png"
                      className="absolute top-[2rem] z-[-1]"
                      alt="wedding"
                    />
                  </div>
                </div>
              </>
            </div>
            <div className="h-[80px]" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="bg-white px-5 pt-5 lg:px-10 lg:pt-10 pb-4 gap-4 flex flex-col h-[90%] w-full">
            <div className="h-[500px] relative max-w-full">
              <div
                className={"pic bg-[url('/preImage/pre-wedding1.jpg')]"}
                id={"pic5"}
              />
              <div
                className={"pic bg-[url('/preImage/pre-wedding.jpg')]"}
                id={"pic4"}
              />
              <div
                className={"pic bg-[url('/preImage/pre-wedding2.jpg')]"}
                id={"pic3"}
              />
              <div
                className={"pic bg-[url('/preImage/pre-wedding3.jpg')]"}
                id={"pic2"}
              />
              <div
                className={"pic bg-[url('/preImage/pre-wedding4.jpg')]"}
                id={"pic1"}
              />
              {/* <div
                className={"pic bg-[url('/preImage/pre-wedding5.jpg')]"}
                id={"pic6"}
              /> */}
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center gap-5 pt-4">
              <div
                className="w-full flex justify-center items-center text-lg lg:text-2xl md:leading-[60px!important]"
                style={{ fontFamily: "var(--font-personal-use)" }}
              >
                Vivek
                <img
                  src="/HeartBlack.png"
                  className="object-center object-cover px-2 h-[50px]"
                  alt="wedding"
                />
                Kajal
              </div>
              <div
                className="flex justify-center items-center text-[0.675rem] lg:text-sm font-bold tracking-[0.65em] md:tracking-[0.5em] xl:tracking-[1em] text-[#b9b9b9]"
                style={{ fontFamily: "var(--font-name-global)" }}
              >
                Together & Forever
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
