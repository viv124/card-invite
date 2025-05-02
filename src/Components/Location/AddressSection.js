import HelperContainer from "../container/HelperContainer"

function AddressSection() {
    return (
        <HelperContainer>
            <div id="#location" className="pt-5 pb-0 sm:pb-5">
                <hr className="border-[#b3b1b1] pb-2" />
                <div style={{ fontFamily: 'var(--font-main-global)' }} className='flex text-[2rem] sm:text-[3rem] lg:text-[4rem] justify-center '>
                    <b>Location</b>
                </div>
                <hr className="border-[#b3b1b1] pb-6" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2   my-5' >
                <div className='flex justify-center items-center border-2 border-[#9f4b4b] border-r lg:h-[600px] bg-[#9f4b4b] text-white'>
                    <div className="px-[1rem] sm:px-[2rem] py-[2rem]">
                        <div style={{ fontFamily: 'var(--font-welcome-global)' }} className="font-extrabold text-center text-[2rem] leading-10">
                            Here is the location where the event will be organized.
                        </div>
                        <hr className="mt-3 mb-2 " />
                        <div style={{ fontFamily: 'var(--font-welcome-global)' }} className="text-center leading-[48px] text-[1.5rem]">
                            Your presence is the greatest gift we could receive on this memorable day.
                            Please join us in celebrating our wedding day with family, friends, love, and laughter.
                        </div>
                        <div className="flex justify-center">
                            <img src="/wedding_fera3.png" alt="wedding_fera3" className="sm:max-w-[38%]" />
                        </div>

                    </div>
                </div>
                <div className='flex justify-center border-2 border-[#9f4b4b] items-center h-[500px] lg:h-[600px]'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.323982419903!2d72.86862909999999!3d21.179285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc74f9e7dc3%3A0x3393e0065ba225f9!2sSMC%20Community%20Hall!5e0!3m2!1sen!2sin!4v1746119751981!5m2!1sen!2sin" className="map-image w-full h-full" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </HelperContainer>
    )
}

export default AddressSection