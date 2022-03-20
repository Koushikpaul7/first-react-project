import React from 'react';
import Devicedetails from '../DeviceDetail/Devicedetails';

const Device = (props) => {
    return (
        <div>
            <h1>I have:   {props.name}</h1>
            <Devicedetails price={props.price}></Devicedetails>
        </div>
    );
};

export default Device;