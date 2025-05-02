
function HelperContainer({ children }) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="container px-[1rem] sm:px-[2rem]">
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HelperContainer