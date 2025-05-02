"use client";

import FourthSection from '@/Components/FourthSection/FourthSection';
import Gallary from '@/Components/Gallary/Gallary';
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

function FourthModule() {
    const parachuteRef = useRef(null);
    const containerRef = useRef(null); // Reference for the container
    const [containerWidth, setContainerWidth] = useState(0); // Container width state

    useEffect(() => {
        // Function to update container width
        const updateContainerWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        // Initial update
        updateContainerWidth();

        // Listen to window resize and update width
        window.addEventListener("resize", updateContainerWidth);

        return () => {
            window.removeEventListener("resize", updateContainerWidth);
        };
    }, []);

    useEffect(() => {
        // Prevent animation until container width is set
        if (containerWidth === 0) return;

        // Create GSAP animation for back-and-forth movement
        const parachuteTimeline = gsap.timeline({ repeat: -1, yoyo: true });

        parachuteTimeline.to(parachuteRef.current, {
            x: "+=5", // Small horizontal shake
            y: "+=5", // Small vertical shake
            duration: 1,
            repeat: 2, // Shake during the movement
            yoyo: true,
            ease: "sine.inOut",
        });

        // Back-and-forth animation within the container
        parachuteTimeline.to(parachuteRef.current, {
            x: containerWidth - 100, // Move across the container with margin
            duration: 10,
            ease: "power1.inOut",
        });

        // Shaking effect added as part of the timeline
        parachuteTimeline.to(parachuteRef.current, {
            x: "+=5", // Small horizontal shake
            y: "+=5", // Small vertical shake
            duration: 1,
            repeat: 2, // Shake during the movement
            yoyo: true,
            ease: "sine.inOut",
        });

        return () => {
            // Kill animations on cleanup
            parachuteTimeline.kill();
        };
    }, [containerWidth]);

    return (
        <>
            <div className="py-10 fourthSection w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="container px-[2rem]">
                        <div className="relative" ref={containerRef}>
                            <div
                                ref={parachuteRef}
                                style={{
                                    position: "absolute",
                                    top: '-12rem',
                                    left: "0px", // Horizontal starting position
                                }}
                            >
                                <img
                                    src="/love_persute.png"
                                    alt="Parachute"
                                    style={{width:'100px' , height:'100%'}}
                                />
                            </div>
                            <FourthSection />
                            <div className='h-[50px]'/>
                            {/* <Gallary /> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className='h-[100px] sm:h-[150px] w-full fourthSectionBottom' />
        </>
    )
}

export default FourthModule                                                                                                                                                                                                                                                                                                                                                