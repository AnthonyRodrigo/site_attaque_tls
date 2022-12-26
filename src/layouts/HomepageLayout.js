import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'
import ScrollToTop from './../components/ScrollToTop'




const HomepageLayout = props => {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header {...props}/>
        <div className='mt-16 md:mt-20 px-4 md:px-16 py-11 w-full'>
          <div className='w-full h-auto flex flex-col items-center justify-center'>
           {props.children} 
           </div>
           <ScrollToTop/>
        </div>
        <Footer/>
    </div>
  )
}

export default HomepageLayout; 