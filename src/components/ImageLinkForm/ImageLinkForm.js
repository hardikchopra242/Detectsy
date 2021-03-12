import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Give the URL of an image to detect a face'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='input f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='btn w-30  f4  ph3 pv2 dib white '
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;