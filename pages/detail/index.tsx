import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMedicineDetail } from '../../apis/medicine';
import { DetailsType } from '../../interfaces/detail';

const MedicineDetailContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const MedicineNameText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
`;

const MedicineInfoCaseContainer = styled.div``;

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

const DurInfoContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AgeTabooText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: #595959;
`;

const TabooContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CombinedTabooText = styled.div`
  font-size: 18px;
  color: #595959;
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
  const defaultObject: DetailsType = {
    medicineId: 0,
    medicineEffect: '',
    medicineName: '',
    medicineInfoCases: [],
  };
  const [details, setDetails] = useState(defaultObject);
  useEffect(() => {
    const getMedicineDetailData = async () => {
      const detailsData = await getMedicineDetail(
        Number(router.query.medicineId),
      );
      console.log('detailData', detailsData);
      setDetails(detailsData);
    };
    getMedicineDetailData();
    console.log();
  }, [router.query.medicineId]);

  return (
    <>
      {details !== defaultObject && (
        <MedicineDetailContainer>
          <MedicineNameText>{details.medicineName}</MedicineNameText>
          <MedicineInfoCaseContainer>
            {details.medicineInfoCases.map((medicineInfoCase, idx) => (
              <>
                <EffectText key={idx}>
                  {medicineInfoCase.medicineGroup}
                </EffectText>
                <TabooTitleText>유의사항</TabooTitleText>
                <TabooView>
                  <DurInfoContainer>
                    {medicineInfoCase.durInfos.map((durInfo) => (
                      <>
                        <TabooContainer>
                          <AgeTabooText>연령금기</AgeTabooText>
                          {durInfo.ageTaboo}
                          <AgeTabooText></AgeTabooText>
                        </TabooContainer>
                        <TabooContainer>
                          <CombinedTabooText>병용금기</CombinedTabooText>
                          <CombinedTabooText>
                            {durInfo.combinedTaboo}
                          </CombinedTabooText>
                        </TabooContainer>
                      </>
                    ))}
                  </DurInfoContainer>
                </TabooView>
                <IngredientTitle>성분정보</IngredientTitle>
                <IngredientList>
                  {medicineInfoCase.ingredientInfos.map((ingredient, idx) => (
                    <IngredientText key={idx}>
                      {ingredient.ingredientName}
                    </IngredientText>
                  ))}
                </IngredientList>

                <OthersView>
                  <div>
                    <CompanyTitleText>형태</CompanyTitleText>
                    <CompanyText>{medicineInfoCase.shape}</CompanyText>
                  </div>
                  <div>
                    <CostTitleText>급여정보</CostTitleText>
                    <CostText>{medicineInfoCase.payInfo}원</CostText>
                  </div>
                </OthersView>
              </>
            ))}
          </MedicineInfoCaseContainer>
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default Detail;
