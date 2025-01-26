import AboutMe from '../AboutMe';
import CallToAction from '../CallToAction';
import ContactMe from '../ContactMe';
import Experience from '../Experience';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';

function MainLayout() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <AboutMe />
      <ContactMe />
      <Footer />
      <CallToAction />
    </>
  );
}

export default MainLayout;
