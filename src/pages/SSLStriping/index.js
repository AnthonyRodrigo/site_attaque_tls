import React from 'react'
import F1 from '../../img/etablir_session.jpg'
import F2 from '../../img/stripping_classique.jpg'
import { motion } from "framer-motion";
import {BsYoutube} from "react-icons/bs"
import { Link } from 'react-router-dom'


const SSLStriping = props => {
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
                  Attaque SSL Striping
              </h1>

            <div className='w-full h-auto mt-6 text-base text-justify'>
              <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} class="indent-8">
                Dans cette partie nous allons analyser en détails la première version de l’attaque SSL Stripping, mise au point par M.Marlinspike <Link to='/bibliographie' className='text-bgFooter font-semibold'>[1]</Link>.
              </motion.p>
              <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                    Faiblesse exploitée
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    Cette attaque n’exploite pas à proprement parler une faiblesse dans SSL/TLS mais plus une faiblesse dans la mise en place d’une session HTTPS qui est dûe à l’utilisateur et au fait que certains sites webs ne supportent toujours pas HTTPS…
                  </p>
                  <p class="indent-8">
                    En effet, comme le mentionne <Link to='/bibliographie' className='text-bgFooter font-semibold'>[2]</Link>, l’utilisateur lambda ne tape jamais l’URL complet dans la barre de son navigateur (ex : <a className='text-base underline hover:text-bgFooter' href="https://www.amazon.fr/" target="_blank">https://www.amazon.fr/</a> ). Il se contente généralement de rentrer l’essentiel (ex : <a className='text-base underline hover:text-bgFooter' href="www.amazon.fr" target="_blank">www.amazon.fr</a>). Les navigateurs actuels sont assez intelligents pour effectuer une requête HTTP vers le domaine ciblé par l’URL 
                    (GET <a className='text-base underline hover:text-bgFooter' href="http://www.amazon.fr" target="_blank">http://www.amazon.fr</a>). 
                    Si ce dernier dispose des certificats SSL nécessaires et supporte HTTPS, il répond par un code d’état 301 et un en-tête avec l’URL en https 
                    (ici : <a className='text-base underline hover:text-bgFooter' href="https://www.amazon.fr" target="_blank">https://www.amazon.fr</a>). 
                    Le navigateur du client peut alors effectuer la requête finale (ici : GET <a className='text-base underline hover:text-bgFooter' href="https://www.amazon.fr" target="_blank">https://www.amazon.fr</a>) pour établir la session HTTPS. Voici un schéma qui récapitule notre exemple : 
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className=' mt-6 flex  flex-col items-center text-center '>

                    <img src={F1} class="h-840 w-full lg:w-auto lg:h-550 rounded-3xl drop-shadow-lg backdrop-blur-md"/>
                          
                    <p class="italic mt-4">Figure 1 - Etapes préalables à l'établissement d’une session HTTPS</p>
                </motion.div>
              
              <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} class="indent-8 mt-2">
                  La vulnérabilité exploitée dans cette attaque se situe donc dans l’interception de la réponse du serveur web indiquant une redirection permanente. En effet, pour une attaque par SSL Striping l’attaquant se place entre le client et le serveur en homme du milieu et c’est précisément lors de cette étape qu’il intervient comme nous allons le voir par la suite.
              </motion.p>


              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   className='text-lg text-titleColor font-semibold mt-6 indent-5 underline'>
                  Types de MitM utilisés
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8 mt-4">
                Comme le mentionne <Link to='/bibliographie' className='text-bgFooter font-semibold'>[3]</Link>, l’attaquant peut se placer de diverses façons en MitM. Les plus couramment utilisées sont la mise en place d’ARP poisoning. Pour rappel ceci consiste en l’empoisonnement du cache ARP (associant une IP à une MAC) de la cible pour détourner le trafic destiné à une adresse IP vers un appareil que l’on contrôle. Une autre méthode pouvant être utilisée consiste en la mise en place (ou la prise de contrôle) d’un proxy que le client devra utiliser comme relais pour accéder au web. Enfin, il est aussi fréquent de créer un hotspot wifi malveillant.
                </motion.p>
              </div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                Déroulé de l'attaque
                </motion.h2>


                <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    Dans cette sous-partie nous allons éluder volontairement les mécanismes de défense contrant cette attaque qui peuvent être mis en place sur les systèmes les plus récents. Nous y reviendrons dans une partie ultérieure. 
                  </p>
                  <p class="indent-8">
                  Notez par ailleurs que cette partie s’appuie sur l’excellent exemple fourni par <Link to='/bibliographie' className='text-bgFooter font-semibold'>[3]</Link> et dont voici le schéma principal :
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className=' mt-6 flex  flex-col items-center text-center '>

                    <img src={F2} class="h-840 w-full lg:w-auto lg:h-550 rounded-3xl drop-shadow-lg backdrop-blur-md"/>
                          
                    <p class="italic mt-4">Figure 2 - Attaque SSL Stripping classique</p>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} class="indent-8 mt-2">
                En effet, dans cet exemple les auteurs de <Link to='/bibliographie' className='text-bgFooter font-semibold'>[1]</Link> prennent comme exemple une attaque s’appuyant sur de l’ARP spoofing. Ce type de MitM étant certainement le plus facile à mettre en place, nous conserverons cet exemple dans la suite de notre présentation. Dans cet exemple, l’attaquant établit entre lui-même et la victime une connexion HTTP alors que dans le même temps il établit une connexion HTTPS entre lui-même et le serveur ciblé. Pour réaliser cela, il relaie la requête HTTP initiale de la victime en se faisant passer pour cette dernière. Il établit alors la session HTTPS entre lui et le serveur. Par la suite, il fait croire à la victime que le serveur demandé ne peut lui proposer qu’une session HTTP.
                </motion.p>
              </div>
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                Démonstration
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1 , x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8 mt-4">
                Le chercheur ayant mis au point cette attaque a développé un outil permettant de l’automatiser
                 (cf <a className='text-base underline hover:text-bgFooter' href="https://github.com/moxie0/sslstrip" target="_blank"> moxie0/sslstrip: A tool for exploiting Moxie Marlinspike's SSL "stripping" attack. (github.com)</a>). 
                 Ci-dessous vous pouvez retrouver une excellente vidéo <Link to='/bibliographie' className='text-bgFooter font-semibold'>[4]</Link> présentant comment utiliser l’outil pour mettre en place l’attaque. Bien entendu tout ceci revêt un caractère pédagogique et nous ne pouvons être en aucun cas tenu responsable d’une utilisation malveillante. 
                </motion.p>
              </div>

              <div className='flex justify-center items-center '>
                <motion.div
                    initial={{ opacity: 0, x: '100px' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className='mt-6 group bg-card max-w-[360px] h-16 rounded-lg drop-shadow-lg 
                  flex items-center text-center justify-center hover:bg-colorGris duration-150 transition-all 
                  ease-in-out'>
                      <div className='ml-4 py-3 px-3  w-10 h-10 rounded-full bg-bgFooter group-hover:bg-white flex items-center justify-center'>
                          <BsYoutube
                              className='text-card text-white group-hover:text-bgFooter text-lg '
                          />
                      </div>
                      <motion.div 
                      whileTap={{scale:0.9}}
                      className='w-full p-3'>
                        <a className='items-center justify-center text-base underline font-semibold hover:text-bgFooter' href="https://www.youtube.com/watch?v=5mPykrQ8bgc" target="_blank"> (1288) SSL Strip Demo - YouTube</a>

                      </motion.div>
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SSLStriping
