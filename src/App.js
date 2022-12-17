import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/sobre-mim" element={<AboutMe />} />
            <Route path="/projetos" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
