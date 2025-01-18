# Quiz Application

## Overview

This is a **Quiz Application** built using **React**. It provides users with an interactive way to answer quiz questions, track their progress, and view their results. The application is designed to be responsive and works on various devices such as desktops, tablets, and mobile phones. The app has a login page to authenticate users and a quiz page with a timer, multiple choice questions, and a results page that shows the user's score and attempted questions.

### Key Features:

- **User Authentication:** Login page to authenticate users.
- **Quiz Interface:** Dynamic question display with multiple-choice options.
- **Timer:** Countdown timer for each quiz session.
- **Results Display:** Score and individual question results are shown after the quiz.
- **Responsive Design:** Designed with media queries to work seamlessly across different screen sizes.

## Components Built

### 1. **Login Container**

- Allows users to log in to the application.
- Validates user credentials.
- Displays error messages for incorrect login.

### 2. **Quiz Container**

- Displays questions and options in a dynamic format.
- Allows users to select answers for each question.
- Includes a timer that counts down during the quiz.

### 3. **Results Container**

- Displays the user's score.
- Lists each question with whether the user answered it correctly or not.

### 4. **Navbar**

- A navigation bar that shows progress (Visited, Attempted, Unanswered) for each question.
- Allows users to jump between questions.

### 5. **Timer**

- A countdown timer is displayed during the quiz to limit the time for answering each question.

## Setup & Installation

To run this project locally, follow the steps below:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/quiz-app.git

   ```
2. **Navigate to the project directory:**

   ```bash
   cd quiz-app

   ```
3. **Install dependencies:**

   ```bash
   npm install

   ```
4. **Run the application:**

   ```bash
   npm start

   ```

## Assumptions Made

- User Authentication: This application assumes that a basic user authentication mechanism is in place. For the sake of simplicity, the login feature currently does not connect to an external database or authentication API, but rather handles static login details.
- Data Handling: The quiz questions and answers are stored as static data for simplicity. For a more complex application, data could be fetched from an API or a database.

## Challenges Faced & Solutions

1. Responsive Design:

- Challenge: Ensuring the application looks good on devices with various screen sizes, such as tablets and mobile phones.
- Solution: Implemented media queries in CSS to adjust layout, font sizes, and component positioning based on the screen width. This ensures a smooth experience on both small and large devices.

2. Navigation Between Questions:

- Challenge: Allowing users to easily navigate between questions in the quiz without losing progress.
- Solution: Used React Router to handle navigation, and customized the navigation buttons in the Navbar to allow users to jump between questions.

# Quiz Application

## Overview

This is a **Quiz Application** built using **React**. It provides users with an interactive way to answer quiz questions, track their progress, and view their results. The application is designed to be responsive and works on various devices such as desktops, tablets, and mobile phones. The app has a login page to authenticate users and a quiz page with a timer, multiple choice questions, and a results page that shows the user's score and attempted questions.

### Key Features:

- **User Authentication:** Login page to authenticate users.
- **Quiz Interface:** Dynamic question display with multiple-choice options.
- **Timer:** Countdown timer for each quiz session.
- **Results Display:** Score and individual question results are shown after the quiz.
- **Responsive Design:** Designed with media queries to work seamlessly across different screen sizes.

## Components Built

### 1. **Login Container**

- Allows users to log in to the application.
- Validates user credentials.
- Displays error messages for incorrect login.

### 2. **Quiz Container**

- Displays questions and options in a dynamic format.
- Allows users to select answers for each question.
- Includes a timer that counts down during the quiz.

### 3. **Results Container**

- Displays the user's score.
- Lists each question with whether the user answered it correctly or not.

### 4. **Navbar**

- A navigation bar that shows progress (Visited, Attempted, Unanswered) for each question.
- Allows users to jump between questions.

### 5. **Timer**

- A countdown timer is displayed during the quiz to limit the time for answering each question.

## Setup & Installation

To run this project locally, follow the steps below:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/quiz-app.git

   ```
2. **Navigate to the project directory:**

   ```bash
   cd quiz-app

   ```
3. **Install dependencies:**

   ```bash
   npm install

   ```
4. **Run the application:**

   ```bash
   npm start

   ```

## Assumptions Made

- User Authentication: This application assumes that a basic user authentication mechanism is in place. For the sake of simplicity, the login feature currently does not connect to an external database or authentication API, but rather handles static login details.
- Data Handling: The quiz questions and answers are stored as static data for simplicity. For a more complex application, data could be fetched from an API or a database.

## Challenges Faced & Solutions

1. Responsive Design:

- Challenge: Ensuring the application looks good on devices with various screen sizes, such as tablets and mobile phones.
- Solution: Implemented media queries in CSS to adjust layout, font sizes, and component positioning based on the screen width. This ensures a smooth experience on both small and large devices.

2. Navigation Between Questions:

- Challenge: Allowing users to easily navigate between questions in the quiz without losing progress.
- Solution: Used React Router to handle navigation, and customized the navigation buttons in the Navbar to allow users to jump between questions.
