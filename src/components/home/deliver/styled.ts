import { PaddingContainer, StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Root = styled(StyledPaddingWrapper)`
  position: relative;
  padding: 0 17px;
`;

export const Content = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  ${(props) => props.theme.breakpoints.up('md')} {
    background-color: #377dff;
    border-radius: 0 300px 0 300px;
  }
`;

export const Caption = styled.span`
  color: #4579f5;
  margin: 19px 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-left: 123px;
  }
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
    max-width: 400px;
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
  margin-bottom: 32px;
`;

export const LeftWrapper = styled.div`
  margin-right: 20px;
  margin-top: 20px;
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrappedTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 26px;
`;

export const WrappedDesc = styled.span<{space: boolean}>`
  font-size: 16px;
  font-weight: 500;
  color: #d1e0fb;
  line-height: 1.5;
  margin-left: ${({ space }) => (space ? '0' : '72px')};
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 450px;
    font-size: 20px;
  }
`;

export const ImgWrapper = styled.div`
  display: none;
  position: absolute;
  width: auto;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  right: 13vw;
  align-items: flex-end;
  & svg {
    height: auto;
    width: 25vw;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    display: flex;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 517px;
  }
`;
