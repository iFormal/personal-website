'use client';

import React, {ReactNode} from "react";

interface GradientdivProps{
    children:ReactNode
    className:string
}
const GradientPosition = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            // Add scroll position to get document coordinates instead of viewport coordinates
            setMousePosition({ 
                x: ev.clientX + window.scrollX, 
                y: ev.clientY + window.scrollY 
            });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};

const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
    const mousePosition = GradientPosition();
    const divRef = React.useRef<HTMLDivElement>(null);
    const [relativePosition, setRelativePosition] = React.useState({ x: 0, y: 0 });
    
    React.useEffect(() => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setRelativePosition({
                x: mousePosition.x - (rect.left + window.scrollX),
                y: mousePosition.y - (rect.top + window.scrollY)
            });
        }
    }, [mousePosition]);

    return(
        <div 
        style={{
            backgroundImage: `radial-gradient( circle at ${GradientPosition().x}px ${GradientPosition().y}px, rgb(15, 15, 15), black 20%)`,
        }}
        className={className}>
            {children}
        </div>
    )
}

export default Gradientdiv