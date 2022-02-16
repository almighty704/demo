import Destination from '../components/HomeView/Destination/Destination';
import Carousel from '../components/HomeView/Hero/Carousel';
import Slides from '../components/HomeView/Slides/Slides';
import Recomended from '../components/HomeView/Recomended/Recomended';
import Stats from '../components/HomeView/Stats/Stats';
import About from '../components/HomeView/About/About';
import RecomendedHotels from '../components/HomeView/RecomendedHotels/RecomendedHotels';
import Testimonials from '../components/HomeView/Testimonials/Testimonials';
import Gallery from '../components/HomeView/Gallery/Gallery';
import Blog from '../components/HomeView/Blog/Blog';
import Subscribe from '../components/HomeView/Subscribe/Subscribe';

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Slides />
      <Destination />
      <Recomended />
      <Stats />
      <About />
      <RecomendedHotels />
      <Testimonials />
      <Gallery />
      <Blog />
      <Subscribe />
    </>
  );
};

export default HomePage;
