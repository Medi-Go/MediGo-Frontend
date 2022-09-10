import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import Calendar from '../../assets/nav/calendar_nav.svg';
import Graph from '../../assets/nav/graph_nav.svg';
import MyPage from '../../assets/nav/mypage_nav.svg';
import Ranking from '../../assets/nav/ranking_nav.svg';

const Container = styled.nav`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  padding: 0 20px;
`;

const NavigationHeader = () => {
  const router = useRouter();

  const routingPages = (event: Event): void => {
    const pageName: string = event.target.innerHTML;
    router.push(`/${pageName}`);
  };

  return (
    <Container>
      <List>
        <Item onClick={routingPages}>
          <Image src={MyPage} alt="mypage" />
          <div>main</div>
        </Item>
        <Item onClick={routingPages}>
          <Image src={Calendar} alt="calendar" />
          <div>calendar</div>
        </Item>
        <Item onClick={routingPages}>
          <Image src={Graph} alt="graph" />
          <div>graph</div>
        </Item>
        <Item onClick={routingPages}>
          <Image src={Ranking} alt="ranking" />
          <div>profile</div>
        </Item>
      </List>
    </Container>
  );
};

export default NavigationHeader;
