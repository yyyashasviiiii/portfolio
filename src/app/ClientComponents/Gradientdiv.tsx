"use client"
import React, { ReactNode } from "react";


const GradientPosition = () => {

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    let windowWidth: any;
    if (typeof window !== 'undefined') {
        windowWidth = window.innerHeight;
    }

    React.useEffect(() => {
        const updateMousePosition = (ev: any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        if (typeof window !== 'undefined') {

            window.addEventListener('mousemove', updateMousePosition);
        }
        return () => {
            if (typeof window !== 'undefined') {

                window.removeEventListener('mousemove', updateMousePosition);
            }
        };
    }, []);

    return (mousePosition)
};


interface GradientdivProps {
    children: ReactNode
    className: string
}
const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
    return (
        <div

            style={{
                background: `radial-gradient(circle at ${GradientPosition().x}px ${GradientPosition().y}px, #111E42 1%, #101932 25%)`
            }}

            className={className}>
            {children}
        </div>
    )
}

export default Gradientdiv