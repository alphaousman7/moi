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
         <span className=" font-bold underline">Apropos de moi :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          recusandae rerum laborum perferendis molestiae
         </p>
         <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
         </p>
      </div>
    </div>
  );
};

export default About;
