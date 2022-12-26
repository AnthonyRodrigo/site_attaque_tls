import React from 'react'
import Bg from '../../img/cadenas.jpg'
import { Link} from 'react-router-dom'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { motion } from "framer-motion";
import {RiSecurePaymentLine} from 'react-icons/ri'
import {TbTruckDelivery} from 'react-icons/tb'


const HomeContainer = props => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="accueil">
      <motion.div 
      initial={{ opacity: 0, x: '-100px' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className='py-9  flex-1 flex flex-col items-start justify-center gap-6'>
          <h1 className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-titleColor'>
          Attaque <span className='text-bgFooter text-[3rem] lg:text-[5rem]'>TLS</span> 
          </h1>

          <h2 className='text-base text-textColor text-center md:text-left md:w-[80%]'>

          </h2>

          <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
              <motion.div
            whileHover={{ scale: 1.07 }}  
            className='flex items-center gap-2 justify-center bg-gradient-to-tl from-gray-200 to-gray-500 px-4 py-1 rounded-full text-base text-white font-semibold'>
              SSL Striping
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:shadow-md ">
                        <TbTruckDelivery className="text-colorGris w-6 h-6" />
                      </div>
              </motion.div>
              <motion.div
            whileHover={{ scale: 1.07 }} 
             className='flex text-base text-white font-semibold items-center gap-2 justify-center bg-gradient-to-tl from-gray-200 to-gray-500 px-4 py-1 rounded-full'>
              HSTS Hijacking
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:shadow-md ">
                        <RiSecurePaymentLine className="text-colorGris w-6 h-6" />
                      </div>
              </motion.div>
          </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: '100px' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className='py-9 flex-1 flex items-center relative'>
          <img src={Bg} 
          className="ml-auto h-840 w-full lg:w-auto lg:h-550 rounded-3xl drop-shadow-lg backdrop-blur-md" 
          alt="hero-bg" />
      </motion.div>
  </div>
  )
}

export default HomeContainer