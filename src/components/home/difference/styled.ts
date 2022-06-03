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
  margin-top: 157px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  background-color: #377dff;
  padding: 0 100px;
  border-top-left-radius: 300px;
  border-bottom-right-radius: 300px;
`;

export const Caption = styled.span`
  color: #4579f5;
  margin: 12px 0;
  margin-left: 154px;
  font-size: 13px;
  font-weight: 600;
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
  width: 400px;
  margin: 15px 50px;
`;

export const Desc = styled.span`
  font-size: 20px;
  margin-top: 26px;
  margin-left: 150px;
  font-weight: 500;
  line-height: 1.5;
  width: 470px;
  color: #d1e0fb;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  margin-left: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;

export const WrappedTitle = styled.span`
  color: #377dff;
  font-size: 55px;
  font-weight: bold;
`;

export const WrappedDesc = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #d1e0fb;
  width: 150px;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  width: 492px;
  height: 517px;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  top: 180px;
  right: 300px;
`;
