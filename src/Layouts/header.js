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




















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white shadow-md">
//       <div className="max-w-[1140px] mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-1">
//           <img src="/logo.jpg" alt="Logo" className="w-12 h-auto" />
//           <span className="text-blue-700 text-xl font-extralight uppercase">Blue</span>
//           <span className="text-blue-700 text-xl font-semibold uppercase">Ocean</span>
//         </Link>

//         {/* Hamburger button */}
//         <button
//           className="lg:hidden text-blue-700"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {mobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex gap-3 items-center">
//           <NavLinks />
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden px-4 pb-4 bg-white">
//           <NavLinks isMobile setMobileMenuOpen={setMobileMenuOpen} />
//         </div>
//       )}
//     </header>
//   );
// };

// const NavLinks = ({ isMobile = false, setMobileMenuOpen }) => {
//   const baseClass = "uppercase text-[15px] px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md block";
//   const menuContainer = isMobile ? "space-y-2" : "flex gap-3 items-center";

//   const handleClose = () => {
//     if (setMobileMenuOpen) setMobileMenuOpen(false);
//   };

//   return (
//     <div className={menuContainer}>
//       <Link to="/" onClick={handleClose} className={baseClass}>Trang chủ</Link>

//       <DropdownMenu label="Về chúng tôi" isMobile={isMobile} handleClose={handleClose}>
//         <DropdownItem to="/gioithieu" handleClose={handleClose}>Giới Thiệu</DropdownItem>
//         <DropdownItem to="/sumenh" handleClose={handleClose}>Sứ Mệnh</DropdownItem>
//         <DropdownItem to="/doingu" handleClose={handleClose}>Đội Ngũ</DropdownItem>
//       </DropdownMenu>

//       <DropdownMenu label="Khóa học" isMobile={isMobile} handleClose={handleClose}>
//         <DropdownSubMenu label="HSK" isMobile={isMobile}>
//           <DropdownItem to="/hsk1" handleClose={handleClose}>HSK 1</DropdownItem>
//           <DropdownItem to="/hsk2" handleClose={handleClose}>HSK 2</DropdownItem>
//           <DropdownItem to="/hsk3" handleClose={handleClose}>HSK 3</DropdownItem>
//           <DropdownItem to="/hsk4" handleClose={handleClose}>HSK 4</DropdownItem>
//           <DropdownItem to="/hsk5" handleClose={handleClose}>HSK 5</DropdownItem>
//           <DropdownItem to="/hsk6" handleClose={handleClose}>HSK 6</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownItem to="/giaotiep" handleClose={handleClose}>Khóa Giao Tiếp</DropdownItem>
//         <DropdownSubMenu label="Tiếng Nhật" isMobile={isMobile}>
//           <DropdownItem to="/nhat5" handleClose={handleClose}>N5</DropdownItem>
//           <DropdownItem to="/nhat4" handleClose={handleClose}>N4</DropdownItem>
//           <DropdownItem to="/nhat3" handleClose={handleClose}>N3</DropdownItem>
//           <DropdownItem to="/nhat2" handleClose={handleClose}>N2</DropdownItem>
//           <DropdownItem to="/nhat1" handleClose={handleClose}>N1</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownSubMenu label="Tiếng Hàn" isMobile={isMobile}>
//           <DropdownItem to="/hansocap" handleClose={handleClose}>Sơ Cấp</DropdownItem>
//           <DropdownItem to="/hantrungcap" handleClose={handleClose}>Trung Cấp</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownItem to="/anh" handleClose={handleClose}>Tiếng Anh</DropdownItem>
//       </DropdownMenu>

//       <DropdownMenu label="Định hướng" isMobile={isMobile} handleClose={handleClose}>
//         <DropdownSubMenu label="Du Học" isMobile={isMobile}>
//           <DropdownItem to="#">Trung Quốc</DropdownItem>
//           <DropdownItem to="#">Đài Loan</DropdownItem>
//           <DropdownItem to="#">Nhật Bản</DropdownItem>
//           <DropdownItem to="#">Hàn Quốc</DropdownItem>
//           <DropdownItem to="#">Úc</DropdownItem>
//           <DropdownItem to="#">Đức</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownSubMenu label="Xuất khẩu lao động" isMobile={isMobile}>
//           <DropdownItem to="#">Trung Quốc</DropdownItem>
//           <DropdownItem to="#">Đài Loan</DropdownItem>
//           <DropdownItem to="#">Nhật Bản</DropdownItem>
//           <DropdownItem to="#">Hàn Quốc</DropdownItem>
//           <DropdownItem to="#">Úc</DropdownItem>
//           <DropdownItem to="#">Đức</DropdownItem>
//         </DropdownSubMenu>
//       </DropdownMenu>

//       <Link to="/tintuc" onClick={handleClose} className={baseClass}>Tin tức</Link>
//     </div>
//   );
// };

// const DropdownMenu = ({ label, children, isMobile, handleClose }) => {
//   const [open, setOpen] = useState(false);
//   const toggle = () => setOpen(!open);

//   if (isMobile) {
//     return (
//       <div>
//         <button
//           onClick={toggle}
//           className="w-full text-left uppercase text-[15px] px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md"
//         >
//           {label}
//         </button>
//         {open && <div className="ml-4 space-y-1">{children}</div>}
//       </div>
//     );
//   }

//   return (
//     <div className="group relative">
//       <button className="uppercase text-[15px] px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md">
//         {label}
//       </button>
//       <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border rounded-md shadow-lg min-w-[160px] z-20">
//         <div className="py-1">{children}</div>
//       </div>
//     </div>
//   );
// };

// const DropdownSubMenu = ({ label, children, isMobile }) => {
//   const [open, setOpen] = useState(false);

//   if (isMobile) {
//     return (
//       <div className="ml-2">
//         <button
//           onClick={() => setOpen(!open)}
//           className="w-full text-left text-[14px] px-3 py-2 hover:bg-blue-100 rounded-md"
//         >
//           {label}
//         </button>
//         {open && <div className="ml-4 space-y-1">{children}</div>}
//       </div>
//     );
//   }

//   return (
//     <div className="group relative">
//       <div className="px-4 py-2 hover:bg-blue-400 hover:text-white cursor-pointer">
//         {label}
//       </div>
//       <div className="absolute top-0 left-full hidden group-hover:block bg-white border rounded-md shadow-lg min-w-[160px] z-30">
//         <div className="py-1">{children}</div>
//       </div>
//     </div>
//   );
// };

// const DropdownItem = ({ to, children, handleClose }) => (
//   <Link
//     to={to}
//     onClick={() => handleClose && handleClose()}
//     className="block px-4 py-2 hover:bg-blue-400 hover:text-white text-sm"
//   >
//     {children}
//   </Link>
// );

// export default Header;

























// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white shadow-md">
//       <div className="max-w-[1140px] mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-1">
//           <img src="/logo.jpg" alt="Logo" className="w-12 h-auto" />
//           <span className="text-blue-700 text-xl font-extralight uppercase">Blue</span>
//           <span className="text-blue-700 text-xl font-semibold uppercase">Ocean</span>
//         </Link>

//         {/* Hamburger button for mobile */}
//         <button
//           className="lg:hidden text-blue-700"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {mobileMenuOpen ? (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>

//         {/* Desktop menu */}
//         <nav className="hidden lg:flex gap-3 items-center">
//           <NavLinks />
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <nav className="lg:hidden px-4 pb-4 bg-white border-t border-gray-200">
//           <NavLinks isMobile setMobileMenuOpen={setMobileMenuOpen} />
//         </nav>
//       )}
//     </header>
//   );
// }

// function NavLinks({ isMobile = false, setMobileMenuOpen }) {
//   const baseClass = "uppercase text-[15px] px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md block cursor-pointer";
//   const menuContainer = isMobile ? "space-y-2" : "flex gap-3 items-center";

//   // Close mobile menu on click link
//   const handleClose = () => {
//     if (setMobileMenuOpen) setMobileMenuOpen(false);
//   };

//   return (
//     <div className={menuContainer}>
//       <Link to="/" onClick={handleClose} className={baseClass}>Trang chủ</Link>

//       <DropdownMenu label="Về chúng tôi" isMobile={isMobile} handleClose={handleClose}>
//         <DropdownItem to="/gioithieu" handleClose={handleClose}>Giới Thiệu</DropdownItem>
//         <DropdownItem to="/sumenh" handleClose={handleClose}>Sứ Mệnh</DropdownItem>
//         <DropdownItem to="/doingu" handleClose={handleClose}>Đội Ngũ</DropdownItem>
//       </DropdownMenu>

//       <DropdownMenu label="Khóa học" isMobile={isMobile} handleClose={handleClose}>
//         <DropdownSubMenu label="HSK" isMobile={isMobile}>
//           <DropdownItem to="/hsk1" handleClose={handleClose}>HSK 1</DropdownItem>
//           <DropdownItem to="/hsk2" handleClose={handleClose}>HSK 2</DropdownItem>
//           <DropdownItem to="/hsk3" handleClose={handleClose}>HSK 3</DropdownItem>
//           <DropdownItem to="/hsk4" handleClose={handleClose}>HSK 4</DropdownItem>
//           <DropdownItem to="/hsk5" handleClose={handleClose}>HSK 5</DropdownItem>
//           <DropdownItem to="/hsk6" handleClose={handleClose}>HSK 6</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownItem to="/giaotiep" handleClose={handleClose}>Khóa Giao Tiếp</DropdownItem>
//         <DropdownSubMenu label="Tiếng Nhật" isMobile={isMobile}>
//           <DropdownItem to="/nhat5" handleClose={handleClose}>N5</DropdownItem>
//           <DropdownItem to="/nhat4" handleClose={handleClose}>N4</DropdownItem>
//           <DropdownItem to="/nhat3" handleClose={handleClose}>N3</DropdownItem>
//           <DropdownItem to="/nhat2" handleClose={handleClose}>N2</DropdownItem>
//           <DropdownItem to="/nhat1" handleClose={handleClose}>N1</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownSubMenu label="Tiếng Hàn" isMobile={isMobile}>
//           <DropdownItem to="/hansocap" handleClose={handleClose}>Tiếng Hàn Sơ Cấp</DropdownItem>
//           <DropdownItem to="/hantrungcap" handleClose={handleClose}>Tiếng Hàn Trung Cấp</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownItem to="/anh" handleClose={handleClose}>Khóa Tiếng Anh</DropdownItem>
//       </DropdownMenu>

//       <DropdownMenu label="Định hướng" isMobile={isMobile} handleClose={handleClose}>
//         <DropdownSubMenu label="Du Học" isMobile={isMobile}>
//           <DropdownItem to="#" handleClose={handleClose}>Trung Quốc</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Đài Loan</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Nhật Bản</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Hàn Quốc</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Úc</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Đức</DropdownItem>
//         </DropdownSubMenu>
//         <DropdownSubMenu label="Xuất Khẩu Lao Động" isMobile={isMobile}>
//           <DropdownItem to="#" handleClose={handleClose}>Trung Quốc</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Đài Loan</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Nhật Bản</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Hàn Quốc</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Úc</DropdownItem>
//           <DropdownItem to="#" handleClose={handleClose}>Đức</DropdownItem>
//         </DropdownSubMenu>
//       </DropdownMenu>

//       <Link to="/tintuc" onClick={handleClose} className={baseClass}>Tin tức</Link>
//     </div>
//   );
// }

// function DropdownMenu({ label, children, isMobile, handleClose }) {
//   const [open, setOpen] = useState(false);
//   const toggle = () => setOpen(!open);

//   // Mobile: click mở dropdown; Desktop: hover mở dropdown
//   if (isMobile) {
//     return (
//       <div>
//         <button
//           onClick={toggle}
//           className="w-full text-left uppercase text-[15px] px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer"
//         >
//           {label}
//         </button>
//         {open && <div className="ml-4 space-y-1">{children}</div>}
//       </div>
//     );
//   }

//   return (
//     <div className="group relative">
//       <button className="uppercase text-[15px] px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer">
//         {label}
//       </button>
//       <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border rounded-md shadow-lg min-w-[160px] z-20">
//         <div className="py-1">{children}</div>
//       </div>
//     </div>
//   );
// }

// function DropdownSubMenu({ label, children, isMobile }) {
//   const [open, setOpen] = useState(false);
//   const toggle = () => setOpen(!open);

//   if (isMobile) {
//     return (
//       <div>
//         <button
//           onClick={toggle}
//           className="w-full text-left uppercase text-[15px] px-3 py-2 hover:bg-blue-400 hover:text-white rounded-md cursor-pointer"
//         >
//           {label}
//         </button>
//         {open && <div className="ml-4 space-y-1">{children}</div>}
//       </div>
//     );
//   }

//   return (
//     <div className="relative group">
//       <button className="uppercase text-[15px] px-3 py-2 hover:bg-blue-400 hover:text-white rounded-md cursor-pointer flex justify-between items-center w-full">
//         {label}
//         <svg
//           className="w-4 h-4 inline-block ml-1"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//          xmlns="http://www.w3.org/2000/svg">
// <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
// </svg>
// </button>
// <div className="absolute left-full top-0 mt-0 hidden group-hover:block bg-white border rounded-md shadow-lg min-w-[160px] z-30">
// <div className="py-1">{children}</div>
// </div>
// </div>
// );
// }

// function DropdownItem({ to, children, handleClose }) {
// return (
// <Link to={to} onClick={handleClose} className="block px-3 py-2 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer uppercase text-[14px]" >
// {children}
// </Link>
// );
// }

// export default Header;
















