function Speciality() {
    return(
        <section className="w-full">
        <div className="font-lato flex gap-10 justify-center flex-col items-center px-[80px] py-[70px] max-w-[1440px] my-0 mx-auto">
            <h2 className="font-normal text-3xl text-center texr-[#282C2F] text-wrap ">Plants and flowers are our specialty. We make it reasonable.</h2>
            <div className="flex gap-20 justify-center items-center pt-10 flex-wrap">
                <div className="flex flex-col h-[188px] w-[262px] items-center g-3">
                    <img src="/images/speciality/Flower 1.png.png " className="object-contain w-20 h-20" alt="" />
                    <span className="text-base font-semibold text-[#282C2F] pt-3 pb-3">First feature</span>
                    <p className="font-normal text-base text-[#737373]">Short text describing one of your product or service features.</p>
                </div>
                <div className="flex flex-col h-[188px] w-[262px] items-center g-3">
                    <img src="/images/speciality/Hibiscus 2.png.png " className="object-contain w-20 h-20" alt="" />
                    <span className="text-base font-semibold text-[#282C2F] pt-3 pb-3">Second feature</span>
                    <p className="font-normal text-base text-[#737373]">Short text describing one of your product or service features.</p>
                </div>
                <div className="flex flex-col h-[188px] w-[262px] items-center g-3">
                    <img src="/images/speciality/Random Flower 1.png.png " className="object-contain w-20 h-20" alt="" />
                    <span className="text-base font-semibold text-[#282C2F] pt-3 pb-3">Third feature</span>
                    <p className="font-normal text-base text-[#737373]">Short text describing one of your product or service features.</p>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Speciality