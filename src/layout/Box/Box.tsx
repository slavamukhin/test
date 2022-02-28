import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
    padding: 24px;
    background-color: white;
    border-radius: 4px;
`

export const Box: FC = ({ children, ...rest }) => (
  <Root {...rest}>{children}</Root>
)

