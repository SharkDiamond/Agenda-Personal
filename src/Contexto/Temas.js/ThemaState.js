import React from 'react'
import themas from './ContextThema';
import { useState } from 'react';

export default function ThemaState(props) {

    const [tema,setTema]=useState("bg-primary text-white");

    return (
        <themas.Provider value={{tema,setTema}}>
            {props.children}
        </themas.Provider>
    )
}

