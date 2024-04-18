import { HeroLandingPage } from '../components/home/CTA';
import { CardCanvasRevealEffect } from '../components/home/CardCanvas';
import { TypewriterLandingPage } from '../components/home/Landing';

const LandingPage = () => {
  return (
    <div className='bg-black'>
      <TypewriterLandingPage />
      <HeroLandingPage />
      <CardCanvasRevealEffect />
    </div>
  );
};

export default LandingPage;
