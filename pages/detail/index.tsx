import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMedicineDetail } from '../../apis/medicine';

const MedicineDetailContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const MedicineNameText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
`;

const EffectView = styled.div`
  display: flex;
  flex-direction: row;
`;

const EffectText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin-top: 10px;
`;

const TabooTitleText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
  margin-top: 20px;
`;

const TabooView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

const AgeTabooView = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  width: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AgeTabooText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const CombinedTabooView = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  width: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CombinedTabooText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const IngredientTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
  margin-top: 20px;
`;

const IngredientList = styled.div`
  background-color: #d2e9ff;
  width: 80%;
  height: 25%;
  margin-top: 20px;
`;

const IngredientText = styled.div`
  font-size: 18px;
  color: #595959;
`;

const OthersView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`;

const CompanyTitleText = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #595959;
  margin-top: 20px;
`;

const CompanyText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 20px;
`;

const CostView = styled.div``;

const CostTitleText = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #595959;
  margin-top: 20px;
`;

const CostText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 20px;
`;

const Detail = () => {
  const router = useRouter();
  const [details, setDetails] = useState('');
  useEffect(() => {
    const getMedicineDetailData = async () => {
      const detailsData = await getMedicineDetail(
        Number(router.query.medicineId),
      );
      console.log('detailData', detailsData);
      setDetails(detailsData);
    };
    getMedicineDetailData();
  }, []);

  return (
    <>
      {details && (
        <MedicineDetailContainer>
          <MedicineNameText>{details.medicineName}</MedicineNameText>
          <EffectView>
            <EffectText>
              {details.medicineInfoCases[0].medicineGroup} |{' '}
            </EffectText>
            <EffectText>{details.medicineEffect}</EffectText>
          </EffectView>
          <TabooTitleText>유의사항</TabooTitleText>
          <TabooView>
            <AgeTabooView>
              <AgeTabooText>연령금기</AgeTabooText>
              <AgeTabooText>
                {details.medicineInfoCases[0].durInfos[0].ageTaboo}
              </AgeTabooText>
            </AgeTabooView>
            <CombinedTabooView>
              <CombinedTabooText>병용금기</CombinedTabooText>
              <CombinedTabooText>
                {details.medicineInfoCases[0].durInfos[0].combinedTaboo}
              </CombinedTabooText>
            </CombinedTabooView>
          </TabooView>
          <IngredientTitle>성분정보</IngredientTitle>
          <IngredientList>
            {details.medicineInfoCases[0].ingredientInfos.map((ingredient) => (
              <IngredientText>{ingredient.ingredientName}</IngredientText>
            ))}
          </IngredientList>

          <OthersView>
            <div>
              <CompanyTitleText>형태</CompanyTitleText>
              <CompanyText>{details.medicineInfoCases[0].shape}</CompanyText>
            </div>
            <div>
              <CostTitleText>급여정보</CostTitleText>
              <CostText>{details.medicineInfoCases[0].payInfo}원</CostText>
            </div>
          </OthersView>
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default Detail;
