import styled from 'styled-components';
import { semo } from '../../assets/index.js'

export const header = styled.header`
  width: 1820px;
  height: 100px;

  background: #FFFFFF;
  border-bottom: solid 1px #909999;
  position: absolute;
`

export const logo = styled.div`
  background: url(${semo});
  background-repeat: no-repeat;

  width: 87px;
  height: 47px;
  margin-top: 10px; 

  cursor: pointer;
  position: relative;
  top: 31px;
  left: 307px;

`
