import { StyledPaddingWrapper } from '@src/components/shared';
import styled from 'styled-components';

export const Container = styled(StyledPaddingWrapper)`
  margin: 70px 0 50px;
  ${(props) => props.theme.breakpoints.up('md')} {
    justify-content: center;
    margin: 150px 0 20px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    justify-content: flex-end;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin: 200px 0 20px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  & img {
    object-fit: cover;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    height: 220px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 284px;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 32px;
    margin-top: 12px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 32px;
    margin-top: 24px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 40px;
    margin-top: 48px;
  }
`;

export const Desc = styled.div`
  color: #d1e0fb;
  font-size: 16px;
  margin-top: 8px;
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 18px;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 20px;
    margin-top: 24px;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 32px;
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    justify-content: space-around;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 100%;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 90%;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 86%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-bottom: 30px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-bottom: 24px;
    width: 42vw;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-bottom: 60px;
    width: 30vw;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 25vw;
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-bottom: 80px;
    width: 22vw;
  }
`;
