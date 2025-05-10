function Footer() {
    return ( <div className="">
    <div className="w-full h-[500px] bg-lime-300 flex justify-center">
      <div className="w-[1140px] h-full flex items-center flex-col gap-y-8">
          <div className="flex gap-x-1 mt-12">
            <a className="uppercase text-24px text-blue-600 font-extralight">BLUE</a>
            <a className="uppercase text-24px text-blue-600 font-semibold">OCEAN</a>
          </div>
          <div className="grid grid-cols-2 justify-between">
              <div className="flex flex-col gap-y-4">
                   <p className="font-semibold text-2xl">Trung Tâm Ngoại Ngữ Quốc Tế Blue Ocean</p>
                   <p>Địa Chỉ : 380 Trần Hưng Đạo - P.An Lưu - TX.Kinh Môn - Hải Dương</p>
                   <p>Số Điện Thoại : 0822.663.686</p>
                    <div className="flex gap-x-4 justify-center mt-8">
                <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"/>
                <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/10792/10792668.png"/>
              </div>
              </div>
              <div className="flex flex-row justify-between gap-x-6">
                   <div className="flex flex-col gap-y-4">
                   <h2 className="font-semibold text-xl">Bạn Nên Đặt Niềm tin ở chúng tôi</h2>
                   <a>Giới Thiệu Về Trung Tâm</a>
                   <a>Sứ Mệnh Của Chúng Tôi</a>
                   <a>Đội Ngũ Giáo Viên</a>
                   </div>
                    <div className="flex flex-col gap-y-4">
                   <h2 className="font-semibold text-xl">Khóa Học Ở Trung Tâm</h2>
                   <a>Khóa Học HSK</a>
                   <a>Khóa Học Giao Tiếp</a>
                   <a>Khóa Học Tiếng Nhật</a>
                   <a>Khóa Học Tiếng Hàn</a>
                   <a>Khóa Học Tiếng Anh</a>
                   </div>
              </div>
          </div>
          <div className="border-t border-solid w-full bg-gray-300"></div>
             <div className="flex flex-col gap-y-2 items-center">
              <div className="flex gap-x-1">
                  <p className="text-gray-800">© 2025</p>
                  <p className="text-gray-800">Blueocean.com . All Rights Reserved</p>
              </div>
              {/* <p className="text-gray-800">🇬🇪 Georgia, 0160, Tbilisi. Zovreti street 6, flat 13</p> */}
          </div>
      </div>
    </div>
    </div> );
}

export default Footer;