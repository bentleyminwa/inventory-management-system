import React from 'react';
import { StoreContext } from '../context/store';

export function useStore() {
    const context = React.useContext(StoreContext);

    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }

    return context;
}
