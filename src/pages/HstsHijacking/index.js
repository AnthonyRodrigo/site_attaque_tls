import React from 'react'

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

          <div className='w-full h-auto mt-6 text-base'>
            <p class="indent-8">
              Dans cette partie nous allons voir une variante de l’attaque SSL Striping qui fonctionne malgré une sécurité mise en place sur les systèmes récents les HSTS (HTTP Strict Transport Security).
            </p>
            <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
              Qu’est ce que les HSTS ?
            </h3>
            <p class="indent-8">
              Les HSTS sont des données conservées en cache par les navigateurs webs permettant à ce dernier de savoir quels sont les sites à visiter avec HTTPS. Ces données sont générées du côté du serveur et sont reçues par le navigateur lors de la première connexion à un site en HTTPS (via les étapes vues précédemment). Un HSTS est envoyé dans un en-tête HTTP et a la forme suivante (exemple avec www.amazon.fr): strict-transport-security: max-age=47474747; includeSubDomains;preload. Ces données ont par exemple une durée de validité. 
            </p>

            <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
              HSTS Preload List
            </h3>
            <p class="indent-8">
              Vous aurez sûrement remarqué le champ “preload” dans le HSTS précédent. Ce dernier signifie qu'Amazon a demandé à ce que son nom de domaine soit codé en dur dans les navigateurs. Ainsi chaque navigateur dispose d'une liste de noms de domaines pour lesquels la connexion ne se fait qu’en HTTPS et donc pour lesquels une attaque pour SSL Striping est à priori impossible. Vous noterez que précédemment nous nous sommes placés dans un cas de première connexion à un site web qui peut éventuellement utilisé les HSTS mais qui n’est certainement pas dans la preload list du navigateur
            </p>

            <h3 className='text-2xl font-semibold capitalize text-bgFooter relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0   before:bg-gradient-to-tr from-blue-200 to-bgFooter transition-all ease-in-out duration-100 mr-auto'>
              HSTS Hijacking
            </h3>
            <p class="indent-8">
              Nous sommes en droit de nous demander, mais alors est-ce qu’une attaque par SSL Striping peut fonctionner face à ce genre de sécurité ? La réponse est oui et non ! En effet, l’attaque basique ne fonctionne pas mais (mal)heureusement il existe une variante qui contourne les HSTS. Cette nouvelle attaque nommée HSTS Hijacking nécessite un site web qui ne figure pas dans les preload list.  Sur ce dernier il est alors possible de faire du SSL Stripping classique pour intercepter la session d’un utilisateur. Le document [1] fournit encore une fois un excellent exemple avec le site stackoverflow qui comporte un lien vers twitter.com. L’attaquant profite du SSL Stripping vers stackoverflow pour intercepter l’ouverture de twitter.com et rediriger cette ouverture vers twiiter.com, un site contrefait. Cette attaque compte alors sur le fait que l’utilisateur ne sera pas assez attentif à l’URL différent de celui légitime. Ci-dessous vous pouvez retrouver un schéma synthétisant cette attaque et provenant de [1] : 
            </p>
            <img src="../../img/attaque_hsts.jpg" class="max-w-full h-auto"/>
            <div class="flex justify-center p-2">
              <p class="italic">Figure 3 : Attaque HSTS Hijacking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HstsHijacking
