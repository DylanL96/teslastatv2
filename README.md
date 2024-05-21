# Tesla Financials Project
A fun full-stack website that compiles important financial data and analyst price targets relating to Tesla ($TSLA) all in one place of the internet! I fetch important financial metrics such as gross margins, operating expenses, net income, retail and institutional price targets that allow people to easily see the financial health of TSLA and to make their own interpretations of the company.

The financial data relating to TSLA is sourced directly from HyperCharts (https://hypercharts.co/tsla).

The current stock price of TSLA is being fetched from Finnhub (https://finnhub.io)
This project provides a web application to view and analyze Tesla's financial data. The application is composed of two main components:

- Frontend: A user-facing web interface.

- Backend: A server that processes data and serves the frontend.

These components are containerized using Docker, and managed with Docker Compose for easy setup and deployment.

## Table of Contents
1. Prerequisites
2. Installation
3. Usage
4. Screenshots

## Prerequisites
Make sure you have the following installed on your system:

- Docker
- Docker Compose

## Installation
1.  Clone the repository
```
git clone https://github.com/DylanL96/teslastatv2.git
cd teslastatv2
```
2.  Build and start the containers
```
docker-compose up --build
```
- This command will:

  - Build the Docker images for both the frontend and backend.
  - Start the containers as defined in the docker-compose.yml file.


## Usage
Once the containers are up and running, you can access the application:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000


The frontend serves the user interface, while the backend handles API requests and data processing.

## Screenshots
![Test](https://i.imgur.com/jTFVCR1.png)
_Figure 1: Default page when user first enters the website_
![Test](https://i.imgur.com/Va30fVZ.png)
_Figure 2: Users can enter the number of TSLA shares they own to see updside/downside potential_
![Test](https://i.imgur.com/6u048Ld.png)
_Figure 3: Bar graph that shows historical revenue, gross profit and operating income of TSLA_
![Test](https://i.imgur.com/ymCzTcY.png)
_Figure 4: Line graph that shows the historical gross margin, operating margin and profit margin of TSLA_