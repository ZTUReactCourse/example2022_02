import React from "react";
import styled from 'styled-components';

const Outer = styled.div`
  background-color: #61dafb;
  padding: 10px;
`;

const Inner = styled.h1`
  color: yellow;
  font-size: 12px;
`;

const DemoStyledComponent = ({title = 'Default text'}) => {
    return <Outer>
        <Inner>{title}</Inner>
    </Outer>
};

export default DemoStyledComponent;