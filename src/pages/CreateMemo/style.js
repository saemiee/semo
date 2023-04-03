import styled from 'styled-components';
import { CreateBackground } from '../../assets/index.js';

export const CreateContent = styled.div`
  background: url(${CreateBackground});
  background-repeat: no-repeat;
  background-size: 100%;

  width: 1920px;
  height: 1080px;
  display: flex;
  padding-left: 560px;
  padding-right: 560px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`