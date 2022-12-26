import {React,useState} from 'react'
import {MdChevronRight} from 'react-icons/md'
import { motion } from "framer-motion";
import {BsFacebook, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = props => {

  return (
    <section>
        <div className='p-10   bg-gradient-to-bl from-colorGris to-colorGris text-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div className='mb-5'>
                        <h4 className='text-2xl font-semibold capitalize text-bgFooter relative 
                            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
                            before:-bottom-2 before:left-0 before:bg-gradient-to-tl from-blue-200 to-bgFooter transition-all ease-in-out
                            duration-100'>Nous contacter</h4>
                        <ul className='text-white text-base py-6'>
                            <li className='pb-6 flex items-center'><FaMapMarkerAlt className='mr-2 text-2xl'/>N7 et ENAC</li>
                            <li className='pb-4 flex items-center'><a className='flex' href="tom.heurtebise@etu.inp-n7.fr"><GrMail  className='mr-3 text-2xl cursor-pointer'/>tom.heurtebise@etu.inp-n7.fr</a></li> 
                            <li className='pb-4 flex items-center'><a className='flex' href="anthony.rodrigo@etu.inp-n7.f"><GrMail  className='mr-3 text-2xl cursor-pointer'/>anthony.rodrigo@etu.inp-n7.fr</a></li> 
                            <li className='pb-4 flex items-center'><a className='flex' href="louis.lolive@etu.inp-n7.fr"><GrMail  className='mr-3 text-2xl cursor-pointer'/>louis.lolive@etu.inp-n7.fr</a></li> 
                            <li className='pb-4 flex items-center'><a className='flex' href="jules.boyer@etu.inp-n7.fr"><GrMail  className='mr-3 text-2xl cursor-pointer'/>jules.boyer@etu.inp-n7.fr</a></li> 
                            <li className='pb-4 flex items-center'><a className='flex' href="remy.bonrepaux@etu.inp-n7.fr"><GrMail  className='mr-3 text-2xl cursor-pointer'/>remy.bonrepaux@etu.inp-n7.fr</a></li> 
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-2xl font-semibold capitalize text-bgFooter relative 
                            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
                            before:-bottom-2 before:left-0 before:bg-gradient-to-tl from-blue-200 to-bgFooter transition-all ease-in-out
                            duration-100'>Navigation</h4>
                        <ul className='text-white text-base py-6'>
                        <Link to='/search'>
                            <motion.li whileHover={{ scale: 1.05 }} className='pb-4 hover:text-bgFooter duration-100 transition-all ease-in-out cursor-pointer flex items-center'><MdChevronRight/>Introduction</motion.li>
                        </Link>    
                        <Link to='/droits'>
                            <motion.li whileHover={{ scale: 1.05 }} className='pb-4 hover:text-bgFooter duration-100 transition-all ease-in-out cursor-pointer flex items-center'><MdChevronRight/>Attaque SSL Striping</motion.li>
                        </Link>
                        <Link to='/politique-de-confidentialite'>
                            <motion.li whileHover={{ scale: 1.05 }} className='pb-4 hover:text-bgFooter duration-100 transition-all ease-in-out cursor-pointer flex items-center'><MdChevronRight/>Attaque HSTS Hijacking</motion.li>
                        </Link>    
                        <Link to='/contacter'>  
                            <motion.li whileHover={{ scale: 1.05 }} className='pb-4 hover:text-bgFooter duration-100 transition-all ease-in-out cursor-pointer flex items-center'><MdChevronRight/>Portée de l’attaque aujourd’hui </motion.li>
                            </Link>
                        <Link to='/apropos'>
                            <motion.li whileHover={{ scale: 1.05 }} className='pb-4 hover:text-bgFooter duration-100 transition-all ease-in-out cursor-pointer flex items-center'><MdChevronRight/>Détection/Mitigation</motion.li>
                            </Link> 
                            <Link to='/apropos'>
                            <motion.li whileHover={{ scale: 1.05 }} className='pb-4 hover:text-bgFooter duration-100 transition-all ease-in-out cursor-pointer flex items-center'><MdChevronRight/>Bibliographie</motion.li>
                            </Link> 
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-2xl font-semibold capitalize text-bgFooter relative 
                            before:absolute before:rounded-lg before:content before:w-20 before:h-1 
                            before:-bottom-2 before:left-0 before:bg-gradient-to-tl from-blue-200 to-bgFooter transition-all ease-in-out
                            duration-100'>Notre équipe</h4>
                        <ul className='text-white text-base py-6'>
                            <li className='pb-6 flex items-center'><a className='text-base ml-1 sm:ml-2 flex text-white font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/anthony-rodrigo/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Rémy Bonrepaux</a></li>
                            <li className='pb-6 flex items-center'><a className='text-base ml-1 sm:ml-2 flex text-white font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/anthony-rodrigo/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Louis Lolive</a></li>
                            <li className='pb-6 flex items-center'><a className='text-base ml-1 sm:ml-2 flex text-white font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/anthony-rodrigo/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Tom Heurtebise</a></li>
                            <li className='pb-6 flex items-center'><a className='text-base ml-1 sm:ml-2 flex text-white font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/anthony-rodrigo/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Jules Boyer</a></li>
                            <li className='pb-6 flex items-center'><a className='text-base ml-1 sm:ml-2 flex text-white font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/anthony-rodrigo/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Anthony Rodrigo</a></li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className='w-full bg-bgFooter text-gray-200 px-10'>
            <div className='md:ml-12 max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
                <div className='text-center'>
                    <div>
                        © <a className='font-semibold' href="/">Attaque TLS</a>, <a className='cursor-pointer ' href="">Tous droits réservés, 2022.</a>
                    </div>
                </div>
                <div className='text-center text-xl text-white mb-2 mt-3 md:mr-12'>
                    <a href="" target="_blank" className='w-10 h-10 rounded-full bg-white hover:bg-colorGris  inline-block items-center justify-center cursor-pointer hover:shadow-md mx-3 ' > <BsGithub className='ml-2.5 text-bgFooter mt-2.5'/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer