# XeroCodee Full Stack Assignment

## Introduction
This project is aimed at developing a comprehensive full-stack application that includes a secure login system, cloud provider selection with progress tracking, and a responsive UI with optimized codebase. It utilizes various technologies and techniques to achieve these functionalities.

## Table of Contents
1. [Login System](#login-system)
2. [Progress Bar and Animations (Dashboard)](#progress-bar-and-animations-dashboard)
3. [Architecture](#architecture)
4. [Usage](#usage)
5. [Optimization & Responsiveness](#optimization--responsiveness)
6. [Contributing](#contributing)

## Login System
The login system implements secure sign-up and sign-in functionality using JSON Web Tokens (JWT). Additionally, social login through Github and Google OAuth is integrated to provide multiple authentication options. For data storage, Redis is used for caching while DynamoDB or MongoDB serve as the persistent database choices.

## Progress Bar and Animations (Dashboard)
### Cloud Provider Selection
Users are presented with various cloud provider options (e.g., AWS, GCP) with a slide-in animation effect. Upon selection, the progress bar updates to 40%.

### Step 2 Options
Based on the cloud provider chosen, corresponding options are displayed with a slide-down animation effect. Progress advances to 80% upon selection.

### Finalize Selection
In the final step, additional options or configurations are revealed based on earlier choices. The progress bar completes to 100% upon making the final selection.

## Architecture
- **Frontend**: HTML/CSS/JavaScript (using React for this implementation)
- **Backend**: Node.js (Express framework)
- **Authentication**: JWT for token-based authentication
- **Database Layer**: Redis for caching, and DynamoDB or MongoDB for storage
- **OAuth Integration**: Github OAuth for social login

## Usage
### Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for authentication keys, database connections, etc.
4. Run the application with `npm start`.

## Optimization & Responsiveness
Efforts have been made to optimize the codebase for efficiency and maintainability. Responsive design techniques have been employed to ensure UI adaptability across various screen sizes, including 13, 14, 16, and 21-inch web views.

## Contributing
We welcome contributions, bug reports, or feature requests. Feel free to fork the repository and submit pull requests.

---

This documentation provides an overview of the project's components, functionality, and setup instructions. For more detailed information, refer to specific sections in the codebase or reach out to the project contributors.

XeroCodee
 .next
 node_modules
 public
 src
  app
   api/auth/[...nextauth]
    route.ts
   SignUp
    page.tsx
   SignIn
    page.tsx
  assets
  styles
  .env
  .eslintrc.json
  .gitignore
  next-env.d.ts
  next.config.js
  package-lock.json
  package.json
  postcss.config.js
  README.md
  tailwind.config.ts
  tsconfig.json
  
 
