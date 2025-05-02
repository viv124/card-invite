import HelperContainer from '@/Components/container/HelperContainer'
import ThirdSection from '@/Components/ThirdSection/ThirdSection'

function ThirdModule() {
    return (
        <>
            <div className="py-10 thirdSectionBg  w-full">
                <HelperContainer>
                    <ThirdSection />
                </HelperContainer>
            </div>
            <div className='thirdSectionBottom h-[200px]' />
        </>
    )
}

export default ThirdModule