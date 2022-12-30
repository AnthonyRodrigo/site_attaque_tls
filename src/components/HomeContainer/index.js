import React from 'react'
import Bg from '../../img/cadenas.jpg'
import { motion } from "framer-motion";
import {GiDaemonSkull} from 'react-icons/gi'
import {GiCrownedSkull} from 'react-icons/gi'
import {FaShieldAlt} from 'react-icons/fa'
import {BsPlusLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'




const HomeContainer = props => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6' id="accueil">
      <motion.div 
      initial={{ opacity: 0, x: '-100px' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className='py-9   flex flex-col justify-center gap-6'>
          <h1 className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-titleColor'>
          Attaque <span className='text-bgFooter text-[3rem] lg:text-[5rem]'>TLS</span> 
          </h1>

          <h2 className='text-base text-justify text-textColor '>
            Ce site web présente des attaques sur SSL/TLS à caractères pédagogiques. Nous ne pouvons être en aucun cas tenu responsable d’une utilisation malveillante. <br/> L'application web et son script ont été réalisé par Rémi BONREPAUX, Louis LOLIVE, Tom HEURTEBISE, Jules BOYER et Anthony RODRIGO.
          </h2>

          <div className='flex text-center items-center justify-center'>
            <Link to='/introduction'>
            <motion.div
                whileHover={{ scale: 1.07 }} 
                className='flex text-base text-white font-semibold items-center gap-2 justify-center bg-gradient-to-tl from-gray-200 to-gray-500 px-4 py-1 rounded-full'>
                Introduction
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:shadow-md ">
                        <BsPlusLg className="text-titleColor w-6 h-6" />
                    </div>
              </motion.div> 
            </Link>
          </div>

          <div className='relative items-center grid grid-cols-2 md:grid-cols-2 gap-8'>
          <Link to='/ssl-striping'>
            <div className='w-auto'>
              <motion.div
                whileHover={{ scale: 1.07 }}  
                className='flex items-center gap-2 justify-center bg-gradient-to-tl from-gray-200 to-gray-500 px-4 py-1 rounded-full text-base text-white font-semibold'>
                  SSL Striping
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:shadow-md ">
                          <GiDaemonSkull className="text-bgFooter w-6 h-6" />
                        </div>
                </motion.div>
            </div>
            </Link>
            <Link to='/hsts-hijacking'>
              <motion.div
                whileHover={{ scale: 1.07 }} 
                className='flex text-base text-white font-semibold items-center gap-2 justify-center bg-gradient-to-tl from-gray-200 to-gray-500 px-4 py-1 rounded-full'>
                HSTS Hijacking
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:shadow-md ">
                        <GiCrownedSkull className="text-bgFooter w-6 h-6" />
                    </div>
              </motion.div>
            </Link>
          </div>
          <div className='flex text-center items-center justify-center'>
            <Link to='/detection-mitigation'>
            <motion.div
                whileHover={{ scale: 1.07 }} 
                className='flex text-base text-white font-semibold items-center gap-2 justify-center bg-gradient-to-tl from-gray-200 to-gray-500 px-4 py-1 rounded-full'>
                Détection/Mitigation
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:shadow-md ">
                        <FaShieldAlt className="text-lime-700 w-6 h-6" />
                    </div>
              </motion.div> 
            </Link>
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