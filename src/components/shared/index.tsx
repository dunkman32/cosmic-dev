import React, { forwardRef, Ref } from 'react';
import { Box, Button, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import styled from 'styled-components';

export const baseBlue = '#234ca1';

export const MarginContainer = styled(Box)`
  width: 94%;
  max-width: 576px !important;
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.up('md')} {
    width: 90%;
    max-width: 986.5px !important;
    margin: 0 auto;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 90%;
    max-width: 1168px !important;
    margin: 0 auto;
  }
`;

export const PaddingContainer = styled(Box)`
  width: 94%;
  max-width: 576px;

  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 95%;
    max-width: 95%;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    width: 90%;
    max-width: 90%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 95%;
    max-width: 1860px;
  }
`;

export const StyledPaddingWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

interface PaddingWrapperProps {
  children: JSX.Element | string | JSX.Element[];
  outerColor?: string;
  innerColor?: string;
}

export const PaddingWrapper = ({
  children,
  outerColor,
  innerColor,
}: PaddingWrapperProps) => (
  <StyledPaddingWrapper sx={{ backgroundColor: outerColor || 'transparent' }}>
    <PaddingContainer sx={{ backgroundColor: innerColor || 'transparent' }}>
      {children}
    </PaddingContainer>
  </StyledPaddingWrapper>
);

export const HR = styled.hr`
  border-color: rgba(229, 229, 234, 1);
  width: 100%;
`;

export const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: JSX.Element;
    },
    ref: Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

export interface Props {
  $bgColor?: string;
  $color?: string;
  width?: string;
  height?: string;
  padding?: string;
  gap?: string;
  borderRadius?: string;
  txtTransform?: string;
  border?: string;
  fontSize?: string;
  alignSelf?: string;
}

export const StyledButton = styled(Button)<Props>`
  &&& {
    gap: ${({ gap }) => gap || '6px'};
    border-radius: ${({ borderRadius }) => borderRadius || '12px'};
    background-color: ${({ $bgColor }) => $bgColor || baseBlue};
    width: ${({ width }) => width || '215px'};
    border: ${({ border }) => border || 'none'};
    height: ${({ height }) => height || '57px'};
    color: ${({ $color }) => $color || '#ffffff'};
    padding: ${({ padding }) => padding || 'auto'};
    text-transform: ${({ txtTransform }) => txtTransform || 'capitalize'};
    font-size: ${({ fontSize }) => fontSize || '1rem'};
    align-items: center;
    align-self: ${({ alignSelf }) => alignSelf};

    &.Mui-disabled {
      opacity: 0.5;
    }

    &:hover {
      background-color: ${({ $bgColor }) => $bgColor || '#295fca'};
    }
  }
`;
