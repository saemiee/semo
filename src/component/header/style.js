import styled from 'styled-components';
import semo from '../../img/semo.png'

export const header = styled.header`
  width: 1920px;
  height: 100px;

  background: #FFFFFF;
  border-bottom: solid 1px #909999;
  position: absolute;
`

export const logo = styled.div`
  background: url(${semo});
  position: relative;
  top: 31px;
  left: 307px;
`
