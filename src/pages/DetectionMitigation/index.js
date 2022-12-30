import React from 'react'
import { motion } from "framer-motion"

const DetectionMitigation = props => {
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
                  Detection & Contre-mesures
              </h1>

          <div className='w-full h-auto mt-6 text-base text-justify'>
            <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    Que ce soit pour l’attaque SSL Striping ou l’attaque HSTS Hijacking, les deux sont efficaces contre un grand nombre de navigateurs dans leurs versions récentes : Firefox, Chrome, Edge, Opera, Safari… En effet, ces navigateurs sont pour la plupart basés sur des dérivés de WebKit ou sur le moteur Gecko, et ces similitudes au niveau de leur fonctionnement interne induisent qu’ils partagent leur vulnérabilité à ces deux attaques. Les seules exceptions sont les deux dernières versions de Firefox testées (96.0 et 95.0.2) sur Windows et Ubuntu en mode incognito (ou navigation privée), et le navigateur Firefox Focus sur Android 10, où ces deux attaques ne fonctionnent pas. Ces attaques fonctionnent même dans le cas de navigateurs autres, comme celui intégré aux PS4, aux télévisions ‘smart’ Panasonic ou encore Samsung, donc sont aussi possibles sur des IoT. Il est important de noter que l’étude rapportant ces résultats est assez récente (Mars 2022).
                  </p>
                  <p class="indent-8">
                  Nous évoquerons dans cette partie des solutions pour mitiger l’impact de ces attaques qui ont été tentées et sont mises en place actuellement.
                  </p>
              </motion.div>

            <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                    Solutions basiques
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    HProxy est une solution de proxy du côté client qui permet de détecter les attaques de type MITM et SSL Striping. Ce proxy permet de vérifier que la réponse du serveur vient bien du site originel. Dans un cas où la réponse serait classifiée comme suspecte, le navigateur ne recevra pas la réponse. Ainsi, HProxy permet de détecter l’attaque sans pour autant protéger contre une attaque.
                  </p>
                  <p class="indent-8">
                  SSLock permet via l’aide d’un header HTTP de plus, nommé SSLock-Candidates, de stocker le nom de domaine. Le client va ensuite rediriger vers un domaine sécurisé à partir du domaine de base. C’est donc une solution valable pour bloquer l’attaque SSL Striping, qui n’est malheureusement applicable que dans Firefox à cause d’une librairie particulière.
                  </p>
                  <p class="indent-8">
                  HTTPSLock est une solution qui permet de vérifier la validité des certificats SSL, redirigeant dans un cas d'attaque vers une page d’erreur. Dans le cas de SSL Stripping, l’attaque est donc détectée, ce qui va donc provoquer un dénis de service, mais encore une fois, le problème n’est pas fondamentalement réglé. Cette solution n'est accessible que dans 70% des navigateurs.  
                  </p>
                  <p class="indent-8">
                  EV-SSL Certificate est une solution de détection qui permet de vérifier l'identité d'un site via une clé publique X.509. Dans le cas d’une attaque SSL Strip, l'affichage de EV-SSL ne va pas s’activer et l’utilisateur doit lui-même se rendre compte du problème. 
                  </p>
                </motion.div>
            </div>


            <div>
                <motion.h2 
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }} className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                    Solutions pratiques
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    Une fois ces solutions évoquées, on peut se demander quelle est la meilleure façon de se protéger de ces deux attaques. Le plus pratique est d’abord de configurer son navigateur correctement. Pour cela on peut commencer par activer le mode HTTPS-only qui permet de bloquer tout site ne disposant pas de mode sécurisé. On peut ensuite activer DNS Over HTTPS qui peut potentiellement permettre de bloquer le DNS spoofing.
                  </p>
                  <p class="indent-8">
                  Une fois le navigateur sécurisé, il est intéressant de chiffrer ou d'offusquer les communications, en utilisant un VPN, le navigateur Tor, ou I2P par exemple. Il est également plus sécurisé de passer sur IPv6, qui permet de ne pas utiliser de requêtes ARP mais NDP, disposant d’une extension nommée Secure Neighbour Discovery (SEND). Le problème de cette dernière solution réside dans le fait que SEND et IPsec sont complexes à configurer et difficiles à utiliser.  
                  </p>
                  <p class="indent-8">
                  En plus de tout cela, l’utilisation de HTTP/3 avec le protocole QUIC permet des connexions quasiment entièrement sécurisées et limite très fortement les attaques MITM. De plus, ce protocole bloque entièrement HSTS hijack.  
                  </p>
                </motion.div>
            </div>


            <div>
              <motion.h2 
                initial={{ opacity: 0, x: '100px' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }} className='text-lg mt-6 text-titleColor font-semibold indent-5 underline'>
                  Solutions logiques
              </motion.h2>
              <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                    <p class="indent-8 mt-4">
                    Il est possible de mitiger ces attaques via des solutions relativement simples et logiques telles que:
                  </p>
                  <p class="indent-16">
                  <ul class="space-y-4">
                    <li class="flex items-center">
                      - le fait de créer beaucoup de domaines mal écrit, ce qui réduit la plage de domaine exploitable par un attaquant. 
                    </li>
                    <li class="flex items-center">
                      - vérifier que le site utilise HTTPS et l’apparence de celui-ci
                    </li>
                    <li class="flex items-center">
                      - éviter les réseaux publics pour limiter les MITM
                    </li>
                    <li class="flex items-center">
                      - noter les sites sécurisés
                    </li>
                    <li class="flex items-center">
                      - être vigilant, des liens, des connections, de tout ! La règle d’or en cybersécurité.
                    </li>
                  </ul>
                </p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetectionMitigation
