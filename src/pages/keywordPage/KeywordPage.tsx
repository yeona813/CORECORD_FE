import { useState } from 'react';
import { CategoryChip } from '@components/common/chip/CategoryChip';
import { Footer } from '@components/layout/footer/Footer';
import * as S from './KeywordPage.Style';
import { KeywordList } from '@components/keyword/KeywordList';
import { Button } from '@components/common/button/Button';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { useNavigate } from 'react-router-dom';
import RecordIcon from '@icons/RecordIcon.svg';

interface KeywordListItem {
  id: number;
  chip: string;
  title: string;
  description: string;
  date: string;
}

const MOCK_KEYWORD_DATA: string[] = [
  '커뮤니티',
  '문제해결능력',
  '도전 정신',
  '리더십',
  '자기 계발',
  '팀워크',
  '적응력',
];

const MOCK_KEYWORD_LIST_DATA: KeywordListItem[] = [
  {
    id: 1,
    chip: '큐시즘 기업 프로젝트',
    title: '와이어프레임 작업',
    description: '디자인 팀에게 넘겨줄 와이어 프레임 작업을 시작했다. 와이어프레임 작업 시작 중',
    date: '2024.10.08',
  },
  {
    id: 2,
    chip: '큐시즘 기업 프로젝트',
    title: '프로토타입 제작',
    description: '프로토타입 제작을 완료하여 테스트 중. 피드백을 반영할 예정.',
    date: '2024.10.15',
  },
  {
    id: 3,
    chip: '큐시즘 기업 프로젝트',
    title: 'UI 디자인 개선',
    description: 'UI 디자인 개선 작업을 진행하여 사용자 경험을 향상시킴.',
    date: '2024.10.20',
  },
  {
    id: 4,
    chip: '큐시즘 기업 프로젝트',
    title: '개발 환경 설정',
    description: '개발 환경을 설정하고 초기 셋업을 완료함.',
    date: '2024.10.25',
  },
  {
    id: 5,
    chip: '큐시즘 기업 프로젝트',
    title: 'UI 디자인 개선',
    description: 'UI 디자인 개선 작업을 진행하여 사용자 경험을 향상시킴.',
    date: '2024.10.20',
  },
  {
    id: 6,
    chip: '큐시즘 기업 프로젝트',
    title: '개발 환경 설정',
    description: '개발 환경을 설정하고 초기 셋업을 완료함.',
    date: '2024.10.25',
  },
  {
    id: 7,
    chip: '큐시즘 기업 프로젝트',
    title: 'UI 디자인 개선',
    description: 'UI 디자인 개선 작업을 진행하여 사용자 경험을 향상시킴.',
    date: '2024.10.20',
  },
  {
    id: 8,
    chip: '큐시즘 기업 프로젝트',
    title: '개발 환경 설정',
    description: '개발 환경을 설정하고 초기 셋업을 완료함.',
    date: '2024.10.25',
  },
];

export const KeywordPage = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<number | null>(null);
  const [openBottom, setOpenBottom] = useState(false);
  const nickname = '코코';
  const navigate = useNavigate();

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const showChips = () =>
    MOCK_KEYWORD_DATA.map((item, index) => (
      <CategoryChip
        isSelected={selectedKeyword === index}
        onClick={() => setSelectedKeyword(index)}
        key={index}
      >
        {item}
      </CategoryChip>
    ));

  const showKeywordList = () =>
    MOCK_KEYWORD_LIST_DATA.map((item) => (
      <KeywordList
        key={item.id}
        chip={item?.chip}
        title={item?.title}
        description={item?.description}
        date={item?.date}
        onClick={() => {
          navigate(`/report/${item.id}`);
        }}
      />
    ));

  return (
    <div>
      <S.Container>
        <S.Title>
          {nickname}님의 역량별 경험을
          <br />
          정리해드렸어요
        </S.Title>
        <S.ChipsContainer>{MOCK_KEYWORD_DATA.length > 0 && showChips()}</S.ChipsContainer>
        {MOCK_KEYWORD_LIST_DATA.length > 0 ? (
          <S.KeywordListContainer>{showKeywordList()}</S.KeywordListContainer>
        ) : (
          <S.EmptyContainer>
            <S.EmptyMessage>
              아직 작성한 경험이 없어요. <br />
              CO:RECORD와 함께 <br />
              경험을 기록해보세요!
            </S.EmptyMessage>
            <Button styleType="shadow" icon={RecordIcon} onClick={toggleBottomSheet}>
              기록하러 가기
            </Button>
          </S.EmptyContainer>
        )}
      </S.Container>
      <Footer />
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
    </div>
  );
};
