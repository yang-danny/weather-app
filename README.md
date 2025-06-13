# Weather App

A responsive React + TypeScript weather application that provides 7-day weather forecasts using the Open Meteo API.
## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```
2. Install dependencies:
```bash
-npm install
```
3. Start the development server:
```bash
-npm run dev
```
4. Open http://localhost:5137 in your browser
   
## Features

- 7-day weather forecast for any city
- Detailed weather information including:
  - Temperature (max/min)
  - Weather conditions with descriptions
  - Sunrise/sunset times
  - UV index
  - Wind speed
- Responsive design for desktop, tablet, and mobile
- Error handling and loading states
- Weather data caching (1 hour)

## Tech Stack

- React
- TypeScript
- Open Meteo API
- CSS3

## Project Structure
weather-app/ ├── src/ │ ├── API/ │ │ └── fetchWeather.ts # API integration logic │ ├── components/ │ │ └── WeatherCard.tsx # Weather card component │ ├── assets/ │ │ └── logo.png # App logo │ ├── App.tsx # Main application component │ ├── App.css # Styles │ └── index.tsx # Entry point └── package.json

## Project Summary
https://docs.google.com/document/d/1KoKh2so0D471w-fJjix1uB0-UTOtIWwcnQ_iv8NLaUo/edit?usp=sharing

