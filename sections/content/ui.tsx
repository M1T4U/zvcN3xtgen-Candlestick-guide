import React from 'react';
import { TERM_DEFINITIONS } from '../../constants';

export const H1: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <h1 className="text-4xl font-bold mb-6 pb-2 border-b-2 border-blue-800/50 animate-gradient-text text-shadow">{children}</h1>;
};

export const H2: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-4 text-shadow-sm">{children}</h2>;
};

export const P: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
    const combinedClassName = `text-blue-200/90 mb-4 leading-loose ${className || ''}`.trim();
    return <p className={combinedClassName}>{children}</p>;
};

export const Term: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const termText = children?.toString().toLowerCase() || '';
    const definition = TERM_DEFINITIONS[termText] || 'No definition found.';
    
    return (
        <span className="relative group">
            <span className="font-semibold text-cyan-300 border-b border-cyan-300/30 cursor-pointer">{children}</span>
            <span className="absolute bottom-full mb-2 w-64 p-3 bg-blue-950 text-blue-100 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 left-1/2 -translate-x-1/2 border border-blue-800">
                {definition}
                <svg className="absolute text-blue-950 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
            </span>
        </span>
    );
};

export const Card: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <div className="bg-blue-950/60 backdrop-blur-lg border border-blue-800/50 p-6 rounded-lg my-4 relative overflow-hidden gradient-border">{children}</div>;
};

export const Ul: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <ul className="list-disc list-inside text-blue-200/90 space-y-2 mb-4 leading-loose">{children}</ul>;
};