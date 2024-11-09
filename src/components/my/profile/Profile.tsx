import { useNavigate } from 'react-router-dom';
import * as S from './Profile.Style';
//import { useEffect, useState } from 'react';
//import { getUsers } from '@/api/My';

export const Profile = () => {
  const navigate = useNavigate();
  const nickname = '뫄뫄';
  const status = '대학생';
  const recordCount = 0;
  //const [user, setUser] = useState({ nickname: '', status: '', recordCount: 0 });

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userData = await getUsers();
  //     if (userData) {
  //       setUser({
  //         nickname: userData.nickname,
  //         status: userData.status,
  //         recordCount: userData.recordCount,
  //       });
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return (
    <S.Container>
      <S.Profile>
        <S.TextContainer>
          <S.Text>{nickname}님의 프로필</S.Text>
          <S.SubText>{status}</S.SubText>
        </S.TextContainer>
        <S.Button
          onClick={() => {
            navigate('/editProfile');
          }}
        >
          내 프로필 수정하기
        </S.Button>
      </S.Profile>
      <S.DIV /> {/* 임시 작업 */}
      <S.Record>총 {recordCount}건의 레코드를 기록했어요.</S.Record>
    </S.Container>
  );
};
