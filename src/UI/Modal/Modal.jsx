import React from 'react'
import cl from './Modal.module.css'

export default function Modal({children, visible, setVisible}) {

    const rtClasses = [cl.myModal]

    if (visible) {
        rtClasses.push(cl.active)
    }

    return (
        <div className={rtClasses.join('')} onClick={()=> setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
