import { baseBlue, PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
  padding: 0 17px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 250px 0;
    height: 600px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin: 80px 0 280px;
    height: 700px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin: 200px 0 400px;
  } ;
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 300px 300px 0 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 88%;
    background-color: ${baseBlue};
    border-radius: 300px 0 300px 0;
  }
`;

export const Caption = styled.span`
  color: #4579f5;
  margin: 2px 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 19px 123px;
  }
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
  max-width: 450px;
  margin: 14px 0 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 30px;
    max-width: 400px;
    margin: 14px 0;
    margin-left: 90px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 210px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 40px;
    max-width: 500px;
  }
`;

export const Desc = styled.span`
  font-size: 20px;
  margin-top: 26px;
  margin-left: 210px;
  font-weight: 500;
  line-height: 1.5;
  color: #d1e0fb;
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 470px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  ${(props) => props.theme.breakpoints.up('md')} {
    width: 470px;
    margin-left: 20px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-left: 142px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-bottom: 28px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-bottom: 32px;
  }
`;

export const LeftWrapper = styled.div`
  margin-right: 8px;
  margin-top: 20px;
  & svg {
    height: 40px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-right: 20px;
    & svg {
      height: 52px;
    }
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrappedTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 22px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 25px;
    margin-bottom: 26px;
  }
`;

export const WrappedDesc = styled.span<{ space: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: #d1e0fb;
  line-height: 1.5;
  margin-left: ${({ space }) => (space ? '0' : '62px')};
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 400px;
    font-size: 18px;
    margin-left: ${({ space }) => (space ? '0' : '72px')};
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 420px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 20px;
    width: 450px;
  }
`;

export const ImgWrapper = styled.div`
  display: none;
  align-items: center;
  position: absolute;
  right: 50px;
  bottom: 130px;
  width: 40vw;
  max-width: 956px;
  height: 100%;
  border-radius: 20px;
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }
`;
