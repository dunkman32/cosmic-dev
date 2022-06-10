import styled from 'styled-components';
import { PaddingContainer } from '@src/components/shared';

export const Root = styled(PaddingContainer)`
    display: flex;
    flex-direction: column;
    margin : 90px 0 90px;
    align-items: center;
    justify-content: center;
    gap: 70px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin : 350px 0 179px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  ${(props) => props.theme.breakpoints.up('md')} {
    align-items: center;
    gap: 11px;
  }
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
  font-size: 25px;
  font-weight: bold;
  line-height: 1.23;
  color: #f5f5f5;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border-radius: 12px;
  background-image: linear-gradient(95deg, #222529, #272a2f 20%, #2a2d31 38%, #2a2c31 58%, #272a2f 80%, #222529);
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 100%;
    gap: 67px;
  }
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100px;
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;
