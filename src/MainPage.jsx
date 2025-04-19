import BuyNowBtn from "./BuyNowBtn"

function MainPage() {
    return(
        <section  className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center font-[Winky Sans] text-[#FEFCF7]"
        style={{ backgroundImage: "url('/images/Rectangle 1 (2).png')" }}>
        <div className=" font-lato flex gap-3 justify-center flex-col items-center px-[80px] py-[19px] max-w-[1440px] my-0 mx-auto">
            <h1 className="font-normal sm:text-5xl text-[#282C2F] text-center text-3xl ">Refresh your space  with lush greenery and exquisite flower bouquets</h1>
            <p className="text-[#282C2F] font-normal sm:text-base pb-9 ">Create the perfect indoor jungle with our bold houseplants,blooming plants, hanging plants, and more!</p>
            <BuyNowBtn className="h-[60px] w-[194px]"/>
        </div>
        </section>
    )
}
export default MainPage