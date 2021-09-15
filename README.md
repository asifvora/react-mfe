# React-mfe 
A micro frontend implementation for react js


[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![lerna](https://img.shields.io/badge/Lerna-blueviolet?style=for-the-badge&logo=lerna&logoColor=white)](https://lerna.js.org/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)




# Why?
### To scale with multiple teams in a micro services environment

- More cohesive codebase
- Simplify maintenance
- Allows to scale development teams
- Simplify updates
- Independent deploy

# Read more about <a href="https://microfrontends.com/ ">Micro frontends</a>


# App architecture 

- packages
    - core-ui
    - frontend-components    
        - feature-01
        - feature-02
        - feature-03
        - feature-04
        - feature-05
        - ...
    - shared-components

# Used tools technology and libraries 🙌
- Lerna 🐉
- React
- Redux
- TypeScript
- Rollup
- StyledComponent
- SCSS
- Storybook
- Router Config
- Some services and utils

### Install dependency :zap:
```bash
yarn
```

### Linking dependency :wrench:
```bash
yarn bootstrap
```

### Start core-ui app :rocket:
```bash
yarn start:core-ui
```

### Start feature-01 app :rocket:
```bash
yarn start:feature-01
```

### Build all packages :package: 
```bash
yarn build
```

## Docker build :whale:
```bash
docker build -t <docker-image-name> <filepath>
docker build -t react-mfe .
docker image ls
```

## Run a Container :whale:
```bash
docker run -d -p <Host port>:<Docker port> <docker-image-name>
docker run -d -p 9090:5000 react-mfe
<image-id>
```
## Check the running container :whale:
```bash
 docker ps -a
```