function BuyNowBtn({ className = "", text}) {
    return(
        <div className="">
            <button className={`w-[152px] h-[39px] bg-[#282C2F] text-center text-[#fff] rounded-[133px] text-[14px] font-semibold ${className}`}>{text}</button>
        </div>
    )
}
export default BuyNowBtn