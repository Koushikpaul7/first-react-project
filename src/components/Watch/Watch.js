import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Display from '../Display/Display';

const Watch = () => {
    const [steps,setSteps]=useState(0)
const increaseSteps=()=>{
    const newSteps=steps+1;
    setSteps(newSteps);
}
useEffect(()=>{

},[steps])

    return (
        <div>
            <h2>This is My watch!</h2>
            <h3>My cuurrent steps:{steps}</h3>
            <button onClick={increaseSteps}>Doura beta!!!!!</button>
            <Display name="garmin" steps={steps}></Display>
            
        </div>
    );
};

export default Watch;