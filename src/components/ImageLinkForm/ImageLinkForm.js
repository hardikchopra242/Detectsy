import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, onButtonClear}) => {
  return (
    <div>
      <div className='center'>
        <div className='form center pa2 br2 shadow-5'>
          <input placeholder="Paste Image Address Here" className='input f6 pa2 w-70 center' type='tex' onChange={onInputChange}/>
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
