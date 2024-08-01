import {
  BottomButtons,
  NavItemsWrapper,
  NavItemText,
  StyledBurger,
  StyledMenu,
  WrapHeader,
} from '@src/components/layout/header/burger/styled';
import { Navbar } from '@src/components/layout/header/helper';
import CustomLink from '@src/components/shared/customLink';
import Close from '@src/components/shared/icons/colse';
import MobileMenu from '@src/components/shared/icons/mobileMenu';
import Image from 'next/image';
import { useEffect } from 'react';

export interface StyleProp {
  open: boolean;
}

interface MenuProps extends StyleProp {
  setOpen: (_arg0: boolean) => void;
}

const Menu = ({ open, setOpen }: MenuProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [open]);

  // const Links = useMemo(
  //   () => [
  //     {
  //       desc: 'home',
  //       id: '/',
  //     },
  //     ...Navbar,
  //   ],
  //   [],
  // );
  return (
    <StyledMenu open={open}>
      <div>
        <WrapHeader>
          <StyledBurger onClick={() => setOpen(!open)}>
            <Image src="/images/close.svg" width="20px" height="20px" />
          </StyledBurger>
          <WrapHeader width="90px">
            <Image src="/images/globusWhite.svg" width="20px" height="20px" />
          </WrapHeader>
        </WrapHeader>
        <NavItemsWrapper>
          {Navbar.map((val) => (
            <div key={val.id}>
              <CustomLink href={val.link}>
                <NavItemText onClick={() => setOpen(false)}>
                  {val.desc}
                </NavItemText>
              </CustomLink>
            </div>
          ))}
        </NavItemsWrapper>
      </div>
      <BottomButtons>
        {/* <WrapDonate>
          <CustomLink href="/">
            <StyledButton
              $bgColor="transparent"
              width="224px"
              height="62px"
              border="1px solid white"
              txtTransform="uppercase"
            >
              donate
            </StyledButton>
          </CustomLink>
        </WrapDonate> */}
      </BottomButtons>
    </StyledMenu>
  );
};

export const Burger = ({ open, setOpen }: MenuProps) => (
  <StyledBurger onClick={() => setOpen(!open)}>
    {open ? <Close /> : <MobileMenu />}
  </StyledBurger>
);

export default Menu;
