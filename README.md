<h1 align="center">React-mfe ✨️</h1>
<p align="center">A micro frontend implementation for react js</p>

<p align="center">
<a href="https://github.com/asifvora/react-mfe/blob/master/LICENSE" target="blank">
<img src="https://img.shields.io/badge/%20license-MIT%20-green" alt="react-mfe licence" />
</a>
<a href="https://github.com/asifvora/react-mfe/fork" target="blank">
<img src="https://img.shields.io/github/forks/asifvora/react-mfe?style=flat-square" alt="react-mfe forks"/>
</a>
<a href="https://github.com/asifvora/react-mfe/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/asifvora/react-mfe?style=flat-square" alt="react-mfe stars"/>
</a>
<a href="https://github.com/asifvora/react-mfe/issues" target="blank">
<img src="https://img.shields.io/github/issues/asifvora/react-mfe?style=flat-square" alt="react-mfe issues"/>
</a>
<a href="https://github.com/asifvora/react-mfe/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/asifvora/react-mfe?style=flat-square" alt="react-mfe pull-requests"/>
</p>

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


# 📖  App architecture 

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

# 💻 Built With  
- [Lerna 🐉](https://lerna.js.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)
- [Styled Component](https://styled-components.com/)
- [SCSS](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)
- [Router](https://reactrouter.com/)
- Some services and utils

# 🛠️ Installation Steps

### Clone the repository ⎘
```bash
git clone https://github.com/asifvora/react-mfe.git

```

### Change the working directory 📂
```bash
cd react-mfe
```

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

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.


# :whale: Docker
## Build
```bash
docker build -t <docker-image-name> <filepath>
docker build -t react-mfe .
docker image ls
```

## Run a Container
```bash
docker run -d -p <Host port>:<Docker port> <docker-image-name>
docker run -d -p 9090:5000 react-mfe
<image-id>
```
## Check the running container
```bash
 docker ps -a
```

# 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

# 👨‍💻 Author
### 👤 Asif Vora
- Github: [@asifvora](https://github.com/asifvora)
- LinkedIn: [@asif-vora](https://www.linkedin.com/in/asif-vora/)
- Twitter: [@007_dark_shadow](https://twitter.com/007_dark_shadow)
- Instagram: [@007_dark_shadow](https://www.instagram.com/007_dark_shadow/)

# 🍰 Contributing

- Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/asifvora/react-mfe/compare).

- Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details.

# 🙏 Support
This project needs a ⭐️  from you. Don't forget to leave a star ⭐️