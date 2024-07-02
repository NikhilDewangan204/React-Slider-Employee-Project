import React from "react";
import { MdEngineering } from "react-icons/md";
import { GiFlexibleLamp } from "react-icons/gi";


function Card(props){
    // Ek data k andar toh ek hi review aa skta h na
    let review =props.review;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image}/>
                <div className="w-[140px] h-[140px] bg-red-950 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
            </div>

            <div className="text-center mt-1.5">
                <p className="text-red-700 font-semibold uppercase text-sm">{review.job}</p>
            </div>

            <div className="mx-auto mt-5 text-4xl">
                <MdEngineering/>
            </div>

            <div className="text-center mt-4 text-slate-600">
                {review.text}
            </div>

            <div className="mx-auto mt-5 mb-5 text-2xl">
            <GiFlexibleLamp />
            </div>

           
        </div>
    )
}

export default Card;