import { useNavigate } from 'react-router-dom';
import * as S from './TabBar.Style';
import ArrowIcon from '@icons/ArrowIcon.svg';
import EditIcon from '@icons/EditIcon.svg';

interface TabBarProps {
  leftText?: string;
  rightText?: string;
  icon?: string;
  centerText?: string;
  onClick?: () => void;
  onClickBackIcon?: () => void;
  isDisabled?: boolean;
  isEditable?: boolean;
  onClickEditIcon?: () => void;
}
/**
 *
 * @param leftText - (optional) 왼쪽 자리에 들어갈 글씨
 * @param rightText - (optional) 오른쪽 자리에 들어갈 글씨
 * @param icon - (optional) 아이콘
 * @param centerText - (optional) 가운데 자리에 들어갈 글씨
 * @param onClick - (optional) rightText나 icon을 클릭 시 수행하는 함수
 * @param onClickBackIcon - (optional) 이전 버튼을 클릭 시 수행하는 함수, 전달되지 않을 경우 이전 페이지로 이동하는 함수 수행
 * @param isDisabled - (optional) rightText를 클릭 시 수행하는 함수, 전달되지 않을 경우 이전 페이지로 이동하는 함수 수행
 * @param isEditable - (optional) 편집 아이콘의 유무
 * @param onClickEditIcon - (optional) 편집 아이콘 클릭 시 수행하는 함수
 * @returns
 */
export const TabBar = ({
  leftText,
  rightText,
  icon,
  centerText,
  onClick,
  onClickBackIcon,
  isDisabled,
  isEditable,
  onClickEditIcon,
}: TabBarProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.TabBar>
      <S.Icon
        src={ArrowIcon}
        alt="이전버튼"
        onClick={onClickBackIcon ? onClickBackIcon : handleBackClick}
      />
      {leftText && <S.LeftText>{leftText}</S.LeftText>}
      {centerText && <S.CenterText>{centerText}</S.CenterText>}
      {rightText && (
        <S.Text onClick={onClick} $isDisabled={isDisabled}>
          {rightText}
        </S.Text>
      )}
      <S.IconContainer>
        {isEditable && <S.Icon src={EditIcon} alt="편집 아이콘" onClick={onClickEditIcon} />}
        {icon && <S.Icon src={icon} alt="아이콘" onClick={onClick} />}
      </S.IconContainer>
    </S.TabBar>
  );
};
