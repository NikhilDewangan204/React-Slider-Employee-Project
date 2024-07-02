import React from "react"; 
import Card from "./Card";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdSkipBackward } from "react-icons/io";
import { useState } from "react";


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex]=useState(0);


    function leftShiftHandler(){
        if(index-1<0){setIndex(reviews.length-1);}
        else{
            setIndex(index-1);
        }
    }


    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{setIndex(index+1);}
    }


    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()* reviews.length);
        setIndex(randomIndex);
    }


    return(
        <div className="w-[85vw] md:w-[700px] bg-red-100 flex flex-col justify-center items-center mt-10 p-10 transition-all duration-600 hover:shadow-gray-400 shadow-lg rounded-md">
            <Card review = {reviews[index]}></Card>
            <div>
                <button onClick={leftShiftHandler} className="mr-3">
                <IoMdSkipBackward />
                </button>
                <button onClick={rightShiftHandler}  className="ml-5">
                <IoMdSkipForward />
                </button>
            </div>

            <div onClick={surpriseHandler}  className=" mt-4 ">
                <button className="bg-red-400 border-[2px] border-red-500 px-4 py-2 rounded text-white font-bold hover:bg-red-500 transition-all duration-200 cursor-pointer">Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials;