import styled from 'styled-components';
import { PaddingContainer } from '@src/components/shared';

export const Root = styled(PaddingContainer)`
    display: flex;
    flex-direction: column;
    margin : 350px 0 179px;
    align-items: center;
    justify-content: center;
    gap: 70px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
`;

export const Title = styled.div`
  height: 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  color: #4579f5;
`;

export const Desc = styled.div`
  height: 37px;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.23;
  color: #f5f5f5;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 67px;
  height: 120px;
  border-radius: 12px;
  background-image: linear-gradient(95deg, #222529, #272a2f 20%, #2a2d31 38%, #2a2c31 58%, #272a2f 80%, #222529);
`;

export const Card = styled.div`
  width: 168px;
  height: 45px;
  font-size:40px;
`;
