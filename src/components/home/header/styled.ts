import { PaddingContainer, StyledButton, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 274px;
  padding: 0 100px 0 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 35px;
  max-width: 439px;
`;

export const Title = styled.span`
  font-size: 40px;
  height: 113px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
`;

export const Desc = styled.span`
  text-align: left;
  color: #d1e0fb;
  width: 345px;
  font-size: 20px;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 11px;
`;

export const Button = styled(StyledButton)`
  &&& {
    width: 167px;
    height: 48px;
  }
`;

export const StyledButtons = styled(Button)`
  &&& {
    border: solid 1px #377dff;
    background-color: #212429;

    &:hover {
      background-color: #212429;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Card = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  width: 255px;
  height: 284px;
  border-radius: 12px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  background-image: linear-gradient(138deg, #2d2f33 1%, #272a2e 52%, #222529);
`;

export const Icon = styled.div`
  width: 96px;
  height: 96px;
  font-size: 48px;
  background: rgba(69, 121, 245, 0.03);
  border-radius: 600px 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDesc = styled.div`
  width: 207px;
  height: 95px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  color: #fff;
  margin-top:25px;
  max-width: 207px;
`;

export const Welcome = styled.div`
  height: 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  text-align: left;
  color: #4579f5;
`;
