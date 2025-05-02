// 'use client'
import FourthPage from "./Components/FourthPage"
import FourthPageIntro from "./Components/FourthPageIntro"

function FourthSection() {
    return (
        <div className="w-full container">
            <div className="h-[50px]" />
            <FourthPageIntro />
            <div className="relative">
                <FourthPage />
            </div>
        </div>
    )
}

export default FourthSection