import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const Introduction = props => {
  return (
    
    <section className='items-center justify-center  md:gap-8 flex flex-col h-auto'>
      <div
      className='w-full my-6 mt-15 md:mt-0'  >
          <div 
        className='w-full flex flex-col items-center justify-center' >
              <h1 className='text-2xl font-semibold capitalize text-bgFooter relative 
              before:absolute before:rounded-lg before:content before:w-16 before:h-1 
              before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out
              duration-100 mr-auto'>
                  Introduction
              </h1>

          <div className='w-full h-auto mt-6 text-base text-justify'>
            <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8">
              Les besoins en termes de sécurisation des échanges sur internet sont apparus dès ses débuts avec les premiers actes malveillants tels que la propagation du vers Samy en 2005. Ainsi les grands organismes de standardisation tels que l’IETF ont rapidement compris l’importance de proposer une sécurisation des protocoles fondant internet. C’est ainsi qu’est d’abord apparu SSL (Secure Sockets Layer) dont Netscape. SSL est une couche de sécurité qui se place au-dessus de certains protocoles tels que HTTP.  TLS (Transport Layer Security) est le successeur de SSL ayant été créé en 1999 par l’IETF.
            </motion.p>
            <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8">
              Aujourd’hui TLS (notamment la version 1.3) est utilisé par HTTPS afin d’assurer la confidentialité, l’intégrité et l’authentification de nombreux échanges de données. Ainsi d’après le site <a className='text-base underline hover:text-bgFooter' href="https://transparencyreport.google.com" target="_blank">transparencyreport.google.com</a>
              , c’est plus de 95% du trafic Google qui utilise HTTPS en date du 26/12/2022.
            </motion.p>
            <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8">
              Cependant, s’il est vrai que l’utilisation de HTTPS est bien plus sûre que l’utilisation de HTTP, certains anciens appareils ne le supportent pas ou bien certains sites webs de taille conséquente n’ont toujours pas effectué la migration de HTTP vers HTTPS. Il est donc nécessaire pour les systèmes d’informations s’appuyant sur internet de supporter le protocole HTTP de même que HTTPS.
            </motion.p>
            <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8">
              Cette présentation s’attachera ainsi à présenter une attaque ayant été mise au point en 2009 par le chercheur Moxie Marlinspike <Link to='/bibliographie' className='text-bgFooter font-semibold'>[1]</Link> consistant à réaliser une attaque par Man In the Middle (MitM) permettant de dégrader une session HTTPS en session HTTP. En effet, il est ainsi permet à l’attaquant de court-circuiter le chiffrement de la couche TLS pour lire directement les données en clair. Nous verrons par la suite que cette attaque comporte des variantes permettant de passer outre les sécurités mises en place sur les navigateurs suite à la découverte de M.Marlinspike. Dans une troisième partie nous étudierons des résultats attestant de la faisabilité de telles attaques sur les systèmes les plus récents. Enfin, nous présenterons quelques mécanismes limitant la portée d’une telle attaque.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction


