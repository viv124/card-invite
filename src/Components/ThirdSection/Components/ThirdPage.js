
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

function ThirdPage() {
    return (
        <div className="py-10">
            <div className=''>
                <div className="md:h-[100px]" />
                <div className="h-[100px] bg-[url('/toranFlower.png')] bg-center bg-repeat-x bg-contain" />
                <div className="h-[50px]" />

                <div className="w-full flex justify-center">
                    <div className={`${GreatVibes.className} bg-[url('/OrangeRoundBg.png')] max-w-[470px] bg-no-repeat bg-cover bg-center text-white text-[28px] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-center py-6 px-10 tracking-[0.05em]`}>
                        Date : 12 May 2025
                    </div>
                </div>
                <div className=''>
                    <div className="h-[100px]" />
                    <div className='sm:grid sm:grid-cols-2 items-center justify-center space-x-2 gap-y-[200px]'>
                        <div className='flex items-center justify-center'>
                            <div className="flex grahShantiBox w-full sm:w-fit rounded-2xl justify-center items-center flex-row sm:flex-col md:flex-row p-5 bg-white bg-contain bg-no-repeat bg-center relative" data-aos="flip-up" data-aos-duration="1200">
                                <div className='flex justify-center items-center'>
                                    <img src="/grahShanti.png" className=' h-[120px]' alt="wedding" />
                                </div>
                                <div className={`${AnekGujrati.className} text-center text-[1.2rem] sm:text-[1.5rem] p-4`}>
                                    <div className='font-extrabold'>
                                    गृहशांती (Gruh Shanti)
                                    </div>
                                    <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                        Date: 12 मे 2025
                                    </div>
                                    <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                        Time: 08:30 AM
                                    </div>
                                </div>

                                <div className='absolute flex justify-end left-[-20px] top-[-10px]'>
                                    <img src="/yellowFlowerLine.png" className='h-[320px] sm:h-[420px]' alt="wedding" />
                                </div>
                                <div className='absolute flex justify-end right-0 bottom-[-9.5rem] sm:bottom-[-12.5rem]'>
                                    <img src="/flower_umbrella.png" className='w-[150px] sm:w-[200px]' alt="wedding" />
                                </div>
                            </div>
                        </div>
                        <div className='h-[180px] sm:hidden'/>

                        <div className='flex items-center justify-center'>
                            <div className="flex grahShantiBox w-full sm:w-fit rounded-2xl justify-center items-center flex-row sm:flex-col md:flex-row p-5 bg-white bg-contain bg-no-repeat bg-center relative" data-aos="flip-up" data-aos-duration="1200">
                                <div className='flex justify-center items-center'>
                                    <img src="/mandap-muhurat.png" className=' h-[120px]' alt="wedding" />
                                </div>
                                <div className={`${AnekGujrati.className} text-center text-[1.2rem] sm:text-[1.5rem] p-4`}>
                                    <div className='font-extrabold'>
                                        मंडप मुहूर्त (Mandap Muhurat)
                                    </div>
                                    <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                        Date: 12 May 2025
                                    </div>
                                    <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                        Time: 10:00 AM
                                    </div>
                                </div>

                                {  // <div className='absolute flex justify-end left-[-20px] top-[-10px]' >
                                    //     <img src="/yellowFlowerLine.png" className='h-[420px]' alt="wedding" />
                                    // </div>
                                }
                                <div className='absolute flex justify-end right-0 bottom-[-9.5rem] sm:bottom-[-12.5rem]' >
                                    <img src="/FlowerLine2.png" className='w-[150px] sm:w-[200px]' alt="wedding" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-[100px] hidden sm:block' />
                    <div className='h-[100px]' />
                    <div className='grid grid-cols-1 w-full items-center justify-center'>
                        <div className='flex justify-center items-center md:hidden' data-aos="zoom-in">
                            <img src="/haldiman.png" className='' alt="wedding" />
                        </div>
                        <div className='h-[50px] sm:hidden' />

                        <div className='flex justify-center items-center max-md:hidden' data-aos="flip-left">
                            <img src="/haldiman.png" className='max-h-[450px]' alt="wedding" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 w-auto items-center justify-center'>
                        <div className='flex items-center justify-center' >
                            <div className="flex haldiBox border-l-[rgb(120,69,34)] w-[80%] md:w-fit rounded-2xl justify-center items-center flex-col md:flex-row px-5 py-10 sm:py-5  bg-white bg-contain bg-no-repeat bg-center relative" data-aos="flip-left" >
                                <div className='absolute flex justify-end left-[-2rem] bottom-[-1.5rem]'>
                                    <img src="/haldi_Bowl.png" className='w-[120px]' alt="wedding" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <img src="/yellohaldi.png" className=' w-[150px]' alt="wedding" />
                                </div>

                                <div className={`${AnekGujrati.className} text-center text-[1.2rem] sm:text-[1.5rem] px-4 sm:py-8`}>
                                    <div className='font-extrabold'>
                                    हळद (Halad)
                                    </div>
                                    <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                        Date: 12 May 2025

                                    </div>
                                    <div className='font-medium text-[1rem] sm:text-[1.3rem]'>
                                        Time: 12:00 PM
                                    </div>
                                </div>
                                <div className='absolute flex justify-end z-[-1] left-[-7.8rem] top-[-4rem] '>
                                    <img src="/umbrela_Straight.png" className='w-[250px]' alt="wedding" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ThirdPage