import "../assets/css/SectionTypeWriterHero.css"

function TypeWriterHero({ children, highlightBoxText }: { children: string, highlightBoxText?: string}) {
    return ( 
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="flex-center">
                            <h1 className="hero-heading">
                                {children}<br className="break"/>
                                { highlightBoxText && 
                                    <span className="highlight-box"><span className="highlight-box-bottom">{highlightBoxText}</span></span>
                                }    
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default TypeWriterHero;