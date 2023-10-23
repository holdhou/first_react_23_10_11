import { useState } from "react";

export const EventEx=()=>{
    const [num,setNum] = useState(0);

  /*   const plusHandler=()=>{
        setNum(num+1);
    };

    const minusGandler=()=>{
        setNum(num-1);
    } */

    /* let num =0;

    const plusHandler=()=>{
        num++;
        console.log(num);
    }; */


    return (
    <div>
        <h3>클릭할때 숫자 증감</h3>
        <h3>{num}</h3>

        {/* <button onClick={plusHandler}>+</button>
        <button>-</button> */}

        {/* <button onClick={plusHandler}>+</button>
        <button onClick={minusGandler}>-</button> */}

        <button onClick={()=> setNum(num+1)}>+</button>
        <button onClick={()=> setNum(num-1)}>-</button>
    </div>
    );
};