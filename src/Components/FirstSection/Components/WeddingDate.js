import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import styles from './WeddingDate.module.css'; // Import the CSS module

function WeddingDate({ Label }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true); // Trigger fade-out animation
        }, 6000);

        return () => clearTimeout(fadeTimer);
    }, []);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            const end = Date.now() + 2 * 1000; // Run for 2 seconds

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 70,
                    origin: { x: 0 },
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 70,
                    origin: { x: 1 },
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }, 1000);
        return () => clearTimeout(fadeTimer);

    }, []);

    return (
        <>
            <div className={`fixed z-50 p-4 h-full w-full bg-[#ffffff] flex items-center justify-center ${fadeOut ? styles.fadeOut : styles.fadeIn}`}>
                <div className="p-7 rounded-xl">
                    <div>
                        <b>
                            <div style={{ fontFamily: "var(--font-wedding-global)" }} className="text-[28px] md:text-[1.5rem] font-semibold text-center pt-6">
                                Date :<br /> 13 May 2025
                            </div>
                        </b>
                    </div>
                    <b>
                        <div className="flex relative justify-center w-full py-10">
                            <div
                                className="relative flex flex-row justify-center w-full items-center sm:items-end text-[2rem] sm:gap-8"
                                style={{ fontFamily: 'var(--font-wedding-global)' }}
                            >
                                <div className="flex leading-[30px] sm:leading-[90px] flex-col max-sm:leading-[70px] max-sm:w-full justify-start items-center text-[22px] sm:text-[36px] gap-1 sm:gap-3">
                                    <img
                                        src="/Groom.png"
                                        className="h-[140px] sm:h-[170px] lg:h-[200px] object-cover"
                                        alt="wedding"
                                    />
                                    Vivek
                                </div>
                                <div className="text-[20px] sm:text-[22px] h-full  max-sm:w-full items-center max-sm:justify-center flex max-sm:h-[50px] relative">
                                    <div className="flex justify-center underline ">
                                        weds
                                        <img
                                            src="/kalash.png"
                                            className="top-[-2.5rem] sm:top-[20%] object-cover max-w-[40px] sm:max-w-[50px] lg:max-w-[60px] absolute z-[-1]"
                                            alt="wedding"
                                        />
                                        <img
                                            src="/gathbandhan.png"
                                            className="bottom-[-17vw] object-cover sm:bottom-[0rem] lg:bottom-[-0rem] max-w-[45vw] sm:max-w-[300px] absolute z-[-1]"
                                            alt="wedding"
                                        />
                                    </div>
                                </div>
                                <div className="flex leading-[30px] sm:leading-[90px] flex-col-reverse max-sm:leading-[70px] max-sm:justify-end max-sm:w-full items-center  text-[22px] sm:text-[36px] sm:gap-3">
                                    Kajal
                                    <img
                                        src="/Bride.png"
                                        className="h-[140px] sm:h-[170px] lg:h-[200px] object-cover"
                                        alt="wedding"
                                    />
                                </div>
                            </div>
                        </div>
                    </b>
                </div>
            </div>
        </>
    );
}

export default WeddingDate;
