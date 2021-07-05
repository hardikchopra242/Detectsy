import * as S from './FaceRecognition.style.js'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
        <S.Container>
          <S.Content>
            <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
            <S.BoundingBox
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol
              }}>
           </S.BoundingBox>
          </S.Content>
        </S.Container>
    )
}

export default FaceRecognition;
