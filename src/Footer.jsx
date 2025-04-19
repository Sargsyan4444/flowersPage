function Footer() {
    return (
      <footer className="w-full bg-[#282C2F]">
        <div className="font-lato flex justify-center items-center px-[20px] flex-col gap-16 py-[80px] pb-2 max-w-[1440px] my-0 mx-auto">
          <a href="">
            <h2 className="text-[#FFFFFF] text-4xl">Logo</h2>
          </a>
          <div className="flex justify-between items-center w-full max-w-[1440px] pb-2">
            <div className="text-[#FFFFFF] font-medium text-xs">Privacy policy</div>
            <div className="text-[#FFFFFF] font-medium text-xs">© 2021 Copyright</div>
            <div className="text-[#FFFFFF] font-medium text-xs">Terms and Conditions</div>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  