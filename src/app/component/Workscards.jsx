import {motion} from 'framer-motion'
import Cardlist from './Cardlist'
const Workscards = () => {
  
    
    
        return(
            <div className=" relative flex flex-col justify-center items-center mt-48 lineargradient text-white pt-14 h-[600px]">
    <h1 className="text-[42px] font-extrabold">How It Works</h1>
    <p className="text-[16px] font-light my-11 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
    
    
    <h2 className="text-[18px] font-extrabold">FMV Tiering</h2>
    <div className="bg-white h-2 w-3/4 mt-10 rounded-3xl mb-48" ></div>
    <div  className="absolute -bottom-1/4 w-full">
    <Cardlist />
   
    
    </div>
    </div>
        )
    }
    export default Workscards