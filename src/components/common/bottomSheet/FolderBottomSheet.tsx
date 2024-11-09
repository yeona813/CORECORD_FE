import { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { BottomSheet } from './BottomSheet';
import * as S from './FolderBottomSheet.Style';
import { SelectBox } from '../selectbox/SelectBox';
import CloseIcon from '@icons/CloseIcon.svg';

interface FolderBottomSheetProps {
  onClick: () => void;
  onClickButton: () => void;
  title: string;
  text: string;
  isSelectBox?: boolean;
}

const FOLDER_DATA = [
  '큐시즘 서비스 기획',
  '마이리얼트립 인턴',
  '서비스디자인학과 팀 프로젝트',
  '회사문장',
];
/**
 *
 * @param onClick - BottomSheet 열고 닫는 함수
 * @param onClickButton - Button 클릭 시 수행하는 함수
 * @param title - BottomSheet의 제목
 * @param text - BottomSheet의 부가 설명
 * @param isSelectBox - (optional) true일 경우 selectBox나옴
 * @returns
 */
export const FolderBottomSheet = ({
  onClick,
  onClickButton,
  title,
  text,
  isSelectBox = false,
}: FolderBottomSheetProps) => {
  const [folderName, setFolderName] = useState('');
  const [isError, setIsError] = useState(false);

  const changeFolderName = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
    if (e.target.value.length > 15) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const changeSelect = (select: string) => {
    setFolderName(select);
  };

  return (
    <BottomSheet onClick={onClick}>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Icon src={CloseIcon} alt="closeIcon" onClick={onClick} />
      </S.Header>
      <S.SheetContent>
        {text}
        {isSelectBox ? (
          <SelectBox select={folderName} onChange={changeSelect} selectData={FOLDER_DATA} />
        ) : (
          <Input
            isError={isError}
            errorMessage="15자 이내의 폴더 이름을 입력해주세요"
            placeholder="최대 15자까지 입력할 수 있어요"
            value={folderName}
            onChange={changeFolderName}
          />
        )}
        <Button styleType="basic" disabled={folderName === '' || isError} onClick={onClickButton}>
          완료
        </Button>
      </S.SheetContent>
    </BottomSheet>
  );
};
