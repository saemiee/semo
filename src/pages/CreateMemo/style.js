import styled from 'styled-components';
import { CreateBackground } from '../../assets/index.js';

export const CreateContent = styled.div`
  background: url(${CreateBackground});
  background-repeat: no-repeat;
  background-size: 100%;

  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Cencel = styled.button`
  width: 152px;
  height: 56px;

  cursor: pointer;

  border-radius: 7px;
  box-shadow: 0px 8px 20px 0px #D3DBD1;
  background: #829679;
  color: #FFFFFF;
  border: none;

  font-size: 24px;
  font-weight: 500;
`