import React from 'react';
import './style.css'

const ImageLinkForm = ( {onInputChange , onButtonSubmit} ) => {
    return(
        <div>
            <p className="f3 tc">
                {`Give the link of your image`}
            </p>
            <div className="center">
                <div className=" form pa4 br3 shadow-5 center w-50">
                    <input 
                        type="text" 
                        className="f4 pa2 w-70 center" 
                        onChange={onInputChange} 
                    />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;