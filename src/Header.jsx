import BuyNowBtn from "./BuyNowBtn"
import Nav from "./Nav"

function Header() {
  return(
   <header className="w-full bg-[#fff]">
        <div className=" font-lato flex justify-between items-center px-[80px] py-[19px] max-w-[1440px] my-0 mx-auto">
            <a href=""><h2 className="text-[35px] text-[#282C2F] font-black">Logo</h2></a>
            <Nav/>
            <BuyNowBtn/>
        </div>
    </header>
  ) 
}
export default Header