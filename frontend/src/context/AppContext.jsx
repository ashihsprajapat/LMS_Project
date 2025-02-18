
import React from 'react'
import { createContext } from 'react'


const AppContext = createContext();

export const AppContextProvider = ( {children} ) => {

    const value={

    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )

}
