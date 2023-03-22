import React from 'react'
import heroImage from "../assets/heroImage.jpg";
import {TbArrowBigRightLinesFilled} from "react-icons/tb"
import {Link} from "react-scroll"
import Animation2 from './Animation2';

export default function Home() {
  return (//on importe le text de div1 ON change le fond et div2 lecriture au centre la photo o centre et l'imag a gauche
    <div name="home" className='py-6 h-screen w-full bg-gradient-to-b from-lime-300 to-orange-400 via-amber-400 text-orange-900'>
      
        <div className=' max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-2  md:flex-row'> 
              <div className=' flex flex-col justify-center h-full'> 
             
                <h2 className='text-4xl sm:text-4xl font-bold '> Devellopeur Front End </h2>
                 <Animation2/>    <p className= 'py-4 max-w-md   text-lime-800 font-bold '>
                     Mon nom est Dialllo alpha ousmane je suis guinéen et j'ai 26ans.<br/> A actuelement en licence 
                      proffessionnelle informatique a l'école superieur de SUPEMIR à Casablanca .Jai beaucoup de passion pour la programmation
                       informatique ,le developpement des site internet ,
                       la conception des base de données....
                    </p>
            <div>
                <Link to='works' smooth duration={500}
                 className=' shadow-md text-4xl text-orange-900 via-black  font-bold w-fit px-28 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-green-900 to-red-600 cursor-pointer'>
                 Informations
                 <span className='hover:rotate-90 duration-300'><TbArrowBigRightLinesFilled size={40} className=' ml-4'/></span>
                </Link>
            </div>
        </div> 
           <div>    
                <img src={heroImage} alt="Mon profile" 
                className='shadow-md p-4 hover:scale-x-30 scal duration-300 rounded-4xl mx-auto w-2/3 md:w-full'/>
           
            </div>
       </div>
    </div>
  )
}
