import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 tc white'>
                {'This Web App can detect any face from an image. Place a link below!'}
            </p>
            <div className=''>
                <div className='form pa4 br-pill shadow-5'>
                    <input className='br2 br--left f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib br2 br--right near-black bg-gold' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;