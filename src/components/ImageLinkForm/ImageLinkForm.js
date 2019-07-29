import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain can detects faces from your image. Give it a test!'}
            </p>
            <div className=''>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;