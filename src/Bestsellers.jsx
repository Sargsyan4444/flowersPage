import BuyNowBtn from "./BuyNowBtn"

function Bestsellers() {
    return(
       <section>
        <div className="font-lato flex gap-40 justify-center flex-col items-center px-[50px] py-[70px] max-w-[1440px] my-0 mx-auto">
            <h2 className="font-normal text-5xl text-[#282C2F]">Our Bestsellers</h2>
            <div className="flex gap-[25px] flex-wrap items-center justify-center ">
                <div className="w-[283px] h-[450px] flex flex-col items-start gap-2">
                    <img src="/images/bestsellers/Rectangle 602.jpg" alt="" className="w-[283px] h-[390px] object-contain" />
                    <div className="font-semibold text-lg text-[#282C2F]">Tootsie</div>
                    <span className="font-semibold text-lg text-[#737373]">$139</span>
                </div>
                <div className="w-[283px] h-[450px] flex flex-col items-start gap-2">
                    <img src="/images/bestsellers/Rectangle 601.jpg" alt="" className="w-[283px] h-[390px] object-contain" />
                    <div className="font-semibold text-lg text-[#282C2F]">Emily</div>
                    <span className="font-semibold text-lg text-[#737373]">$82</span>
                </div>
                <div className="w-[283px] h-[450px] flex flex-col items-start gap-2">
                    <img src="/images/bestsellers/Rectangle 600.jpg" alt="" className="w-[283px] h-[390px] object-contain" />
                    <div className="font-semibold text-lg text-[#282C2F]">Sun & Sea</div>
                    <span className="font-semibold text-lg text-[#737373]">$144</span>
                </div>
                <div className="w-[283px] h-[450px] flex flex-col items-start gap-2">
                    <img src="/images/bestsellers/Rectangle 599.jpg" alt="" className="w-[283px] h-[390px] object-contain" />
                    <div className="font-semibold text-lg text-[#282C2F]">Coral Sunset</div>
                    <span className="font-semibold text-lg text-[#737373]">$67</span>
                </div>
            </div>
            <BuyNowBtn className="h-[60px] w-[194px]" text={'Buy Now'}/>
        </div>
       </section>
    )
}
export default Bestsellers