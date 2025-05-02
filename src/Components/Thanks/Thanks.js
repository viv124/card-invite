import HelperContainer from "../container/HelperContainer"

function Thanks() {
    return (
        <HelperContainer>
            <div className="py-[80px] sm:py-[100px] text-black relative flex justify-center">
                <img src='/GroomCute.png' alt="GroomCute" className="absolute left-0 sm:left-10 bottom-0 w-[120px] sm:w-[150px]" />
                <img src='/BrideCute.png' alt="BrideCute" className="absolute right-0 sm:right-10 bottom-0 w-[120px] sm:w-[150px]" />
                <div className="max-w-max">
                    <hr className="border-black" />
                    <div style={{ fontFamily: 'var(--font-welcome-global)' }} className="text-[2rem] sm:text-[3rem]">Thank You</div>
                    <hr className="border-black" />
                </div>
            </div>
        </HelperContainer>
    )
}

export default Thanks