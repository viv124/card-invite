'use client';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        // Toggle visibility based on scroll position
        if (window.scrollY > 0) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        showScroll && ( // Conditionally render the button
            <div className="fixed right-5 bottom-5 rounded-full">
                <ArrowUpCircleIcon
                    className="text-[rgb(141,57,36)] cursor-pointer w-10"
                    onClick={handleScrollUp}
                />
            </div>
        )
    );
}

export default ScrollTop;
