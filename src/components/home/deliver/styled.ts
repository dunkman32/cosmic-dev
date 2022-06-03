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
  flex-direction: column;
  gap: 35px;
  width: 100%;
  background-color: #377dff;
  border-bottom-left-radius: 300px;
  border-top-right-radius: 300px;
`;

export const Caption = styled.span`
  color: #4579f5;
  margin: 19px 0;
  margin-left: 123px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  letter-spacing: 1px;
`;

export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.23;
  text-align: left;
  color: #fff;
  width: 500px;
  margin: 15px 210px;
`;

export const Desc = styled.span`
  font-size: 20px;
  margin-top: 26px;
  margin-left: 210px;
  font-weight: 500;
  line-height: 1.5;
  width: 470px;
  color: #d1e0fb;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 166px;
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

export const WrappedDesc = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #d1e0fb;
  width: 450px;
  line-height: 1.5;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  width: 492px;
  height: 517px;
  background-color: #212429;
  border-radius: 20px;
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4);
  right: 300px;
  display: flex;
  align-items: flex-end;
`;
