"use client"; // Mark this component as a Client Component

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosProvider({ children }) {
    useEffect(() => {
        Aos.init({
            duration: 1600,
            once: false,
            mirror: true,
        });
    }, []);

    return <>{children}</>;
}
