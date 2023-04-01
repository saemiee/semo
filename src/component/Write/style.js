import styled from 'styled-components';

export const NotePad = styled.div`
  width: 800px;
  height: 670px;

  background: #F5F6F4;
  box-shadow: 0px 8px 20px 0px #CCD4CE;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const InputTitle = styled.input`
  width: 680px;
  height: 122px;

  font-size: 30px;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid #AAACAA;
  background: transparent;

  &:focus {
    outline: none;
  }
`

export const InputMemo = styled.textarea`
  width: 680px;
  height: 548px;
  font-size: 26px;
  font-weight: 500;
  border: none;
  background: transparent;
  resize: none;
  padding-top: 36px;

  &:focus {
    outline: none;
  }
`