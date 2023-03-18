import React from 'react'
import heroImage from "../assets/heroImage.jpg";
import {TbArrowBigRightLinesFilled} from "react-icons/tb"
import {Link} from "react-scroll"

export default function Home() {
  return (//on importe le text de div1 ON change le fond et div2 lecriture au centre la photo o centre et l'imag a gauche
    <div name="home" className='py-6 h-screen w-full bg-gradient-to-b from-lime-300 to-orange-400 via-amber-400 text-orange-900'>
        <div className=' max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'> 
              <div className=' flex flex-col justify-center h-full'> 
                <h2 className='text-4xl sm:text-6xl font-bold '> Je suis devellopeur fulstack F-E junior </h2>
                    <p className=' text-lime-800 py-4 max-w-md font-bold '>J'ai 26ans et je suis actuelement en licence proffessionnelle surtout j'adore la programmation informatique le developpement des site internet la conception des base de données.
                        informatique bla bla bla J'ai 26ans et je suis actuelement en licence proffessionnelle
                       j'aime les thechnologies informatique ,react,tailwind,googlefont,css,htm,mysql,...
                    </p>
            <div>
                <Link to='portfolio' smooth duration={500}
                 className=' shadow-md text-4xl text-orange-900 via-black  font-bold w-fit px-28 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-green-900 to-red-600 cursor-pointer'>
                 Portfolio
                 <span className='hover:rotate-90 duration-300'><TbArrowBigRightLinesFilled size={40} className=' ml-4'/></span>
                </Link>
            </div>
        </div> 
           <div>    
                <img src={heroImage} alt="Mon profile" className='shadow-md hover:scale-105 duration-300 rounded-2xl mx-auto w-1/3 md:w-full'/>
            </div>
       </div>
    </div>
  )
}