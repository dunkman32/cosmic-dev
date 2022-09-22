import styled from 'styled-components';
import { PaddingContainer } from '@src/components/shared';

export const Root = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  margin: 90px 0 90px;
  align-items: center;
  justify-content: center;
  gap: 36px;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 300px 0 179px;
  }
`;

export const Image = styled.img`
  height: 3rem;
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 4rem;
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
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  height: 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.85;
  color: #4579f5;
`;
export const StackInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
