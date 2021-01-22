import styled from 'styled-components';
import { Input } from 'antd';
import theme from '../config/theme';

export const StyledInput = styled(Input)`
  && {
    background: ${theme.palette.common.grey}
    ${props =>
      props.type === 'form' &&
      `
        background: ${theme.palette.common.white};
      `}
  }
`;

