import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
    position: relative;
    width: 100%;
    background-color:#212429;
    height: 710px;
    display: flex;
    align-items: center;
    bottom:0;
`;

export const Main = styled(PaddingContainer)`
  display: flex;
  justify-content: space-between;
  padding:0 105px 0 105px;
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
  cursor: pointer;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 89.3px;
`;

export const TitleOfList = styled.div`
  margin: 0 0 44.8px 0;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  color: #fafafa;
`;

export const Items = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: left;
  color: #d1e0fb;
  margin-bottom: 20px;
`;
