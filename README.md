# FP News v1

A basic news app implemented with React native (Typescript) 🥲 pardon my design skills.

# Table of contents

1.  Installation
2.  Project structure
3.  Usage/user story
4.  Author
5.  Features
6.  Tech stack
7.  Appendix

## Installation

- clone repo
  ```
      git clone https://github.com/AdamuAbba/lendsqr-fp-news.git
  ```
- install dependencies

  ```
      yarn
  ```

- run android build `locally`

  ```
      npx expo run:android
  ```

## Project structure

- Authentication Check Route
- Authentication Route
- Main Route

<img src="demo/splash_screen.jpg"  width="130" height="270"> <img src="demo/sign_up_1.jpg"  width="130" height="270"> <img src="demo/sign_up_2.jpg"  width="130" height="270"> <img src="demo/login.jpg"  width="130" height="270"> <img src="demo/load_screen.jpg"  width="130" height="270"> <img src="demo/news_listing_screen.jpg"  width="130" height="270"> <img src="demo/news_details_screen.jpg"  width="130" height="270"> <img src="demo/sign_out.jpg"  width="130" height="270">

## User story

- A user registers and signs in with [firebase Authentication](https://firebase.google.com/),
- Access to the `News Listing Screen` and `News Details Screen` are granted
- A user signs out with the sign out button on the top right corner of the screen

## Author

- [Abba Adamu](https://github.com/AdamuAbba)

## 🔗 Links

<a href="https://www.facebook.com/izshytypes" target="_blank">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="facebook" />
</a>
<a href="https://www.instagram.com/shytypes1028/" target="_blank">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" />
</a>
<a href="https://twitter.com/shytypes1028">
<img alt="twitter" src="https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" />
</a>
<a href="https://abbaportfolio.netlify.app/"  target="_blank">
<img alt="portfolio" src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/abba-adamu-365a9b17a/">
<img alt="linkedIn" src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

## Features

- Basic design
- Form state handling with [formik](https://formik.org)
- Basic form validation with [yup validation](https://github.com/jquense/yup)
- [firebase Authentication](https://firebase.google.com/)
- [firebase Firestore to store user credentials](https://firebase.google.com/)
- [firebase Crashlytics](https://firebase.google.com/)
- [firebase Analytics and navigation logging](https://firebase.google.com/)
- [firebase in app cloud messaging](https://firebase.google.com/)
- [RapidApi](https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/newscatcher) as service/api layer
- Redux state management for storing local data
- A button that breaks the app `Runtime Error`

## Tech Stack

**Client:** ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Server:** ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

[RapidApi](https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/newscatcher)

## Appendix

**Implementation summary:**

- RTKQuery for accessing api layer with data caching
- Each component is modularized

```
Component "folder level"
│   Component.test.tsx
│   Component.styles.ts
│   Component.tsx
│   index.tsx

```

- firebase in app messaging has been implemented successfully but not React native push notification due to project timeline

- all firebase implementations can be monitored from the Google developer console.
