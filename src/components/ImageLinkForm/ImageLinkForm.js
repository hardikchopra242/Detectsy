import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, onButtonClear}) => {
  return (
    <div>
      {/*<span className='f3'>
        {'Give the URL of an image to detect a face'}
      </span>*/}

      <div className='center'>
        <div className='form center pa2 br2 shadow-5'>
          <input className='input f5 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          
          <button
            className='btn w-20  f5  ph3 pv2'
            onClick={onButtonClear}
          >CLEAR</button>

          <button
            className='btn w-20  f5  ph3 pv2 '
            onClick={onButtonSubmit}
          >DETECT</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;