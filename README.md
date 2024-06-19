
<div  class="box"  style="    display: flex;    justify-content: center;    align-items: center;    flex-direction: column; ">  <h1 align="center">Welcome to VuecomponentLibs 👋</h1> 
     <h2 align="center"> 一款开箱即用的React+Ts+Webpack开发模板  😀</h2> 
     <h2 align="center"> CoderJoon  🐂</h2> 


| 系统环境 |     版本     |
| :------: | :----------: |
|  NodeJs  |   v16.20.2   |
|  React   | react@18.3.1 |
|   Npm    |    8.19.4    |
|          |              |

## 项目启动

```shell
npm install
npm run start --启动
npm run prettier --代码格式化
npm run build --打包
```

## 项目所需代码片段

快速生成Function Component

```json
"ReactTypeScript": {
  "prefix": "rtfc",
  "body": [
    "import React, { FC, memo } from 'react'",
    "",
    "interface IProps {",
    "  children?: React.ReactNode",
    "}",
    "const ${1:Home}: FC<IProps> = (props) => {",
    "  return <div>${1:Home}</div>",
    "}",
    "",
    "export default memo(${1:Home})",
    ""
  ],
  "description": "ReactTypeScript"
}
```

快速生成Css in Js 样式解决方案

```json
"ReactCss": {
  "prefix": "rsc",
  "body": [
    "import styled from 'styled-components'",
    "export const  ${1:XXXWrapper}= styled.div`",
    "",
    "`",
    ""
  ],
  "description": "ReactCss"
}
```

## 项目详解

- 对于Action的处理：

  我们将所有的异步Action统一使用createAsyncThunk(详见PageA)

  ```react
  export const FetchChangePersonlist = createAsyncThunk(
    'counter/fetchChangePersonlist',
    (payload, { dispatch }) => {
      // 在这里发起请求，获取数据
      // getxxx().then((res) => {
      //   dispatch(xxxxAction(res.data))
      // })
      setInterval(() => {
        dispatch(
          changepersonlistAction([
            { id: 1, name: '张三', age: 25 },
            { id: 3, name: '王五', age: 28 }
          ])
        )
      }, 1000)
    }
  )
  ```

