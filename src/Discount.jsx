import BuyNowBtn from "./BuyNowBtn"

function Discount() {
    return(
        <section className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center font-[Winky Sans] text-[#FEFCF7]"
        style={{ backgroundImage: "url('/images/discount/Rectangle 617 (1).png')" }}>
            <div className="font-lato flex gap-3 justify-center flex-col items-center px-[80px] py-[19px] max-w-[1440px] my-0 mx-auto">
                <h2 className="font-normal text-5xl text-[#282C2F] pb-[30px] pt-[70px]">Order now and get a 15% delivery discount</h2>
                <BuyNowBtn className="h-[60px] w-[194px]" text={'Buy Now'}/>
            </div>
        </section>
    )
}
export default Discount