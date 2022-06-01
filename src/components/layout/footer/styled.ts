import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
    width: 100%;
`;

export const Main = styled(PaddingContainer)`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 710px;
  bottom:0;
`;

export const Title = styled.div`
  font-size:20px;
  font-weight:bold;
`;

export const Desc = styled.div`
  max-width: 371.5px;
  font-size: 20px;
  line-height: 1.2;
  text-align: left;
  color: #d1e0fb;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33.5px;
`;

export const List = styled.div`
  display: flex;
  gap: 32px;
`;

export const Icon = styled.div`
  font-size:38px;
`;

export const ListContainer = styled.div`
  font-size:38px;
`;
