import { useRouter } from 'next/router';
import styled from 'styled-components';

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

  const routingPages = (event): void => {
    const pageName: string = event.target.innerHTML;
    router.push(`/${pageName}`);
  };

  return (
    <Container>
      <List>
        <Item onClick={routingPages}>
          <div>main</div>
        </Item>
        <Item onClick={routingPages}>
          <div>calendar</div>
        </Item>
        <Item onClick={routingPages}>
          <div>graph</div>
        </Item>
        <Item onClick={routingPages}>
          <div>profile</div>
        </Item>
      </List>
    </Container>
  );
};

export default NavigationHeader;
