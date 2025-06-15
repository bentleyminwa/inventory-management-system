'use client';

import React, { useState } from 'react';

type StoreContextProps = {
    panelOpen: boolean;
    setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const StoreContext = React.createContext<StoreContextProps | null>(null);

function Provider({ children }: { children: React.ReactNode }) {
    const [panelOpen, setPanelOpen] = useState(true);

    return (
        <StoreContext.Provider value={{ panelOpen, setPanelOpen }}>
            {children}
        </StoreContext.Provider>
    );
}

export { Provider, StoreContext };
