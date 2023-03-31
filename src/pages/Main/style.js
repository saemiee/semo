import styled from 'styled-components';
import { MainContent } from '../../assets/index';

export const Content = styled.div`
  background: url(${MainContent});
  background-repeat: no-repeat;
  background-size: 100%;

  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MemoContent = styled.div`
  width: 1360px;
  height: 560px;

  display: flex;
  flex-wrap: wrap;
`

