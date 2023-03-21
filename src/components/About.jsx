import React from "react";
import {SiProbot} from "react-icons/si"

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b  from-orange-200  to-lime-300 font-bold via-amber-400"
    >
      <div className="mg-2 m-2 max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
          <p className="text-4xl  font-bold flex flex-col"><SiProbot size={100} className="pb-3 from-red-400  to-black"/>
          </p>
         <p className="text-xl mt-2 container">
         <span className=" font-bold underline">Apropos de moi :</span>Mon nom est Dialllo alpha ousmane je suis guinéen et j'ai 26ans.<br/>Je suis diplomé en licence MIAGE a l'université de Labé ( GUINEE CONAKRY).
          Actuelement je suis inscrit en licence
                      proffessionnelle informatique a l'école superieur de SUPEMIR à Casablanca .Jai beaucoup de passion pour la programmation
                       informatique ,le developpement des site internet ,
                       la conception des base de données....
                      Mes languages favorites sont: JS - C - Mysql - Oracle -Bash - PHP - HTML  ...   
         </p>
      </div>
    </div>
  );
};

export default About;
