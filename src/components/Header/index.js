import React from 'react'
import {motion} from 'framer-motion'
import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'


const Header = props => {  
    const [isMenu, setIsMenu] = useState(false)

  return (
     <header className='fixed z-50 w-screen px-4  md:px-16 bg-primary'>
        {/* desktop & table*/}
        <motion.div 
        initial={{opacity : 0, y : 75}}
        animate={{opacity : 1, y : 0}}
        transition={{ duration: 1 }}
        className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to='/' className='flex items-center gap-2' onClick={() => setIsMenu(false)}>
                <img src={Logo} alt='logo' className=' w-20 object-cover'/>
                <p className='text-bgFooter text-xl font-bold'></p>
            </Link>

            <div className="flex items-center gap-8">
                <motion.ul 
                 className="flex items-center gap-8">
                    <Link to='/introduction'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => {
                    setIsMenu(false)
                    }}>Introduction</li>
                    </Link>
                    <Link to='/ssl-striping'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Attaque SSL Striping</li>
                    </Link>
                    <Link to='/hsts-hijacking'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Attaque HSTS Hijacking</li>
                    </Link>
                    <Link to='/detection-mitigation'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Détection/Mitigation</li>
                    </Link>
                </motion.ul>

                

            </div>
        </motion.div>
        {/* mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full'>

                
            <Link to='/' className='flex items-center justify-center px-6 gap-2' onClick={() => setIsMenu(false)}>
                <img src={Logo} alt='logo' className='w-20   object-cover'/>
            </Link>
            
            <div className = "relative items-center justify-center">
                    
                        <motion.div 
                        whileTap={{ scale: 0.6 }}
                        className = "relative flex items-center justify-center">
                            
                        <AiOutlineMenu                                 
                        className="w-20 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" 
                                alt="userprofile"
                                onClick={()=>setIsMenu(!isMenu)} />
                            
                        </motion.div>
                    {isMenu && (
                            <motion.div 
                                initial= {{ opacity: 0, scale: 0.6 }}
                                animate= {{ opacity: 1, scale: 1 }}
                                exit= {{ opacity: 0, scale: 0.6 }}
                                className="w-60 p-2 bg-gray-50 shadow rounded-lg flex flex-col absolute top-12 right-0">

                            <ul className="flex flex-col gap-2">
                                <Link to='/introduction'>
                                <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                                onClick={() => {
                                setIsMenu(false)
                                }}>Introduction</li>
                                </Link>
                                <Link to='/ssl-striping'>
                                <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                                onClick={() => setIsMenu(false)}>Attaque SSL Striping</li>
                                </Link>
                                <Link to='/hsts-hijacking'>
                                <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                                onClick={() => setIsMenu(false)}>Attaque HSTS Hijacking</li>
                                </Link>
                                <Link to='/detection-mitigation'>
                                <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                                onClick={() => setIsMenu(false)}>Détection/Mitigation</li>
                                </Link>
                             </ul>



                            </motion.div>
                         )
                    }   
                    
                </div>
        </div>
    </header>
  )
}


export default Header