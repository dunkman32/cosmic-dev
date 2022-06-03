import { PaddingContainer } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(PaddingContainer)`
  position:relative;
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 353px 0 398px;
`;

export const ImgWrapper = styled.div`
  width: 492px;
  height: 517px;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 520px;
`;

export const Feature = styled.div`
  height: 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
  text-align: left;
  color: #4579f5;
`;

export const Title = styled.div`
  height: 98px;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
`;

export const Desc = styled.div`
  height: 74.6px;
  opacity: 0.8;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  color: #d1e0fb;
  margin-top: 12px;
`;

export const Grid = styled.div`
    
`;
