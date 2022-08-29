import type { NextPage } from 'next';
import Image from 'next/Image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import MedicineList from '../../components/MedicineList';

const data = [
  {
    disease: '순환기계질환',
    medicineList: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: '록사렉스캡슐 75mg',
        group: '기관지 천식 치료제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: [
          '아세트아미노펜',
          '이부프로펜',
          '티로프미드염산염',
          '아세트아미노산',
          '아세트아미노산',
        ],
        company: '팜젠사이언스',
        cost: 3000,
        left: 3,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbdaa97f63',
        name: '로스파정',
        group: '기관지 확장제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: ['아세트아미노펜', '이부프로펜', '티로프미드염산염'],
        company: '영진약품',
        cost: 3000,
        left: 2,
      },
    ],
  },
  {
    disease: '신장 질환',
    medicineList: [
      {
        id: '58694a0f-3da1-471f-bd96-145571ed72',
        name: '포시가',
        group: '만성 심부전 치료제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: ['아세트아미노펜', '이부프로펜', '티로프미드염산염'],
        company: '에이앤엘바이오',
        cost: 3000,
        left: 2,
      },
    ],
  },
  {
    disease: '통증 질환',
    medicineList: [
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: '코데인',
        group: '진통제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: ['아세트아미노펜', '이부프로펜', '티로프미드염산염'],
        company: '한국애브비',
        cost: 3000,
        left: 2,
      },
    ],
  },
];
const data2 = [
  {
    disease: '순환기계질환',
    medicineList: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: '록사렉스캡슐 75mg',
        group: '기관지 천식 치료제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: ['아세트아미노펜', '이부프로펜', '티로프미드염산염'],
        company: '팜젠사이언스',
        cost: 3000,
        left: 3,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: '로스파정',
        group: '기관지 확장제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: ['아세트아미노펜', '이부프로펜', '티로프미드염산염'],
        company: '영진약품',
        cost: 3000,
        left: 2,
      },
    ],
  },
  {
    disease: '신장 질환',
    medicineList: [
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: '포시가',
        group: '만성 심부전 치료제',
        effect: '교감신경성 기관지 확장제',
        combinedTaboo: '없음',
        ageTaboo: '12세미만',
        ingredients: ['아세트아미노펜', '이부프로펜', '티로프미드염산염'],
        company: '에이앤엘바이오',
        cost: 3000,
        left: 2,
      },
    ],
  },
];

const MainLogo = styled.div`
  margin-top: 20px;
  width: 150px;
`;

const Main: NextPage = () => {
  const router = useRouter();

  return (
    <>
      {
        <>
          <MainLogo>
            <Image
              src={'/images/mainLogo.png'}
              width={130}
              height={37}
              alt={'arrowRightBtn'}
            />
          </MainLogo>

          <MedicineList title="복용중인 약" data={data} />
          <MedicineList title="중복 약물" data={data2} />
        </>
      }
    </>
  );
};

export default Main;
