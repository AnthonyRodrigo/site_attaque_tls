import React from 'react'
import { motion } from "framer-motion";

const Bibliographie = props => {
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
                  Bibliographie
              </h1>

          <div className='w-full h-auto mt-6 text-base text-justify'>
            
          <motion.div 
                  initial={{ opacity: 0, x: '-100px' }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className='flex flex-col justify-center gap-6 '>
                  <p class="indent-8 mt-4">
                  <span className='text-bgFooter font-semibold'>[1]</span> Vyron Kampourakis, Georgios Kambourakis, Efstratios Chatzoglou, and Christos Zaroliagis Network Security 2022 2022:3. Revisiting man-in-the-middle attacks against HTTPS | Network Security (magonlinelibrary.com)
                  </p>
                  <p class="indent-8">
                  <span className='text-bgFooter font-semibold'>[2]</span> The most recent SSL security attacks: origins, implementation, evaluation, and suggested countermeasures (wiley.com). El-Hajj, Wassim. "The Most Recent SSL Security Attacks: Origins, Implementation, Evaluation, and Suggested Countermeasures." Security and Communication Networks 5.1 (2012): 113-24. Web.
                  </p>
                  <p class="indent-8">
                  <span className='text-bgFooter font-semibold'>[3]</span> Borislav K. (2022, April 25).What Is an SSL Stripping Attack and How to Prevent It. crashtest-security. <a className='text-base underline hover:text-bgFooter' href="https://crashtest-security.com/ssl-stripping-attack/" target="_blank">https://crashtest-security.com/ssl-stripping-attack/</a> 
                  </p>
                  <p class="indent-8">
                  <span className='text-bgFooter font-semibold'>[4]</span> Leune Kees. “SSL Strip Demo” Youtube, uploaded by Kees Leune, 13 Apr. 2019, https://youtu.be/5mPykrQ8bgc
                  </p>
                  <p class="indent-8">
                  <span className='text-bgFooter font-semibold'>[5]</span> Nve, Leonardo. “OFFENSIVE: Exploiting DNS Servers Changes by Leonardo Nve” YouTube, uploaded by Black Hat, 13 Apr. 2019, <a className='text-base underline hover:text-bgFooter' href="https://youtu.be/Q3siIqS9LVA?t=2770" target="_blank">https://youtu.be/Q3siIqS9LVA?t=2770</a>. <a className='text-base underline hover:text-bgFooter' href="https://youtu.be/Q3siIqS9LVA?t=2795" target="_blank">https://youtu.be/Q3siIqS9LVA?t=2795</a> 
                  </p>
                  <p class="indent-8">
                  <span className='text-bgFooter font-semibold'>[6]</span> Mitigations (2012)
                    Simple and Lightweight HTTPS Enforcement to Protect against SSL Striping Attack | IEEE Conference Publication | IEEE Xplore (univ-toulouse.fr)
                    Puangpronpitag, S., and N. Sriwiboon. "Simple and Lightweight HTTPS Enforcement to Protect against SSL Striping Attack." 2012 Fourth International Conference on Computational Intelligence, Communication Systems and Networks (2012): 229-34. Web.
                  </p>
                </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Bibliographie
