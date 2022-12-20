import styled from 'styled-components'
import { Link } from 'react-scroll'
import Logo from '../../assets/navbar/logo.svg'

export const StyledLogo = styled(Link)`
  display: inline-block;
  width: 90px;
  height: 52px;

  background-image: ${(p) => (p.logo ? `url(${p.logo})` : `url(${Logo})`)};
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;

  cursor: pointer;
`
