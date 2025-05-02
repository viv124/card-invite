import GallarySlider from "./components/GallarySlider"

function Gallary() {
    return (
        <div className="pt-5 pb-0 sm:pb-5 w-full" id="#gallary">
            <hr className="border-[#b3b1b1] " />
            <div style={{ fontFamily: 'var(--font-main-global)' }} className='flex text-[2rem] sm:text-[3rem] lg:text-[4rem] justify-center '>
                <b>Gallary</b>
            </div>
            <hr className="border-[#b3b1b1] pb-6" />
            <GallarySlider />
        </div>
    )
}

export default Gallary