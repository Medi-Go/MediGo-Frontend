import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMedicineDetail } from '../../apis/medicine';
import { DetailsType } from '../../interfaces/detail';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';

const MedicineDetailContainer = styled.div`
  margin: 2.4rem 2rem;
`;

const MedicineNameText = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #385885;
  margin-bottom: 0.8rem;
`;

const MedicineGroupText = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #929292;
`;

const MedicineInfoCaseContainer = styled.div``;

const MedicineIngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) =>
    props.ingredientClicked ? 'flex-start' : 'center'};
  justify-content: space-between;
`;

const MedicineKpictWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.kpicClicked ? 'flex-start' : 'center')};
  justify-content: space-between;
`;

const MedicineIngredientInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  color: #929292;
`;

const InfoList = styled.div`
  padding: 1rem;
  border: 1px solid #929292;
  border-radius: 2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MultiInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => (props.ingredientClicked ? '0' : '1rem')};
  :last-child {
    margin-bottom: 0;
  }
`;

const InfoIdxText = styled.div`
  color: #595959;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 1.5rem;
`;

const CategoryTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #000000;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
`;

const IngredientIconButton = styled(IconButton)`
  visibility: ${(props) => (props.isOverOne ? 'visible' : 'hidden')};
`;

const TabooContainer = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  background-color: #f3f5fc;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: 2px 4px 5px 1px lightgray;
`;

const TabooWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #c4ccdc;
  :last-child {
    border: none;
  }
`;

const TabooTitleText = styled.div`
  font-size: 0.85rem;
  font-weight: bold;
  color: #595959;
  margin-bottom: 0.3rem;
`;

const TabooInfoText = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  color: #929292;
`;

const Medicine = () => {
  const router = useRouter();
  const defaultObject: DetailsType = {
    medicineId: 0,
    medicineEffect: '',
    medicineName: '',
    medicineInfoCases: [],
  };
  const [details, setDetails] = useState(defaultObject);
  const [ingredientClicked, setIngredientClicked] = useState(false);
  const [kpicClicked, setKpicClicked] = useState(false);

  useEffect(() => {
    const getMedicineDetailData = async () => {
      const detailsData = await getMedicineDetail(
        Number(router.query.medicineId),
      );
      setDetails(detailsData);
    };
    getMedicineDetailData();
  }, [router.query.medicineId]);

  const handleIngredientClicked = () => {
    setIngredientClicked(!ingredientClicked);
  };

  const handleKpicClicked = () => {
    setKpicClicked(!kpicClicked);
  };

  return (
    <>
      {details !== defaultObject && (
        <MedicineDetailContainer>
          <MedicineNameText>{details.medicineName}</MedicineNameText>
          <MedicineInfoCaseContainer>
            {details.medicineInfoCases.map((medicineInfoCase) => (
              <div key={details.medicineId}>
                <MedicineGroupText>
                  {medicineInfoCase.medicineGroup}
                </MedicineGroupText>
                <CategoryTitle>성분정보</CategoryTitle>
                <InfoList>
                  {!ingredientClicked ? (
                    <MedicineIngredientWrapper
                      ingredientClicked={ingredientClicked}
                    >
                      <InfoWrapper>
                        <InfoIdxText>{1}</InfoIdxText>
                        <InfoText>
                          {medicineInfoCase.ingredientInfos[0].ingredientName}
                        </InfoText>
                      </InfoWrapper>
                      <IngredientIconButton
                        size="small"
                        style={{
                          color: 'black',
                          padding: 0,
                        }}
                        isOverOne={medicineInfoCase.ingredientInfos.length > 1}
                        onClick={handleIngredientClicked}
                      >
                        <KeyboardArrowDownIcon />
                      </IngredientIconButton>
                    </MedicineIngredientWrapper>
                  ) : (
                    <MedicineIngredientWrapper
                      ingredientClicked={ingredientClicked}
                    >
                      <MedicineIngredientInfos>
                        {medicineInfoCase.ingredientInfos.map(
                          (ingredient, idx) => (
                            <MultiInfoWrapper key={idx}>
                              <InfoIdxText>{idx + 1}</InfoIdxText>
                              <InfoText>{ingredient.ingredientName}</InfoText>
                            </MultiInfoWrapper>
                          ),
                        )}
                      </MedicineIngredientInfos>
                      <IngredientIconButton
                        size="small"
                        style={{
                          color: 'black',
                          padding: 0,
                        }}
                        isOverOne={medicineInfoCase.ingredientInfos.length > 1}
                        onClick={handleIngredientClicked}
                      >
                        <KeyboardArrowUpIcon />
                      </IngredientIconButton>
                    </MedicineIngredientWrapper>
                  )}
                </InfoList>
                <CategoryTitle>Kpic정보</CategoryTitle>
                <InfoList>
                  {medicineInfoCase.kpicInfos.length === 0 ? (
                    <InfoText>없음</InfoText>
                  ) : (
                    <>
                      {!kpicClicked ? (
                        <MedicineKpictWrapper kpicClicked={kpicClicked}>
                          <InfoWrapper>
                            <InfoIdxText>{1}</InfoIdxText>
                            <InfoText>
                              {medicineInfoCase.kpicInfos[0].kpic}
                            </InfoText>
                          </InfoWrapper>
                          <IngredientIconButton
                            size="small"
                            style={{
                              color: 'black',
                              padding: 0,
                            }}
                            isOverOne={medicineInfoCase.kpicInfos.length > 1}
                            onClick={handleKpicClicked}
                          >
                            <KeyboardArrowDownIcon />
                          </IngredientIconButton>
                        </MedicineKpictWrapper>
                      ) : (
                        <MedicineKpictWrapper kpicClicked={kpicClicked}>
                          <MedicineIngredientInfos>
                            {medicineInfoCase.kpicInfos.map((kpic, idx) => (
                              <MultiInfoWrapper key={idx}>
                                <InfoIdxText>{idx + 1}</InfoIdxText>
                                <InfoText>{kpic.kpic}</InfoText>
                              </MultiInfoWrapper>
                            ))}
                          </MedicineIngredientInfos>
                          <IngredientIconButton
                            size="small"
                            style={{
                              color: 'black',
                              padding: 0,
                            }}
                            isOverOne={medicineInfoCase.kpicInfos.length > 1}
                            onClick={handleKpicClicked}
                          >
                            <KeyboardArrowUpIcon />
                          </IngredientIconButton>
                        </MedicineKpictWrapper>
                      )}
                    </>
                  )}
                </InfoList>
                <CategoryTitle>유의사항</CategoryTitle>
                <TabooContainer>
                  {medicineInfoCase.durInfos.map((durInfo) => (
                    <>
                      <TabooWrapper>
                        <TabooTitleText>연령금기</TabooTitleText>
                        <TabooInfoText>{durInfo.ageTaboo}</TabooInfoText>
                      </TabooWrapper>
                      <TabooWrapper>
                        <TabooTitleText>병용금기</TabooTitleText>
                        <TabooInfoText>{durInfo.combinedTaboo}</TabooInfoText>
                      </TabooWrapper>
                      <TabooWrapper>
                        <TabooTitleText>임부금기</TabooTitleText>
                        <TabooInfoText>{durInfo.pregnantTaboo}</TabooInfoText>
                      </TabooWrapper>
                    </>
                  ))}
                </TabooContainer>
                <CategoryTitle>형태</CategoryTitle>
                <InfoText>{medicineInfoCase.shape}</InfoText>
              </div>
            ))}
          </MedicineInfoCaseContainer>
        </MedicineDetailContainer>
      )}
    </>
  );
};

export default Medicine;
