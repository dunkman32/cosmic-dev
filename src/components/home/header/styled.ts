import { PaddingContainer, StyledButton, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
  justify-content: space-between;
  margin-top: 50px;
  overflow: hidden;
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-direction: initial;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 274px;
  }
  
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
  max-width: 450px;
  margin: 14px 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
    max-width: 300px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 100px;
    font-size: 40px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-left: 100px;
    font-size: 40px;
    max-width: 450px;
  }
`;

export const Desc = styled.span`
  text-align: left;
  color: #d1e0fb;
  max-width: 450px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.8;
  margin-top: 36px;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 20px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 146px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 11px;
  margin-top: 26px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-right: 120px;
    justify-content: initial;
  } 
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 146px;
    margin-right: 120px;
    justify-content: initial;
  }
`;
export const LowerWrapper = styled.div`
  display: flex;
  gap: 11px;
  margin-top: 26px;
  justify-content: space-between;
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
  max-width: 600px;
  right: 134px;
 
  
`;

export const Card = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  width: 155px;
  height: 184px;
  border-radius: 12px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  background-image: linear-gradient(138deg, #2d2f33 1%, #272a2e 52%, #222529);
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 245px;
    height: 284px;
  }
`;

export const Icon = styled.div`
  width: 26px;
  height: 26px;
  font-size: 48px;
  background: rgba(69, 121, 245, 0.03);
  border-radius: 600px 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 96px;
    height: 96px;
  }
`;

export const CardDesc = styled.div`
  width: 207px;
  height: 95px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  color: #fff;
  margin-top: 25px;
  max-width: 107px;
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 20px;
    max-width: 207px;
  }
`;

export const Welcome = styled.div`
  color: #4579f5;
  margin: 16px 0;
  font-size: 13px;
  text-align: right;
  font-weight: 600;
  letter-spacing: 1px;
  ${(props) => props.theme.breakpoints.up('md')} {
    text-align: left;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 154px;
  }
`;

export const BlueRectangle = styled.div`
  display: flex;
  width: 100%;
  background-color: #377dff;
  padding: 0 46px;
  border-top-left-radius: 300px;
  border-bottom-right-radius: 300px;
  ${(props) => props.theme.breakpoints.up('lg')} {
   border-radius: 0px 0 0 150px;
  }
`;
export const LowerBlueRectangle = styled.div`
  display: none;
  width: 100%;
  background-color: #377dff;
  padding: 0 146px;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
  height: 128px;
  ${(props) => props.theme.breakpoints.up('lg')} {
    display: flex;
  }
`;
