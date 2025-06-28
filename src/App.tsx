import { Routes, Route } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Services from '@pages/Services/Services';
import Products from '@pages/Products/Products';
import Contact from '@pages/Contact/Contact';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
