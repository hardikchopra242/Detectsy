import * as S from './ImageLinkForm.style.js'

const ImageLinkForm = ({ onInputChange, onButtonSubmit, onButtonClear}) => {
  return (
    <S.Container>
        <S.Form>
          <S.Input
            className = 'input'
            placeholder="Paste Image Address Here"
            type='text'
            onChange={onInputChange}
          />
          <S.ButtonContainer>
            <S.Button
              onClick={onButtonClear}>
              CLEAR
            </S.Button>
            <S.Button
              onClick={onButtonSubmit}>
              DETECT
            </S.Button>
          </S.ButtonContainer>
        </S.Form>
    </S.Container>
  );
}

export default ImageLinkForm;
