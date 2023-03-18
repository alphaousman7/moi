import React, { useState } from 'react'
import {Link} from "react-scroll"
import { FaBars, FaTimes} from "react-icons/fa"
import {GiBurningPassion} from "react-icons/gi"


export default function NavBar() {
    const[nav,setNav]=useState(false)
const links=[//on a le tableau de nos 5 liens
    {
    id: 1,
    link: 'home'
    },
    {
    id: 2,
    link: 'about'//apropos de moi je parle d'info ici mon lien vers
    },
    {
    id: 3,
    link: 'portfolio'//mon lien
    },
    {
    id: 4,
    link: 'experience'//lien qui renferme mes expriences
    },
    {
    id: 5,
    link: 'contact'//le lien vers mon contact
    },
    {
      id: 6,
      link: 'vide'//le lien vers mon contact
      },

]
  return (//la bar de nav
    <div className='flex justify-between items-center w-full h-20 px-5 text-yellow-50 bg-blue-600 fixed'>
        <div className=' flex'>
            <h1 className=' text-black font-bold hover:scale-105 duration-200 text-5xl font-signature ml-1'>Alpha ousmane</h1>
           <GiBurningPassion size={60}  className=' text-black'/> 
       </div>

        <ul className=' hidden md:flex'>
            {links.map(link=> (//parcour le tableau et les ttribue les id e vleu il affiche 5fois
            //donc on key={} dans la balise li sino sa ne marchera pas on met dans {} le mon au singulier du tableau poin id 
            <li key={link.id} className='px-3 cursor-pointer capitalize font-bold text-black-900 hover:scale-150 duration-200'>
               <Link to={link.link} smooth duration={300}>{link.link}</Link>
            </li>//enfin dans la balise <LI> ONmet link.link
            ))//ou encor avec es6 link.map(({id,link})=>{<li key={id}>{link}</li> et cest fais
            }
         
        </ul>

        <div onClick={() =>setNav(!nav)//on a programé le tire par x on essaille enplus de mattre les element de dans si on ouvre avec les telephone
        } className=' md:hidden cursor-pointer pr-2 z-10 shadow-md text-black'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>
        {nav && (//si cest activer sur trux le boutoon droit o coin sa affiche l'image du petit ecrant
         <lu className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-600 via-blue text-white to-green-600'>
        {links.map(({id,link})=> (//donc o cas ou on diminue lecrant les ecriture s'afficheron au centre
            
            <li key={id} className='shadow-md px-4 py-6 text-4xl cursor-pointer capitalize font-medium hover:scale-150 duration-200'>
              <Link
               onClick={() =>setNav(!nav)}
               to={link} 
               smooth
                duration={500}
              >
                {link}
              </Link>  
            </li>

            ))}
        </lu>
        )}
       
    </div>
  )
}
