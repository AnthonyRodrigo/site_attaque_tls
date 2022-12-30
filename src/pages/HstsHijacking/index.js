import React from 'react'
import F3 from '../../img/attaque_hsts.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'


const HstsHijacking = props => {
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
                  Attaque HSTS Hijacking
              </h1>

          <div className='w-full h-auto mt-6 text-base text-justify'>
            <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} class="indent-8">
              Dans cette partie nous allons voir une variante de l’attaque SSL Striping qui fonctionne malgré une sécurité mise en place sur les systèmes récents les HSTS (HTTP Strict Transport Security).
            </motion.p>
            <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   className='text-lg text-titleColor font-semibold mt-6 indent-5 underline'>
                  Qu’est ce que les HSTS ?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8 mt-4">
                  Les HSTS sont des données conservées en cache par les navigateurs webs permettant à ce dernier de savoir quels sont les sites à visiter avec HTTPS. Ces données sont générées du côté du serveur et sont reçues par le navigateur lors de la première connexion à un site en HTTPS (via les étapes vues précédemment). 
                  Un HSTS est envoyé dans un en-tête HTTP et a la forme suivante (exemple avec <a className='text-base underline hover:text-bgFooter' href="www.amazon.fr" target="_blank">www.amazon.fr</a>): <span className='font-semibold'>strict-transport-security: max-age=47474747; includeSubDomains;preload</span>. Ces données ont par exemple une durée de validité. 
                </motion.p>
            </div>

            <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   className='text-lg text-titleColor font-semibold mt-6 indent-5 underline'>
                  HSTS Preload List  
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                   class="indent-8 mt-4">
                Vous aurez sûrement remarqué le champ “preload” dans le HSTS précédent. Ce dernier signifie qu'Amazon a demandé à ce que son nom de domaine soit codé en dur dans les navigateurs. Ainsi chaque navigateur dispose d'une liste de noms de domaines pour lesquels la connexion ne se fait qu’en HTTPS et donc pour lesquels une attaque pour SSL Striping est à priori impossible. Vous noterez que précédemment nous nous sommes placés dans un cas de première connexion à un site web qui peut éventuellement utilisé les HSTS mais qui n’est certainement pas dans la preload list du navigateur
                </motion.p>
            </div>



            <div>

            <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                    HSTS Hijacking
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    Nous sommes en droit de nous demander, mais alors est-ce qu’une attaque par SSL Striping peut fonctionner face à ce genre de sécurité ? La réponse est oui et non ! En effet, l’attaque basique ne fonctionne pas mais (mal)heureusement il existe une variante qui contourne les HSTS. Cette nouvelle attaque nommée HSTS Hijacking nécessite un site web qui ne figure pas dans les preload list.  Sur ce dernier il est alors possible de faire du SSL Stripping classique pour intercepter la session d’un utilisateur. Le document <Link to='/bibliographie' className='text-bgFooter font-semibold'>[1]</Link> fournit encore une fois un excellent exemple avec le site stackoverflow qui comporte un lien vers twitter.com. L’attaquant profite du SSL Stripping vers stackoverflow pour intercepter l’ouverture de twitter.com et rediriger cette ouverture vers twiiter.com, un site contrefait. Cette attaque compte alors sur le fait que l’utilisateur ne sera pas assez attentif à l’URL différent de celui légitime. Ci-dessous vous pouvez retrouver un schéma synthétisant cette attaque et provenant de <Link to='/bibliographie' className='text-bgFooter font-semibold'>[1]</Link> : 
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className=' mt-6 flex  flex-col items-center text-center '>
                    <img src={F3} class="h-840 w-full lg:w-auto lg:h-550 rounded-3xl drop-shadow-lg backdrop-blur-md"/>      
                    <p class="italic mt-4">Figure 3 : Attaque HSTS Hijacking</p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HstsHijacking


