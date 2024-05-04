import React from "react";
import styled from "styled-components";

interface RotatingCardProps {
  children: React.ReactNode;
}

const RotationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  border-radius: 20px;
`;

const RotatingCard: React.FC<RotatingCardProps> = ({ children }) => {
  return (
    <RotationWrapper>
      <CardWrapper>{children}</CardWrapper>
    </RotationWrapper>
  );
};

export default RotatingCard;
