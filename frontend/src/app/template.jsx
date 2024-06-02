'use client';
import React from 'react'
import { CompanyProvider } from './Context/CompanyContext';

const Template = ({ children }) => {
    return (
        <CompanyProvider>
            {children}
        </CompanyProvider>
    )
}

export default Template;