import React from 'react'
import styled from 'styled-components'
// import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';


const Container = styled.div`
  height: 60px;
`
const Wrapp = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start-end;
`
const Language = styled.span`
  font-size: 14px;
  display: inline;
  margin: 15px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Logo = styled.img`
  
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapp>
        <Left>
          <Language>NAM</Language>
          <Language>NỮ</Language>
          <Language>NEW ARRIVALS</Language>
          <Language>COLLECTION</Language>
          <Language>SUMMER SALE</Language>
        </Left>
        
        <Center>
          <Logo src="https://routine.vn/media/logo/websites/1/ezgif-7-ee007e6332a0_2x.png" />
        </Center>
        <Right>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
          <MenuItem>ĐĂNG NHẬP</MenuItem>
          <MenuItem>TRỢ GIÚP</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapp>
    </Container>
  )
}

export default Navbar