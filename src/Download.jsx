import BuyNowBtn from "./BuyNowBtn"

function Download() {
    return(
        <section className="w-full bg-[#F9E7B9]">
            <div className="font-lato lg:flex-nowrap flex justify-center items-center max-w-[1440px] my-0 mx-auto #282C2F flex-wrap">
                <div className="bg-[#F9E7B9] w-[683px] h-[590px] flex flex-col items-start justify-center gap-5 pl-10 ">
                    <h2 className="font-normal text-5xl text-[#282C2F]">We’re with you</h2>
                    <p className="pr-[150px] text-start text-base font-normal text-[#282C2F]">Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special attention to tone of voice. Try to win the customers’ trust by being positive.</p>
                    <div className="font-normal text-2xl text-[#282C2F]">Now available on iOS and Android</div>
                    <BuyNowBtn className="h-[60px] w-[194px]" text={'Download'}/>
                </div>
                <img src="/images/download/Rectangle 11.png" alt="" className=" md:w-[683px] w-[400px] h-[590px] " />
            </div>
        </section>
    )
}
export default Download