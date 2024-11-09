import { useNavigate } from 'react-router-dom';
import * as S from './Header.Style';
import { CategoryChip } from '../../common/chip/CategoryChip';
import FolderIcon from '@icons/FolderIcon.svg';
import { Header } from '@/components/layout/header/Header';

interface ListHeaderProps {
  nickname: string;
  folderData: string[] | null;
  selectFolder: string;
  onClick: (folderName: string) => void;
  onClickSideBar: () => void;
}

/**
 *
 * @param nickname - 유저 이름
 * @param folderData - 폴더 리스트 | null
 * @param selectFolder - 선택된 폴더 값
 * @param onClick - 폴더를 선택하는 함수
 * @param onClickSideBar - 사이드바 핸들링 함수
 * @returns
 */
export const ListHeader = ({
  nickname,
  folderData,
  selectFolder,
  onClick,
  onClickSideBar,
}: ListHeaderProps) => {
  const navigate = useNavigate();

  const goToFolderPage = () => {
    navigate('/folder');
  };

  return (
    <S.Header>
      <Header onClick={onClickSideBar} />
      <S.Title>{nickname}님의 경험 모아보기</S.Title>
      <S.FolderContainer>
        <S.FolderIcon onClick={goToFolderPage}>
          <S.Icon src={FolderIcon} alt="FolderIcon" />
        </S.FolderIcon>
        <S.ChipContainer>
          {folderData &&
            folderData.map((item, index) => (
              <CategoryChip
                key={index}
                isSelected={item === selectFolder}
                onClick={() => onClick(item)}
              >
                {item}
              </CategoryChip>
            ))}
        </S.ChipContainer>
      </S.FolderContainer>
    </S.Header>
  );
};
