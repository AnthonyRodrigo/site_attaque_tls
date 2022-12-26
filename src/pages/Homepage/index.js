import React from 'react'

import HomeContainer from '../../components/HomeContainer'
import Introduction from '../../components/Introduction'

const Homepage = props => {
  return (
    
    <section className='items-center justify-center  md:gap-8 flex flex-col h-auto'>

        <HomeContainer/> 
        <Introduction/>
  
    </section>
  )
}

export default Homepage
