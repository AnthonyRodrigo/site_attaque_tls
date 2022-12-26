import React from 'react'

import {motion} from 'framer-motion'

import { useHistory, useParams } from 'react-router-dom';

import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

import {FaUserAlt} from 'react-icons/fa'
import { useState } from 'react'


const Header = props => {
    const history = useHistory();

    const handleSection = (e) => {
        const nextSection = e;
        history.push(`/${nextSection}`);
        window.scrollTo({
            top: 130,
            behavior: 'smooth'
        })
      };


    const scrollSection = (idSection) =>
    window.scrollTo({
        top: document.getElementById(idSection).offsetTop -130,
        behavior: 'smooth'
    })
  
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
                    
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => {
                    setIsMenu(false)
                    handleSection("introduction")
                    }}>Introduction</li>
                    
                    <Link to='/apropos'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Attaque SSL Striping</li>
                    </Link>
                    <Link to='/contacter'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Attaque HSTS Hijacking</li>
                    </Link>
                    <Link to='/contacter'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Aujourd’hui</li>
                    </Link>
                    <Link to='/contacter'>
                    <li className='text-base text-bgFooter hover:text-bgFooterLow duration-100 transition-all ease-in-out cursor-pointer'
                    onClick={() => setIsMenu(false)}>Détection/Mitigation</li>
                    </Link>
                </motion.ul>

                

            </div>
        </motion.div>
        {/* mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full'>

                
            <Link to='/' className='flex items-center justify-center px-6 gap-2' onClick={() => setIsMenu(false)}>
                <img src={Logo} alt='logo' className='w-20  min-h-[40px] min-w-[150px] object-cover'/>
            </Link>
            
            <div className = "relative items-center justify-center">
                    
                        <div className = "relative flex items-center justify-center">
                            
                            <motion.img 
                                whileTap={{ scale: 0.6 }}
                                src={Logo} 
                                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" 
                                alt="userprofile"
                                onClick={()=>setIsMenu(!isMenu)}/>
                            
                        </div>
                    {isMenu && (
                            <motion.div 
                                initial= {{ opacity: 0, scale: 0.6 }}
                                animate= {{ opacity: 1, scale: 1 }}
                                exit= {{ opacity: 0, scale: 0.6 }}
                                className="w-40 bg-gray-50 shadow rounded-lg flex flex-col absolute top-12 right-0">

                            <ul 
                            className="flex flex-col">
                                <Link to='/'>
                                <li className='text-base text-bgFooter  duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                onClick={() => {
                                    setIsMenu(false)
                                    scrollSection("accueil")
                                    }}>Accueil</li>
                                </Link>
                                <Link to='/search'>
                                <li className='text-base text-bgFooter  duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                onClick={() => {
                                    setIsMenu(false)
                                    }}>Produits</li>
                                </Link>
                                <Link to='/apropos'>
                                <li className='text-base text-bgFooter  duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                onClick={() => setIsMenu(false)}>A propos</li>
                                </Link>
                                <Link to='/contacter'>
                                <li className='text-base text-bgFooter  duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2'
                                onClick={() => setIsMenu(false)}>Contacter</li>
                                </Link>
                            </ul>

                            <Link to='/dashboard'>
                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-bgFooter text-base" > <FaUserAlt/>Mon compte </p>
                            </Link>

                            </motion.div>
                         )
                    }   
                    
                </div>
        </div>
    </header>
  )
}


export default Header