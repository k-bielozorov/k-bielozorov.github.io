import { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Resume from '../Resume';

function ResumeLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Resume />
      <Footer />
    </>
  );
}

export default ResumeLayout;
