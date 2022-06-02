import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
    position: relative;
`;

export const Content = styled(PaddingContainer)`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  margin-top: 157px;
`;

export const TitleWrapper = styled.div`
 display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 439px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
`;
