import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Ưu đãi siêu khủng! Freeship cho các đơn hàng trên 500.000đ
    </Container>
  )
}

export default Announcement