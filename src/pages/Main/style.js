import styled from 'styled-components';
import { MainBackground } from '../../assets/index';

export const Content = styled.div`
  background: url(${MainBackground});
  background-repeat: no-repeat;
  background-size: 100%;

  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainContents = styled.div`
  width: 1306px;
  height: 560px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 160px;

`

export const AddMemoButton = styled.div`
  width: 152px;
  height: 56px;

  cursor: pointer;

  border-radius: 7px;
  box-shadow: 0px 8px 20px 0px #D3DBD1;
  background: #829679;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;

  position: relative;
  top: 356px;
  left: -156px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`


