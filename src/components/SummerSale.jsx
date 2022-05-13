import styled from "styled-components";
import { SummerCollection } from "../Data";
import SummerSale_item from "../components/SummerSale_item";

const Container = styled.div`
  margin-top: 17rem;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 90px 10px;
`;
const SummerSale = () => {
  return (
    <Container>
      {SummerCollection.map((item) => (
        <SummerSale_item item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default SummerSale