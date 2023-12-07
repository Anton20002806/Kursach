import React, { useState } from 'react';
import './Acordion.css'
import plus from '../../img/Plus.png'
import minus from '../../img/Minus.png'
const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className="title">
                    {title}
                    <div className="isactive">
                        {isActive ? <img src={minus}/> : <img src={plus}/> }
                    </div>
                </div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;