import React, { useState, useEffect } from 'react';
import Gioithieu from '../Pages/vechungtoi/gioithieu';
import Doingu from '../Pages/vechungtoi/doingu';
import Sumenh from '../Pages/vechungtoi/sumenh';
import Tintuc from '../Pages/tintuc/tintuc';
import Blog from '../Pages/blog/blog';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // State để theo dõi scrollY
  // const [isScrolled, setIsScrolled] = useState(false);

  // // Hàm xử lý sự kiện cuộn trang
  // const handleScroll = () => {
  //   if (window.scrollY > 60) {
  //     setIsScrolled(true); // Nếu cuộn xuống hơn 10px, hiển thị menu
  //   } else {
  //     setIsScrolled(false); // Nếu cuộn lên trên 10px, ẩn menu
  //   }
  // };

  // // Thêm event listener khi component được mount
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup khi component bị unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        // className={`fixed z-20 w-full bg-white h-[60px] flex items-center justify-center transition-transform duration-700 ${isScrolled ? 'translate-y-0' : 'translate-y-[-60px]'}`}
        className={`fixed z-20 w-full bg-white h-[60px] flex items-center justify-center shadow-[0_8px_10px_-4px_rgba(0,0,0,0.3)]`}
      >
        <div className="w-[1140px] flex items-center justify-between">
          <a href='/' className="flex items-center gap-x-1">
            {/* <img src="" /> */}
            <img src="/logo.jpg" className='w-12 h-auto' alt="Logo" />

            <a className="uppercase text-24px text-blue-700 font-extralight">Blue</a>
            <a className="uppercase text-24px text-blue-700 font-semibold">Ocean</a>
          </a>
          <div className="flex items-center">
            
            <a href='/' className='block px-3 py-2 hover:bg-blue-500 rounded-lg uppercase text-[15px] text-black hover:text-white cursor-pointer'>
              Trang chủ
            </a>


            <div className="relative group px-3 py-2 hover:bg-blue-500 rounded-lg flex flex-row items-center gap-x-1 cursor-pointer">
              <a href="#" className="uppercase text-[15px] text-black group-hover:text-white flex items-center gap-x-1">
                Về Chúng Tôi
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" className="w-4 h-4" />
              </a>

              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-10">
                <ul className="text-sm text-gray-700">
                  <li>
                    <a href="/gioithieu" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">
                      Giới Thiệu
                    </a>
                  </li>
                  <li>
                    <a href="/sumenh" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">
                      Sứ Mệnh
                    </a>
                  </li>
                  <li>
                    <a href="/doingu" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">
                      Đội Ngũ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

  

              <div className="relative group px-3 py-2 hover:bg-blue-500 rounded-lg flex flex-row items-center gap-x-1 cursor-pointer">
                <a href="#" className="uppercase text-[15px] text-black group-hover:text-white flex items-center gap-x-1">
                  Khóa Học
                  <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" className="w-4 h-4" />
                </a>

                {/* Dropdown menu cấp 1 */}
                <div className="absolute top-full left-0 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-10">
                  <ul className="text-sm text-gray-700">

                    {/* Khóa HSK */}
                    <li className="relative group/sub">
                      <a  className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Khóa HSK
                      </a>
                      <div className="absolute top-0 left-full w-40 bg-white border rounded-md shadow-lg hidden group-hover/sub:block z-20">
                        <ul>
                          <li><a href="/hsk1" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">HSK 1</a></li>
                          <li><a href="/hsk2" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">HSK 2</a></li>
                          <li><a href="/hsk3" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">HSK 3</a></li>
                          <li><a href="/hsk4" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">HSK 4</a></li>
                          <li><a href="/hsk5" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">HSK 5</a></li>
                          <li><a href="/hsk6" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">HSK 6</a></li>
                        </ul>
                      </div>
                    </li>

                    {/* Khóa Giao Tiếp */}
                    <li className="relative group/sub">
                      <a href="/giaotiep" className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Khóa Giao Tiếp
                      </a>
                   
                    </li>

                    {/* Khóa Tiếng Nhật */}
                    <li className="relative group/sub">
                      <a  className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Khóa Tiếng Nhật
                      </a>
                      <div className="absolute top-0 left-full w-40 bg-white border rounded-md shadow-lg hidden group-hover/sub:block z-20">
                        <ul>
                          <li><a href="/nhat5" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">N5</a></li>
                          <li><a href="/nhat4" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">N4</a></li>
                          <li><a href="/nhat3" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">N3</a></li>
                          <li><a href="/nhat2" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">N2</a></li>
                          <li><a href="/nhat1" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">N1</a></li>
                        </ul>
                      </div>
                    </li>

                    {/* Khóa Tiếng Hàn */}
                    <li className="relative group/sub">
                      <a  className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Khóa Tiếng Hàn
                      </a>
                      <div className="absolute top-0 left-full w-40 bg-white border rounded-md shadow-lg hidden group-hover/sub:block z-20">
                        <ul>
                          <li><a href="/hansocap" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Tiếng Hàn Sơ Cấp</a></li>
                          <li><a href="/hantrungcap" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Tiếng Hàn Trung Cấp</a></li>
                        </ul>
                      </div>
                    </li>

                    

                        {/* Khóa Giao Tiếp */}
                    <li className="relative group/sub">
                      <a href="/anh" className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Khóa Tiếng Anh
                      </a>
                    
                    </li>

                  </ul>
                </div>
              </div>




                 <div className="relative group px-3 py-2 hover:bg-blue-500 rounded-lg flex flex-row items-center gap-x-1 cursor-pointer">
                <a href="#" className="uppercase text-[15px] text-black group-hover:text-white flex items-center gap-x-1">
                  Định hướng
                  <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" className="w-4 h-4" />
                </a>

                {/* Dropdown menu cấp 1 */}
                <div className="absolute top-full left-0 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-10">
                  <ul className="text-sm text-gray-700">

                    {/* Khóa HSK */}
                    <li className="relative group/sub">
                      <a  className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Du Học
                      </a>
                      <div className="absolute top-0 left-full w-40 bg-white border rounded-md shadow-lg hidden group-hover/sub:block z-20">
                        <ul>
                          <li><a href="/hsk1" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Trung Quốc</a></li>
                          <li><a href="/hsk2" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Đài Loan</a></li>
                          <li><a href="/hsk3" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Nhật Bản</a></li>
                          <li><a href="/hsk4" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Hàn Quốc</a></li>
                          <li><a href="/hsk5" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Úc</a></li>
                          <li><a href="/hsk6" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Đức</a></li>
                        </ul>
                      </div>
                    </li>


                    {/* Khóa Tiếng Nhật */}
                    <li className="relative group/sub">
                      <a  className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                        Xuất Khẩu Lao Động
                      </a>
                      <div className="absolute top-0 left-full w-40 bg-white border rounded-md shadow-lg hidden group-hover/sub:block z-20">
                        <ul>
                          <li><a href="/hsk1" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Trung Quốc</a></li>
                          <li><a href="/hsk2" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Đài Loan</a></li>
                          <li><a href="/hsk3" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Nhật Bản</a></li>
                          <li><a href="/hsk4" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Hàn Quốc</a></li>
                          <li><a href="/hsk5" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Úc</a></li>
                          <li><a href="/hsk6" className="block px-4 py-2 hover:bg-blue-400 hover:text-white">Đức</a></li>
                        </ul>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>






       
                 {/* <a href='/blog' className='block px-3 py-2 hover:bg-blue-500 rounded-lg uppercase text-[15px] text-black hover:text-white cursor-pointer'>
              Blog
            </a>  */}
                 <a href='/tintuc' className='block px-3 py-2 hover:bg-blue-500 rounded-lg uppercase text-[15px] text-black hover:text-white cursor-pointer'>
              Tin Tức
            </a>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
