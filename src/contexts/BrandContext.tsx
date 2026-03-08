import React, { createContext, useContext, useState, useEffect } from 'react';

export type BrandConfig = {
    primaryColor: string;
    logoUrl: string | null;
    clinicName: string;
};

const defaultBrand: BrandConfig = {
    primaryColor: '#2563eb', // Default Tailwind blue-600
    logoUrl: null,
    clinicName: 'Clínica Padrão',
};

type BrandContextType = {
    brand: BrandConfig;
    updateBrand: (newBrand: Partial<BrandConfig>) => void;
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
    const [brand, setBrand] = useState<BrandConfig>(defaultBrand);

    useEffect(() => {
        // Dynamically update the --primary CSS variable for Tailwind to use
        // Using hex to RGB conversion so we can use opacity with Tailwind classes if needed
        const hex = brand.primaryColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Fallback simple property
        document.documentElement.style.setProperty('--primary', brand.primaryColor);
        // For alpha channels support in Tailwind
        document.documentElement.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);
    }, [brand.primaryColor]);

    const updateBrand = (newBrand: Partial<BrandConfig>) => {
        setBrand((prev) => ({ ...prev, ...newBrand }));
    };

    return (
        <BrandContext.Provider value={{ brand, updateBrand }}>
            {children}
        </BrandContext.Provider>
    );
}

export function useBrand() {
    const context = useContext(BrandContext);
    if (context === undefined) {
        throw new Error('useBrand must be used within a BrandProvider');
    }
    return context;
}
