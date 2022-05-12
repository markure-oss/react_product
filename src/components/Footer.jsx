import {
  Language,
  LanguageSharp,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Languages = styled.h4`
  margin: 0 30px 10px;
`;
// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Image = styled.img``;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <Image src="https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png" />
        </Logo>
        <Desc>
          Công Ty TNHH Routine Việt Nam | Mã Số Thuế: 4657234 <br />
          Địa Chỉ Văn Phòng:
          <ul>
            <li>số 1: Tầng 35,Tòa Nhà ICM</li>
            <li>Số 110, Phố Huế, Hai Bà Trưng, Hà Nội</li>
          </ul>
        </Desc>
        <SocialContainer>
          <Languages>
            Facebook
          </Languages>
          <Languages>
            Instagram
          </Languages>
          {/* <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon> */}
        </SocialContainer>
      </Left>
      <Center>
        <Title>Công Ty</Title>
        <List>
          <ListItem>Giới thiệu về Routine</ListItem>
          <ListItem>Tuyển dụng</ListItem>
          <ListItem>Tin tức</ListItem>
          <ListItem>Chăm sóc khách hàng</ListItem>
          <ListItem>Liên hệ</ListItem>
          <ListItem>Chính sách khách hàng thân thiết</ListItem>
          <ListItem>Chính sách đổi & trả hàng</ListItem>
          <ListItem>Chính sách bảo mật</ListItem>
          <ListItem>Chính sách bảo hành</ListItem>
          <ListItem>Câu hỏi thường gặp</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Thông Tin Cửa Hàng</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Số 110, Phố Huế, Hai bà Trưng, Hà Nội
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 0254568888
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> ContactRoutine.@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;