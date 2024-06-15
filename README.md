# React+Ts+Webpack项目模板

| 系统环境 |     版本     |
| :------: | :----------: |
|  NodeJs  |   v16.20.2   |
|  React   | react@18.3.1 |
|   Npm    |    8.19.4    |
|          |              |

## 项目配置包含

- React
- Typescript
- Webpack
- Less
- Sass
- ESLint
- Prettier
- Husky
- Commitlint
- Reduxjs/toolkit 

## 项目启动

```shell
npm install
npm run start --启动
npm run prettier --代码格式化
npm run build --打包
```

## 项目所需代码片段

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

## 项目详解

- 如果你看想看看Loading组件 你可以将network网络调为3G 然后刷新页面 你会看到Loading组件的效果

- 如果你是专业的React开发者，你在Store中的index中你应该就知道怎么使用Redux了，如果你不是 建议你在使用Redux的时候 先看看PageA示例

  ```tsx
  import { useAppSelector } from '@/store/index'
  const PageA: FC<IProps> = (props) => {
    const { count, message } = useAppSelector((state) => {
      return {
        count: state.counter.count,
        message: state.counter.message
      }
    }, shallowEqual)
    return (
      <div>
        PageA{count},{message}
      </div>
    )
  }
  ```

  

