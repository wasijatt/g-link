// app/pages/index.js or app/pages/Home.js
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../app/component/Header'), {
  ssr: true,
});
const Herosection = dynamic(() => import('../app/component/Herosection'), {
  ssr: true,
});
const Workscards = dynamic(() => import('../app/component/Workscards'), {
  ssr: true,
});
const OurPurpose = dynamic(() => import('../app/component/OurPurpose'), {
  ssr: true,
});
const SmoothScroll = dynamic(() => import('../app/component/SmoothScroll'), {
  ssr: false,
});
const CustomCursor = dynamic(() => import('../app/component/CustomCursor'), {
  ssr: false,
});
export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <CustomCursor/>
      <Herosection className="section" />
      <OurPurpose className="section" />
      <Workscards className="section" />
    </SmoothScroll>
  );
}
