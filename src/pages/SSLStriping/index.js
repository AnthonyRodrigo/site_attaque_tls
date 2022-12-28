import React from 'react'

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

            <div className='w-full h-auto mt-6 text-base'>
              <p class="indent-8">
                Dans cette partie nous allons analyser en détails la première version de l’attaque SSL Stripping, mise au point par M.Marlinspike [1].
              </p>
              <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
                Faiblesse exploitée
              </h3>
              <p class="indent-8">
                Cette attaque n’exploite pas à proprement parler une faiblesse dans SSL/TLS mais plus une faiblesse dans la mise en place d’une session HTTPS qui est dûe à l’utilisateur et au fait que certains sites webs ne supportent toujours pas HTTPS…
              </p>
              <p class="indent-8">
                En effet, comme le mentionne [2], l’utilisateur lambda ne tape jamais l’URL complet dans la barre de son navigateur (ex : https://www.amazon.fr/). Il se contente généralement de rentrer l’essentiel (ex : www.amazon.fr). Les navigateurs actuels sont assez intelligents pour effectuer une requête HTTP vers le domaine ciblé par l’URL (GET http://www.amazon.fr). Si ce dernier dispose des certificats SSL nécessaires et supporte HTTPS, il répond par un code d’état 301 et un en-tête avec l’URL en https (ici : https://www.amazon.fr) . Le navigateur du client peut alors effectuer la requête finale (ici : GET https://www.amazon.fr) pour établir la session HTTPS. Voici un schéma qui récapitule notre exemple : 
              </p>
              <img src="../../img/etablir_session.jpg" class="max-w-full h-auto"/>
              <div class="flex justify-center p-2">
                <p class="italic">Figure 1 - Etapes préalables à l'établissement d’une session HTTPS</p>
              </div>
              <p class="indent-8">
                La vulnérabilité exploitée dans cette attaque se situe donc dans l’interception de la réponse du serveur web indiquant une redirection permanente. En effet, pour une attaque par SSL Striping l’attaquant se place entre le client et le serveur en homme du milieu et c’est précisément lors de cette étape qu’il intervient comme nous allons le voir par la suite.
              </p>


              <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
                Types de MitM utilisés
              </h3>
              <p class="indent-8">
                Comme le mentionne [3], l’attaquant peut se placer de diverses façons en MitM. Les plus couramment utilisées sont la mise en place d’ARP poisoning. Pour rappel ceci consiste en l’empoisonnement du cache ARP (associant une IP à une MAC) de la cible pour détourner le trafic destiné à une adresse IP vers un appareil que l’on contrôle. Une autre méthode pouvant être utilisée consiste en la mise en place (ou la prise de contrôle) d’un proxy que le client devra utiliser comme relais pour accéder au web. Enfin, il est aussi fréquent de créer un hotspot wifi malveillant.
              </p>

              <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
                Déroulé de l'attaque
              </h3>
              <p class="indent-8">
                Dans cette sous-partie nous allons éluder volontairement les mécanismes de défense contrant cette attaque qui peuvent être mis en place sur les systèmes les plus récents. Nous y reviendrons dans une partie ultérieure. 
              </p>
              <p class="indent-8">
                Notez par ailleurs que cette partie s’appuie sur l’excellent exemple fourni par [3] et dont voici le schéma principal :
              </p>
              <img src="../../img/stripping_classique.jpg" class="max-w-full h-auto"/>
              <div class="flex justify-center p-2">
                <p class="italic">Figure 2 - Attaque SSL Stripping classique</p>
              </div>
              <p class="indent-8">
                En effet, dans cet exemple les auteurs de [1] prennent comme exemple une attaque s’appuyant sur de l’ARP spoofing. Ce type de MitM étant certainement le plus facile à mettre en place, nous conserverons cet exemple dans la suite de notre présentation. Dans cet exemple, l’attaquant établit entre lui-même et la victime une connexion HTTP alors que dans le même temps il établit une connexion HTTPS entre lui-même et le serveur ciblé. Pour réaliser cela, il relaie la requête HTTP initiale de la victime en se faisant passer pour cette dernière. Il établit alors la session HTTPS entre lui et le serveur. Par la suite, il fait croire à la victime que le serveur demandé ne peut lui proposer qu’une session HTTP.
              </p>

              <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
                Démonstration
              </h3>
              <p class="indent-8">
                Le chercheur ayant mis au point cette attaque a développé un outil permettant de l’automatiser (cf moxie0/sslstrip: A tool for exploiting Moxie Marlinspike's SSL "stripping" attack. (github.com)). Ci-dessous vous pouvez retrouver une excellente vidéo [4] présentant comment utiliser l’outil pour mettre en place l’attaque. Bien entendu tout ceci revêt un caractère pédagogique et nous ne pouvons être en aucun cas tenu responsable d’une utilisation malveillante. 
              </p>
              <div
                class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                style="padding-top: 56.25%"
              >
              <iframe
                class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                src="https://www.youtube.com/watch?v=5mPykrQ8bgc"
                allowfullscreen=""
                data-gtm-yt-inspected-2340190_699="true"
                id="240632615"
              ></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SSLStriping
