import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Gioithieu from './Pages/vechungtoi/gioithieu';
import Sumenh from './Pages/vechungtoi/sumenh';
import Doingu from './Pages/vechungtoi/doingu';
import Blog from './Pages/blog/blog';
import Tintuc from './Pages/tintuc/tintuc';
import Anh from './Pages/khoahoc/anh/anh';
import Hansocap from './Pages/khoahoc/han/hansocap';
import Hantrungcap from './Pages/khoahoc/han/hantrungcap';
import Giaotiep from './Pages/khoahoc/giaotiep/giaotiep';
import Hsk1 from './Pages/khoahoc/hsk/hsk1';
import Hsk2 from './Pages/khoahoc/hsk/hsk2';
import Hsk3 from './Pages/khoahoc/hsk/hsk3';
import Hsk4 from './Pages/khoahoc/hsk/hsk4';
import Hsk5 from './Pages/khoahoc/hsk/hsk5';
import Hsk6 from './Pages/khoahoc/hsk/hsk6';
import Nhat1 from './Pages/khoahoc/nhat/nhat1';
import Nhat2 from './Pages/khoahoc/nhat/nhat2';
import Nhat3 from './Pages/khoahoc/nhat/nhat3';
import Nhat4 from './Pages/khoahoc/nhat/nhat4';
import Nhat5 from './Pages/khoahoc/nhat/nhat5';
import Caocap from './Pages/lotrinhhoc/caocap';
import Socap from './Pages/lotrinhhoc/socap';
import Trungcap from './Pages/lotrinhhoc/trungcap';
import Header from "./Layouts/header";
import Footer from "./Layouts/footer";
import Chat from "./Components/chat";
import Phone from "./Components/phone";
import Home from './Pages/home/home';

// 👉 Tạo component bọc để dùng hook useLocation nếu cần xử lý điều kiện khác
function AppWrapper() {
  const location = useLocation();

  return (
    <>
      <Chat />
      <Phone />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/sumenh" element={<Sumenh />} />
        <Route path="/doingu" element={<Doingu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/anh" element={<Anh />} />
        <Route path="/giaotiep" element={<Giaotiep />} />
        <Route path="/hansocap" element={<Hansocap />} />
        <Route path="/hantrungcap" element={<Hantrungcap />} />
        <Route path="/hsk1" element={<Hsk1 />} />
        <Route path="/hsk2" element={<Hsk2 />} />
        <Route path="/hsk3" element={<Hsk3 />} />
        <Route path="/hsk4" element={<Hsk4 />} />
        <Route path="/hsk5" element={<Hsk5 />} />
        <Route path="/hsk6" element={<Hsk6 />} />
        <Route path="/nhat1" element={<Nhat1 />} />
        <Route path="/nhat2" element={<Nhat2 />} />
        <Route path="/nhat3" element={<Nhat3 />} />
        <Route path="/nhat4" element={<Nhat4 />} />
        <Route path="/nhat5" element={<Nhat5 />} />
        <Route path="/caocap" element={<Caocap />} />
        <Route path="/giaotiep" element={<Giaotiep />} />
        <Route path="/socap" element={<Socap />} />
        <Route path="/trungcap" element={<Trungcap />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
