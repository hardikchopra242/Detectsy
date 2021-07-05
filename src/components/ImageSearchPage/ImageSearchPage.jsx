import ImageLinkForm from './../ImageLinkForm/ImageLinkForm.jsx'
import FaceRecognition from './../FaceRecognition/FaceRecognition.jsx'
import * as S from './ImageSearchPage.style.js'

const ImageSearchPage = ({onInputChange, onButtonSubmit, onButtonClear, box, imageUrl}) => {
  return (
    <S.Container>
      <S.Content>
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
          onButtonClear = {onButtonClear}
        />
        <FaceRecognition box={box} imageUrl={imageUrl} />
      </S.Content>
    </S.Container>
  )
}

export default ImageSearchPage
