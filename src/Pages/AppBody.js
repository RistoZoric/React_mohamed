import React, {useRef} from 'react'
import './AppBody.scss'
import FirstContainer from '../Component/AppBody/FirstContainer'
import SecondContainer from '../Component/AppBody/SecondContainer'
import ThirdContainer from '../Component/AppBody/ThirdContainer'
import FourthContainer from '../Component/AppBody/FourthContainer'
import SixthContainer from '../Component/AppBody/SixthContainer'
import EighthContainer from '../Component/AppBody/EighthContainer'

export default function AppBody() {

  const contactRef = useRef(null);
  return (
    <div className='app-body'>
      <FirstContainer contactRef={contactRef}/>
      <SecondContainer/>
      <ThirdContainer/>
      <SixthContainer/>
      <FourthContainer/>
      {/* <FifthContainer/> */}
      {/* <SeventhContainer/> */}
      <EighthContainer ref={contactRef}/>
    </div>
  )
}
