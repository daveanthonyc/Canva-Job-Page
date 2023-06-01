import { ReactNode } from "react";
import "./Accordion.css"
import { useState } from 'react'

function Accordion({children, heading }: {children: ReactNode, heading: string}) {

    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    
    return ( 
        <>
            <button className="accordion-button" onClick={() => setAccordionOpen(!accordionOpen)}>{heading}</button>
            <div className="accordion-content" data-state={accordionOpen}>
                {children}
            </div>
        </>
     );
}

export default Accordion;