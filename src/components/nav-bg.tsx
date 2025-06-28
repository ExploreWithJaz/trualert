import React from 'react'

function navBG() {
    return (
        <div>
            <div className="absolute inset-0 flex justify-center items-start -z-10 pointer-events-none overflow-hidden">
                <div 
                    className="flex-shrink-0 bg-no-repeat bg-center"
                    style={{ 
                        width: '1416px',
                        height: '262px',
                        minWidth: '1416px',
                        minHeight: '262px',
                        backgroundImage: 'url(/Nav-BG.svg)',
                        backgroundSize: '1416px 262px'
                    }}
                />
            </div>
        </div>
    )
}

export default navBG