import styled from "styled-components";
import { Collections } from "../Data";
import Collection from "./Collection";

const Container = styled.div`
  margin-top: 17rem;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 90px 10px;
`;

const Product = () => {
  return (
    <Container>
      {Collections.map((item) => (
        <Collection item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Product