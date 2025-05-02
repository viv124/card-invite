import SecondPage from "./Components/SecondPage"

function SecondSection() {
    return (
        <div className="relative" data-aos="fade-in" id="#events">
            <div className='absolute left-[-2rem] w-full' data-aos="fade-up">
                <img src="/cornerwhiteflower.png" className='w-[80%] md:w-[50%] lg:w-auto' alt="wedding" />
            </div>
            <div className='absolute right-[-2rem] w-full flex justify-end' data-aos="fade-up">
                <img src="/cornerwhiteflowerRight.png" className='w-[80%] md:w-[50%] lg:w-auto' alt="wedding" />
            </div>
            {            // <div className="h-full absolute bg-[url('/flower_velo.png')] right-[-2.3rem] z-[-1] bg-bottom bg-cover bg-no-repeat w-32" />
            }

            <u>
                <div style={{ fontFamily: 'var(--font-main-global)' }} className='font-semibold text-center text-[34px] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] pt-[90px]' data-aos="zoom-in" data-aos-duration="1600" data-aos-easing="ease-in">
                    Planning
                </div>
            </u>
            <div style={{ fontFamily: 'var(--font-main-global)' }} className='text-[24px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold text-center py-3 px-6' data-aos="fade-up"
                data-aos-easing="ease-in">
                <div className="tracking-[0.05em]" data-aos="flip-up">
                    This is our plan for wedding celebration.
                </div>
            </div>
            <SecondPage />

            <div className="h-[100px] w-full " />
        </div>
    )
}

export default SecondSection