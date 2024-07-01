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
export default function Home() {
  return (
   <div>
    <Header/>
    <Herosection/>
    <OurPurpose />
    <Workscards />
    
    
    </div>
  )
   
}
