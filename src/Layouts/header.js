import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const [openSubmenu, setOpenSubmenu] = useState('');

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => prev === name ? '' : name);
    setOpenSubmenu('');
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(prev => prev === name ? '' : name);
  };

  const navigateTo = (path) => {
    setMenuOpen(false);
    setOpenDropdown('');
    setOpenSubmenu('');
    navigate(path);
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const menuItems = [
    {
      title: 'Trang chủ',
      path: '/',
    },
    {
      title: 'Về Chúng Tôi',
      dropdownKey: 'vechungtoi',
      subItems: [
        { title: 'Giới Thiệu', path: '/gioithieu' },
        { title: 'Sứ Mệnh', path: '/sumenh' },
        { title: 'Đội Ngũ', path: '/doingu' },
      ]
    },
    {
      title: 'Khóa Học',
      dropdownKey: 'khoahoc',
      subItems: [
        {
          title: 'Khóa HSK',
          submenuKey: 'hsk',
          children: [
            { title: 'HSK 1', path: '/hsk1' },
            { title: 'HSK 2', path: '/hsk2' },
            { title: 'HSK 3', path: '/hsk3' },
            { title: 'HSK 4', path: '/hsk4' },
            { title: 'HSK 5', path: '/hsk5' },
            { title: 'HSK 6', path: '/hsk6' },
          ]
        },
        {
          title: 'Khóa Giao Tiếp',
          path: '/giaotiep'
        },
        {
          title: 'Khóa Tiếng Nhật',
          submenuKey: 'nhat',
          children: [
            { title: 'N5', path: '/nhat5' },
            { title: 'N4', path: '/nhat4' },
            { title: 'N3', path: '/nhat3' },
            { title: 'N2', path: '/nhat2' },
            { title: 'N1', path: '/nhat1' },
          ]
        },
        {
          title: 'Khóa Tiếng Hàn',
          submenuKey: 'han',
          children: [
            { title: 'Tiếng Hàn Sơ Cấp', path: '/hansocap' },
            { title: 'Tiếng Hàn Trung Cấp', path: '/hantrungcap' }
          ]
        },
        {
          title: 'Khóa Tiếng Anh',
          path: '/anh'
        }
      ]
    },


       {
      title: 'Định Hướng',
      dropdownKey: 'dinhhuong',
      subItems: [
        {
          title: 'Du Học',
          submenuKey: 'duhoc',
          children: [
            { title: 'Trung Quốc', path: '/dhtrungquoc' },
            { title: 'Đài Loan', path: '/dhdailoan' },
            { title: 'Nhật Bản', path: '/dhnhatban' },
            { title: 'Hàn Quốc', path: '/dhhanquoc' },
            { title: 'Úc', path: '/dhuc' },
            { title: 'Đức', path: '/dhduc' },
          ]
        },
        {
          title: 'Xuất Khẩu',
          submenuKey: 'xuatkhau',
          children: [
            { title: 'Trung Quốc', path: '/xktrungquoc' },
            { title: 'Đài Loan', path: '/xkdailoan' },
            { title: 'Nhật Bản', path: '/xknhatban' },
            { title: 'Hàn Quốc', path: '/xkhanquoc' },
            { title: 'Úc', path: '/xkuc' },
            { title: 'Đức', path: '/xkduc' },
          ]
        },
      ]
    },



    {
      title: 'Tin Tức',
      path: '/tintuc'
    }
  ];

  return (
    <div className="fixed z-20 w-full bg-white h-[60px] shadow-md flex items-center justify-center">
      <div className="w-full max-w-[1140px] px-4 flex items-center justify-between">
        <a href='/' className="flex items-center gap-x-1">
          <img src="/logo.jpg" className='w-12 h-auto' alt="Logo" />
          <span className="uppercase text-2xl text-blue-700 font-extralight">Blue</span>
          <span className="uppercase text-2xl text-blue-700 font-semibold">Ocean</span>
        </a>

     
        <div className="hidden md:flex items-center gap-x-2">
  {menuItems.map(item => (
    <div key={item.title} className="relative group px-3 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
      <a
        href={item.path || "#"}
        className="uppercase text-[15px] text-black group-hover:text-white flex items-center gap-x-1"
      >
        {item.title}
        {(item.subItems || item.children) && (
          <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" className="w-4 h-4" />
        )}
      </a>

      {/* Dropdown cấp 1 */}
      {item.subItems && (
        <div className="absolute top-full left-0 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-10">
          <ul className="text-sm text-gray-700">
            {item.subItems.map(sub => (
              <li key={sub.title} className="relative group/sub">
                {sub.path ? (
                  <a
                    href={sub.path}
                    className="block px-4 py-2 hover:bg-blue-400 hover:text-white"
                  >
                    {sub.title}
                  </a>
                ) : (
                  <>
                    <span className="block px-4 py-2 group-hover/sub:bg-blue-400 group-hover/sub:text-white">
                      {sub.title}
                    </span>
                    {/* Dropdown cấp 2 */}
                    {sub.children && (
                      <div className="absolute top-0 left-full w-40 bg-white border rounded-md shadow-lg hidden group-hover/sub:block z-20">
                        <ul>
                          {sub.children.map(child => (
                            <li key={child.title}>
                              <a
                                href={child.path}
                                className="block px-4 py-2 hover:bg-blue-400 hover:text-white"
                              >
                                {child.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>


        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-white border-t z-10">
          <ul className="flex flex-col text-sm text-black">
            {menuItems.map(item => (
              <li key={item.title}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.dropdownKey)}
                      className="w-full text-left px-4 py-2 border-b hover:bg-blue-100 flex justify-between"
                    >
                      {item.title}
                      <span>{openDropdown === item.dropdownKey ? '-' : '+'}</span>
                    </button>
                    {openDropdown === item.dropdownKey && (
                      <ul className="pl-4">
                        {item.subItems.map(sub => (
                          <li key={sub.title}>
                            {sub.path ? (
                              <button
                                onClick={() => navigateTo(sub.path)}
                                className="w-full text-left px-4 py-2 border-b hover:bg-blue-100"
                              >
                                {sub.title}
                              </button>
                            ) : (
                              <div>
                                <button
                                  onClick={() => toggleSubmenu(sub.submenuKey)}
                                  className="w-full text-left px-4 py-2 border-b hover:bg-blue-100 flex justify-between"
                                >
                                  {sub.title}
                                  <span>{openSubmenu === sub.submenuKey ? '-' : '+'}</span>
                                </button>
                                {openSubmenu === sub.submenuKey && (
                                  <ul className="pl-4">
                                    {sub.children.map(c => (
                                      <li key={c.title}>
                                        <button
                                          onClick={() => navigateTo(c.path)}
                                          className="w-full text-left px-4 py-2 border-b hover:bg-blue-100"
                                        >
                                          {c.title}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => navigateTo(item.path)}
                    className="w-full text-left px-4 py-2 border-b hover:bg-blue-100"
                  >
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;