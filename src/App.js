import './App.css';
import Anasayfa from './files/pages/Anasayfa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './files/pages/Blogs';
import Blogs1 from './files/pages/Blogs1';

import Hizmetler from './files/pages/hizmetler';
import About from './files/pages/Hakkimda';
import Iletisim from './files/pages/iletisim';
import NavBar from './files/pages/NavBar';
import { useState } from 'react';

function App() {
  let phoneNumber = '0999 999 99 99';

  phoneNumber = phoneNumber.split(' ').join('');

  const [menu, setMenu] = useState(false);
  return (
    <div className="flex justify-start items-center flex-col ">
      <Router>
        <NavBar smenu={menu} setsmenu={setMenu} />

        <div className={'w-full h-screen'}>
          <Routes>
            <Route path={'/'} element={<Anasayfa phonen={phoneNumber} />} />
            <Route
              path={'/services'}
              element={<Hizmetler phonen={phoneNumber} />}
            />
            <Route path={'/blogs'} element={<Blogs phonen={phoneNumber} />} />
            <Route path={'/about'} element={<About phonen={phoneNumber} />} />
            <Route
              path={'/contact'}
              element={<Iletisim phonen={phoneNumber} />}
            />
            <Route
              path={'/blogs/blogs1'}
              element={<Blogs1 phonen={phoneNumber} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
