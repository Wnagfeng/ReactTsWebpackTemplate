import styled from 'styled-components'
// 这种方式不会造成样式的污染 但是写法有一内内复杂
export const PageAWrapper = styled.div`
  button {
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }
  width: 100%;
  .state {
    width: 100%;
    text-align: center;
    p {
      margin-top: 10px;
    }
    border-bottom: 1px solid #ccc;
  }
  .ctrl {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .axios {
    margin-top: 20px;
    text-align: center;
  }
`
