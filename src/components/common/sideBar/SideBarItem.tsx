import * as S from './SideBar.style';

import HomeIcon from '@icons/HomeIcon.svg?react';
import ListIcon from '@icons/HamburgerIcon.svg?react';
import KeywordIcon from '@icons/KeywordIcon.svg?react';
import MyIcon from '@icons/MyIcon.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';

const SIDEBAR_ITEMS = [
  {
    name: '홈(기록하기)',
    path: '/home',
    icon: HomeIcon,
  },
  {
    name: '내 경험',
    path: '/list',
    icon: ListIcon,
  },
  {
    name: '역량 모아보기',
    path: '/keyword',
    icon: KeywordIcon,
  },
  {
    name: '마이페이지',
    path: '/my',
    icon: MyIcon,
  },
];

export const SideBarItem = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToUrl = (url: string) => {
    navigate(url);
  };

  const goToHome = () => {
    if (location.pathname !== '/home') {
      navigate('/home');
    }
  };

  return (
    <div>
      <S.SideBar onClick={(e) => e.stopPropagation()}>
        <S.Title onClick={() => goToHome()}>MOAMOA</S.Title>
        <S.ItemContainer>
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <S.Item key={item.name} onClick={() => goToUrl(item.path)} $isActive={isActive}>
                <S.Icon>
                  <item.icon />
                </S.Icon>
                <S.Text $isActive={isActive}>{item.name}</S.Text>
              </S.Item>
            );
          })}
        </S.ItemContainer>
      </S.SideBar>
    </div>
  );
};
