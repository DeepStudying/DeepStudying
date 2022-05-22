import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext()

export function DeepProvider(props){
    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}