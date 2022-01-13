# skydrop_dashboard_frontend

## **Introduction**
SkyDrop is an automated UAV delivery system designed for a specific apartment building. This system allows parcels to be delivered from the apartment gate/security room to the destination apartment balcony by a UAV. </br>
The complete system consist of an autonomous UAV system and a dashboard to send commands to the UAV. This repository contains the implementation related to the frontend of the dashboard. </br>

**Technologies:** React

<!-- Brunner et al. -->
This work is based on the work done by Brunner et al., 2019[^1][^2]. In our project, we are trying to improve their work further more by considering the suggestions mentioned by them in their research paper along with our own ideas.</br>

[^1]: **Research Paper of Brunner et al. work:** [Link to the research paper](https://arxiv.org/pdf/1809.08022.pdf)</br>
Brunner, G., Szebedy, B., Tanner, S. and Wattenhofer, R., 2019, June. The urban last mile problem: Autonomous drone delivery to your balcony. In 2019 international conference on unmanned aircraft systems (icuas) (pp. 1005-1012). IEEE.

[^2]: **GitHub Repository of Brunner et al. work:** [Link to the repository](https://github.com/szebedy/autonomous-drone)

## **Setting up the local environment**
The following tools and softwares should be installed in the local machine (If you haven't already installed when setting up the skydrop server project).
- Node.js v16.x: ([NodeJS installation instructions](https://github.com/nodesource/distributions/blob/master/README.md#:~:text=install%20%2Dy%20nodejs-,Node.js%20v16.x%3A,-%23%20Using%20Ubuntu%0Acurl))</br>
Make sure that you have successfully installed both Node and NPM by running ```node -v``` and ```npm --version```.

## **Instructions to clone and run the project on the local machine**
**Step 01:** Create a folder to hold the backend and the frontend projects of SkyDrop (If you havent't already done this when setting up the skydrop server project)
```
mkdir ~/Skydrop
```
**Step 02:** Clone the project
```
cd ~/Skydrop
git clone git@github.com:SkydropDroneDeliveries/skydrop_dashboard_frontend.git
```

**Step 03:** Running the project
```
cd ~/Skydrop/skydrop_dashboard_frontend
npm install
npm run start
```
The frontend will start on port 3000 (http://localhost:3000).

_____________________________________________________________________
## Minimal [(Free version)](https://minimal-kit-react.vercel.app/)

![license](https://img.shields.io/badge/license-MIT-blue.svg)

> Free React Admin Dashboard made with Material-UI components and React.

![preview](public/static/preview.png)

| [Minimal Free](https://minimal-kit-react.vercel.app/) | [Minimal](https://material-ui.com/store/items/minimal-dashboard/) |
| ----------------------------------------------------- | :---------------------------------------------------------------- |
| **7** Demo pages                                      | **42+** demo pages                                                |
| -                                                     | ✓ Multi-language                                                  |
| -                                                     | ✓ Dark/Light Mode 🌓                                              |
| -                                                     | ✓ [More components](https://minimals.cc/components)               |
| -                                                     | ✓ TypeScript version                                              |
| -                                                     | ✓ Design files (Figma & Sketch)                                   |

## Page demo

- [Dashboard](https://minimal-kit-react.vercel.app/dashboard/app)
- [Users](https://minimal-kit-react.vercel.app/dashboard/user)
- [Product](https://minimal-kit-react.vercel.app/dashboard/products)
- [Blog](https://minimal-kit-react.vercel.app/dashboard/blog)
- [Login](https://minimal-kit-react.vercel.app/login)
- [Register](https://minimal-kit-react.vercel.app/register)
- [Not Found](https://minimal-kit-react.vercel.app/404)

## Getting started

- Recommended `node js 14+` and `npm 6+`
- Install dependencies: `npm install` or `yarn install`
- Start the server: `npm run start` or `yarn start`

## License

Distributed under the MIT License. See [LICENSE](https://github.com/minimal-ui-kit/minimal.free/blob/main/LICENSE.md) for more information.

## Contact us

Email Us: support@minimals.cc
