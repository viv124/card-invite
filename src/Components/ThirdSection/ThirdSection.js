import ThirdPage from "./Components/ThirdPage"

function ThirdSection() {
    return (
        <div className="relative">
            <div className="h-[100px]" />
            <div className='absolute flex justify-end right-[-1rem] lg:right-[-2rem] top-[-5rem]' data-aos="zoom-in" data-aos-duration="1200">
                <img src="/Sun_And_Cloud.png" className='w-[150px] sm:w-[30%] lg:w-[200px]' alt="wedding" />
            </div>
            {// <div className='absolute flex justify-end right-[-2rem] top-[-0.2rem]' data-aos="zoom-in" data-aos-duration="1200">
                //     <img src="/yellowBranches.png" className='w-[150px] sm:w-[30%] lg:w-[200px]' alt="wedding" />
                // </div>
            }
            <div className='absolute flex justify-end right-[-1rem] lg:right-[-2rem] top-[-5rem]' data-aos="zoom-in" data-aos-duration="1600">
                <img src="/loveBird.png" className='w-[300px] sm:w-[60%] lg:w-[400px]' alt="wedding" />
            </div>

            <div className="h-[100px] w-full" />
            <ThirdPage />
        </div>
    )
}

export default ThirdSection