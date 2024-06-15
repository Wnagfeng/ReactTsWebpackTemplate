import styled from 'styled-components'
export const NavbarWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  border-bottom: 1px solid #ccc;
  button {
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid black;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`
