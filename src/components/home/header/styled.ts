import {
  baseBlue, PaddingContainer, StyledButton, StyledPaddingWrapper,
} from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-top: 100px;
  overflow: hidden;
  ${(props) => props.theme.breakpoints.up('md')} {
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
  text-align: center;
  color: #fff;
  max-width: 450px;
  margin: 14px 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
    max-width: 300px;
    text-align: left;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 100px;
    max-width: 450px;
    font-size: 36px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 40px;
  }
`;

export const Desc = styled.span`
  color: #d1e0fb;
  max-width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.8;
  margin-top: 36px;
  text-align: center;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 18px;
    text-align: left;
    max-width: 450px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 400px;
    margin-left: 146px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 450px;
    font-size: 20px;
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
    width: 300px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 350px;
    margin-left: 146px;
    justify-content: initial;
  }
`;
export const LowerWrapper = styled.div`
  display: flex;
  gap: 11px;
  margin-top: 0px;
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
    border: solid 1px #a0c4e1;
    background-color: #212429;

    &:hover {
      background-color: #212429;
    }
  }
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  ${(props) => props.theme.breakpoints.up('md')} {
    //position: absolute;
  }
`;

export const Card = styled.div`
  padding-top: 24px;
  padding-left: 24px;
  width: 155px;
  height: 184px;
  border-radius: 12px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  background-image: linear-gradient(138deg, #2d2f33 1%, #272a2e 52%, #222529);
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 180px;
    height: 207px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 200px;
    height: 230px;
  }
  ${(props) => props.theme.breakpoints.up('1690')} {
    width: 255px;
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
    width: 70px;
    height: 70px;
  }
  ${(props) => props.theme.breakpoints.up('1690')} {
    width: 96px;
    height: 96px;
  }
`;

export const CardDesc = styled.div`
  word-spacing: 100vw;
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
    font-size: 16px;
  }
  ${(props) => props.theme.breakpoints.up('1690')} {
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
  align-items: center;
  justify-content: center;
  background-color: ${baseBlue};
  padding: 0 46px;
  height: 100px;
  border-radius: 300px 300px 0 0;
  margin-bottom: 10px;
  ${(props) => props.theme.breakpoints.up('md')} {
    justify-content: flex-start;
    border-radius: 0 300px 0 300px;
    height: 128px;
    margin-bottom: 0px;
  }
`;
export const LowerBlueRectangle = styled.div`
  display: none;
  width: 100%;
  background-color: ${baseBlue};
  padding: 0 146px;
  border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;
  height: 100px;
  margin-top: 24px;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    height: 100px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 128px;
  }
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const AbsoluteBoxes = styled.div`
  position: absolute;
  right: 20px;
  top: 270px;
  width: 56vw;
  ${(props) => props.theme.breakpoints.up('lg')} {
    right: 10px;
    width: 50vw;
    top: 280px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 50vw;
    right: 130px;
    top: 260px;
  }
  ${(props) => props.theme.breakpoints.up('1690')} {
    top: 240px;
    right: 160px;
  }
`;

export const FloatyBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 90px 20px;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up('lg')} {
    gap: 60px 30px;
  }
  ${(props) => props.theme.breakpoints.up('1690')} {
    gap: 30px 23px;
  }
`;
