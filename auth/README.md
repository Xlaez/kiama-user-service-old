# Kiama-network users service

<img src="../assets/logo/full/288ppi/Plan de travail 1.png"></img>

## Table of Contents
- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Installation](#installation)
- [License](#license)
- [Credits](#credits)

## Overview
> This repository contains the code for authentication service of the Kiama-network application.
## Repository Structure
The repository is structured as follows:
- `src/` contains the code for the authentication service.
```
├── src
│   ├── config
│   ├── controllers
│   ├── dtos
│   ├── exceptions
│   ├── http
│   ├── interfaces
│   ├── logs
│   ├── middlewares
│   ├── prisma
│   ├── queue
│   ├── routes
│   ├── services
│   ├── tests
│   ├── utils
├── docs
│   ├── none
│   │   ├── none
│   │   │   ├── none
│   │   └── none
│   │       ├── none
│   └── none
├── LICENSE
├── .gitignore
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Installation
> To install the users service, follow these steps:
- Clone the repository using the following command:
```bash
git clone
```
- Install the dependencies using the following command:
```bash
npm install
```
- Install globally prisma and dotenv-cli:
```bash
npm install -g prisma
npm install -g dotenv-cli
```
- Run the following commands:
```bash
npm run prisma:generate
npm run dev
```
- The service will be available on port 3000.

## License
This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.
[![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

## Credits
- Kiama-team
    - [Andry Rasolofomanana](https://github.com/Andryrasolofomanana)
    - [Utibe Abasi](https://github.com/Xlaez)