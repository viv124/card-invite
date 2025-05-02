
import { Anek_Gujarati, Great_Vibes } from 'next/font/google'

const GreatVibes = Great_Vibes(
    {
        subsets: ["latin"], weight: "400",
    }
)

const AnekGujrati = Anek_Gujarati(
    {
        subsets: ["latin"]
    }
)

function FourthPage() {
    const handleLinkClick = () => {
        window.open('https://maps.app.goo.gl/N53oX8ufXNkdibDU6', '_blank');
    };
    return (
        <div className="py-10 ">
            <div className=''>
                <b>
                    <div className={`${GreatVibes.className} tracking-[0.05em] text-bo text-[28px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold text-center pt-6`}>
                        Date : 13 May 2025
                    </div>
                </b>

            </div>
            <b>
                <div className='flex relative justify-center w-full py-10'>
                    <div className='relative flex flex-row justify-center w-full items-center sm:items-end text-[2rem] sm:gap-8' style={{ fontFamily: 'var(--font-wedding-global)' }}>
                        <div className='flex leading-[30px] sm:leading-[90px] flex-col max-sm:leading-[70px] max-sm:w-full justify-start items-center text-[22px] sm:text-[36px] gap-1 sm:gap-3'>
                            <img src="/Groom.png" className='h-[140px] sm:h-[170px] lg:h-[200px] object-cover' alt="wedding" />
                            Vivek

                        </div>
                        <div className='text-[20px] sm:text-[22px] h-full  max-sm:w-full items-center max-sm:justify-center flex max-sm:h-[50px] relative'>
                            <div className='flex justify-center underline '>
                                weds
                                <img src="/kalash.png" className='top-[-2.5rem] sm:top-[20%] object-cover max-w-[40px] sm:max-w-[50px] lg:max-w-[60px] absolute z-[-1]' alt="wedding" />

                                <img src="/gathbandhan.png" className='bottom-[-28vw] object-cover sm:bottom-[0rem] lg:bottom-[-0rem] max-w-[80vw]  sm:max-w-[300px] absolute z-[-1]' alt="wedding" />
                            </div>
                        </div>
                        <div className='flex leading-[30px] sm:leading-[90px] flex-col-reverse max-sm:leading-[70px] max-sm:justify-end max-sm:w-full items-center  text-[22px] sm:text-[36px] sm:gap-3'>
                            Kajal
                            <img src="/Bride.png" className='h-[140px] sm:h-[170px] lg:h-[200px] object-cover' alt="wedding" />
                        </div>
                    </div>

                </div>
            </b>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='grid grid-cols-1 items-center justify-center '>
                    <div className='flex items-center justify-center'>
                        <div className="flex fourthSectionBox w-full sm:w-fit rounded-2xl justify-center items-center flex-col sm:flex-row p-5 bg-white bg-contain bg-no-repeat bg-center relative" data-aos="flip-up" data-aos-duration="1200">
                            <div className='flex justify-center items-center'>
                                <img src="/varghodo.png" className=' h-[150px]' alt="wedding" data-aos="fade-right" data-aos-duration="2500" />
                            </div>
                            <div className={`${AnekGujrati.className} text-center text-[1.2rem] sm:text-[1.5rem] p-4`}>
                                <div className='font-extrabold'>
                                    જાન પ્રસ્થાન / वरात
                                </div>
                                <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                    Date: 13 May 2025
                                </div>
                                <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                    Time: 7:00 AM
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <div className="flex fourthSectionBox w-full sm:w-fit rounded-2xl justify-center items-center flex-col sm:flex-row p-5 bg-white bg-contain bg-no-repeat bg-center relative" data-aos="flip-up" data-aos-duration="1200">
                            <div className='flex justify-center items-center'>
                                <img src="/hastMelap.png" className=' h-[150px] w-[220px] object-contain' alt="wedding" data-aos="zoom-in" data-aos-duration="2500" />
                            </div>
                            <div className={`${AnekGujrati.className} text-center text-[1.2rem] sm:text-[1.5rem] p-4`}>
                                <div className='font-extrabold'>
                                    હસ્ત મેળાપ / हस्तग्रहण विधी
                                </div>
                                <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                    Date: 13 MAy 2025
                                </div>
                                <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                Time: 12:30 PM
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <hr className='border-[#b3b1b1] mt-10' />
            <div style={{ fontFamily: 'var(--font-main-global)' }} className={`tracking-[0.08em] text-[20px] md:text-[1.5rem] lg:text-[2rem] font-semibold text-center py-3`} data-aos="flip-up" data-aos-easing="ease-in">

                <div className='flex justify-center items-center gap-2'>
                    Location:
                </div>
                Community Hall,Parvat Gaam,Near Saibaba Mandir,Juna Road, Surat.
                <div className='flex justify-center items-center gap-1 cursor-pointer pt-2' onClick={handleLinkClick}>
                    <svg style={{
                        animation: 'rotateYAnimation 5s linear infinite',
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div className='text-[16px] sm:text-[20px] text-blue-700 underline underline-offset-4'>
                        Map Location
                    </div>
                    <svg style={{
                        animation: 'rotateYAnimation 5s linear infinite',
                    }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
            </div>
            <hr className='border-[#b3b1b1]' />

        </div>
    )
}

export default FourthPage