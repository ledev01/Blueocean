// function Footer() {
//     return ( <div className="">
//     <div className="w-full h-[500px] bg-lime-300 flex justify-center">
//       <div className="w-[1140px] h-full flex items-center flex-col gap-y-8">
//           <div className="flex gap-x-1 mt-12">
//             <a className="uppercase text-24px text-blue-600 font-extralight">BLUE</a>
//             <a className="uppercase text-24px text-blue-600 font-semibold">OCEAN</a>
//           </div>
//           <div className="grid grid-cols-2 justify-between">
//               <div className="flex flex-col gap-y-4">
//                    <p className="font-semibold text-2xl">Trung Tâm Ngoại Ngữ Quốc Tế Blue Ocean</p>
//                    <p>Địa Chỉ : 380 Trần Hưng Đạo - P.An Lưu - TX.Kinh Môn - Hải Dương</p>
//                    <p>Số Điện Thoại : 0822.663.686</p>
//                     <div className="flex gap-x-4 justify-center mt-8">
//                 <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"/>
//                 <img className="w-[30px] h-[30px]" src="https://cdn-icons-png.flaticon.com/128/10792/10792668.png"/>
//               </div>
//               </div>
//               <div className="flex flex-row justify-between gap-x-6">
//                    <div className="flex flex-col gap-y-4">
//                    <h2 className="font-semibold text-xl">Bạn Nên Đặt Niềm tin ở chúng tôi</h2>
//                    <a>Giới Thiệu Về Trung Tâm</a>
//                    <a>Sứ Mệnh Của Chúng Tôi</a>
//                    <a>Đội Ngũ Giáo Viên</a>
//                    </div>
//                     <div className="flex flex-col gap-y-4">
//                    <h2 className="font-semibold text-xl">Khóa Học Ở Trung Tâm</h2>
//                    <a>Khóa Học HSK</a>
//                    <a>Khóa Học Giao Tiếp</a>
//                    <a>Khóa Học Tiếng Nhật</a>
//                    <a>Khóa Học Tiếng Hàn</a>
//                    <a>Khóa Học Tiếng Anh</a>
//                    </div>
//               </div>
//           </div>
//           <div className="border-t border-solid w-full bg-gray-300"></div>
//              <div className="flex flex-col gap-y-2 items-center">
//               <div className="flex gap-x-1">
//                   <p className="text-gray-800">© 2025</p>
//                   <p className="text-gray-800">Blueocean.com . All Rights Reserved</p>
//               </div>
//               {/* <p className="text-gray-800">🇬🇪 Georgia, 0160, Tbilisi. Zovreti street 6, flat 13</p> */}
//           </div>
//       </div>
//     </div>
//     </div> );
// }

// export default Footer;



function Footer() {
  return (
    <div className="bg-blue-300">
      <div className="max-w-[1140px] mx-auto px-4 h-full flex flex-col items-center py-12 gap-y-8 min-h-[500px]">
        
        {/* Logo */}
        <div className="flex gap-x-1">
          <a className="uppercase text-[24px] text-blue-600 font-extralight">BLUE</a>
          <a className="uppercase text-[24px] text-blue-600 font-semibold">OCEAN</a>
        </div>

        {/* Nội dung chính: grid 2 cột md+, 1 cột sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-10 md:gap-y-0 md:gap-x-12">
          
          {/* Cột 1 - Thông tin liên hệ */}
          <div className="flex flex-col gap-y-4 text-center md:text-left">
            <p className="font-semibold text-2xl">Trung Tâm Ngoại Ngữ Quốc Tế Blue Ocean</p>
            <p>Địa Chỉ : 380 Trần Hưng Đạo - P.An Lưu - TX.Kinh Môn - Hải Dương</p>
            <p>Số Điện Thoại : 0822.663.686</p>
            <div className="flex gap-x-4 justify-center md:justify-start mt-8">
              <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="icon facebook" />
              <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/10792/10792668.png" alt="icon zalo" />
            </div>
          </div>

          {/* Cột 2 - Các link */}
          <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-8 text-center md:text-left">
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold text-xl">Bạn Nên Đặt Niềm tin ở chúng tôi</h2>
              <a href="#" className="hover:underline">Giới Thiệu Về Trung Tâm</a>
              <a href="#" className="hover:underline">Sứ Mệnh Của Chúng Tôi</a>
              <a href="#" className="hover:underline">Đội Ngũ Giáo Viên</a>
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold text-xl">Khóa Học Ở Trung Tâm</h2>
              <a href="#" className="hover:underline">Khóa Học HSK</a>
              <a href="#" className="hover:underline">Khóa Học Giao Tiếp</a>
              <a href="#" className="hover:underline">Khóa Học Tiếng Nhật</a>
              <a href="#" className="hover:underline">Khóa Học Tiếng Hàn</a>
              <a href="#" className="hover:underline">Khóa Học Tiếng Anh</a>
            </div>
          </div>

        </div>

        {/* Đường phân cách */}
        <div className="border-t border-solid border-gray-300 w-full"></div>

        {/* Copyright */}
        <div className="flex flex-col gap-y-2 items-center text-gray-800 text-center">
          <div className="flex gap-x-1 flex-wrap justify-center">
            <p>© 2025</p>
            <p>Blueocean.com . All Rights Reserved</p>
          </div>
          {/* <p>🇬🇪 Georgia, 0160, Tbilisi. Zovreti street 6, flat 13</p> */}
        </div>

      </div>
    </div>
  );
}

export default Footer;
