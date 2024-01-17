"use client"

import { RatingContextProvider } from "@/hooks/useRating"

interface RatingProviderProps {
    children: React.ReactNode
}

const RatingProvider: React.FC<RatingProviderProps> = ({children}) => {
    return ( 
        <RatingContextProvider>
            {children}
        </RatingContextProvider>
    );
}
 
export default RatingProvider;