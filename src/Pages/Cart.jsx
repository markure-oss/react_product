import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`
  
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "Black" : "transparent"}
  color: ${(props) => props.type === "filled" && "White"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div` 
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  heigth: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button` 
  width: 100%;
  padding: 10px;
  background-color: Black;
  color: White;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Thanh Toán</Title>
        <Top>
          <TopButton>TIẾP TỤC MUA</TopButton>
          <TopTexts>
            <TopText>Giỏ Hàng (2)</TopText>
            <TopText>Danh Sách (0)</TopText>
          </TopTexts>
          <TopButton type="filled">THANH TOÁN NGAY</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21tshw007-black-1_1.jpg" />
                <Details>
                  <ProductName>
                    <b>Sản Phẩm:</b> ÁO THUN BASIC THÊU
                  </ProductName>
                  <ProductId>
                    <b>Mã Sản Phẩm:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://routine.vn/media/catalog/product/cache/a2fcefb561dcc03dd69ce08e688653ae/1/0/10s21drew001_-_olive-8.jpg" />
                <Details>
                  <ProductName>
                    <b>Sản Phẩm:</b> ĐẦM SATIN TÀ CAO THẤP
                  </ProductName>
                  <ProductId>
                    <b>Mã Sản Phẩm:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>CHI TIẾT GIỎ HÀNG</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Tạm Tính</SummaryItemText>
              <SummaryItemPrice>1.532.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Phí Vận Chuyển</SummaryItemText>
              <SummaryItemPrice>32.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Voucher Giảm Giá</SummaryItemText>
              <SummaryItemPrice>350.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Tổng Thanh Toán</SummaryItemText>
              <SummaryItemPrice>1.150.000đ</SummaryItemPrice>
            </SummaryItem>
            <Button>TIẾP THEO</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Cart