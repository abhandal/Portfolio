import React from 'react'
import './Introduction.css'

export function Introduction() 
{
    return (
        <div class="Introduction-container">
            <h3 class="Introduction-header">
                Hi, my name is
            </h3>
            <h1 class="Introduction-name">Aman Bhandal.</h1>
            <h1 class="Introduction-tagline">I build things.</h1>
            <div class="Introduction-paragraph-container">
                <p class="Introduction-paragraph">
                I am a software engineer from Montreal, QC specializing in 
                full-stack development with a knack for design.
                </p>
            </div>

            <div class="Introduction-button-container">
                <a class="Introduction-button-anchor" href="mailto: me@amanbhandal.com">
                    <button class="Introduction-button">
                        Contact Me
                    </button>
                </a>
            </div>
        </div>
    );
}