
import React, {useState} from 'react';
import InfoSection from '../components/InfoSection/index';
import InfoSection2 from '../components/InfoSection/index2';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection/Data2';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection3 from '../components/InfoSection/Index3';
import { homeObjThree } from '../components/InfoSection/Data3';
import InfoSection4 from '../components/InfoSection/Index4';
import { homeObjFour } from '../components/InfoSection/Data4';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        
        <InfoSection {...homeObjOne}/>
        <InfoSection2 {...homeObjTwo}/>
        <InfoSection3 {...homeObjThree}/>
        {/* <InfoSection4 {...homeObjFour}/> */}
    </>
  )
}

export default Home;