
import * as React from 'react';

export const renderFigure = (src: string, alt: string, caption?: string, credit?: string) => {
    return <figure className="app-c-figure" lang="en">
                <image className="app-c-figure__image" src={src} alt={alt}/>
                <figcaption className="app-c-figure__figcaption">
                    {captionElem(caption)}
                    {creditElem(credit)}
                </figcaption>
           </figure>
}

const captionElem = (caption?: string) => {
    if (caption) {
        return <p className="app-c-figure__figcaption-text">{caption}</p>
    } else {
        //work out how to not return elem here
        return <p/>
    }
}

const creditElem = (credit?: string) => {
    if (credit) {
        return <p className="app-c-figure__figcaption-credi">{credit}</p>
    } else {
        return <></>
    }
}
