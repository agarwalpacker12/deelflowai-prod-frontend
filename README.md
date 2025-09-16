# DeelflowAI Frontend

This is the React.js frontend for the DeelflowAI Real Estate Wholesaling Platform. It provides a modern, scalable interface with AI-powered features, user authentication, billing, analytics, and more.

---

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Authentication & Authorization**: Secure login, protected routes, role-based navigation.
- **AI Modules**: Vision AI, Voice AI, NLP Center, and customizable AI settings.
- **Billing & Subscription**: Integrated billing and subscription management.
- **Analytics**: Real-time analytics dashboards.
- **User & Organization Management**: Manage users, roles, tenants, and organization settings.
- **Web3 Integration**: Blockchain features via Web3 context.
- **SaaS Management**: Tenant and role management for super admins.
- **Responsive UI**: Built with Tailwind CSS and reusable UI components.
- **State Management**: Redux and React Contexts.
- **API Integration**: React Query for efficient data fetching and caching.

---

## Folder Structure
Collecting workspace informationFiltering to most relevant informationHere’s a detailed README.md for your project, based on your workspace structure and code excerpts:

```md
# DeelflowAI Frontend

This is the React.js frontend for the DeelflowAI Real Estate Wholesaling Platform. It provides a modern, scalable interface with AI-powered features, user authentication, billing, analytics, and more.

---

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Authentication & Authorization**: Secure login, protected routes, role-based navigation.
- **AI Modules**: Vision AI, Voice AI, NLP Center, and customizable AI settings.
- **Billing & Subscription**: Integrated billing and subscription management.
- **Analytics**: Real-time analytics dashboards.
- **User & Organization Management**: Manage users, roles, tenants, and organization settings.
- **Web3 Integration**: Blockchain features via Web3 context.
- **SaaS Management**: Tenant and role management for super admins.
- **Responsive UI**: Built with Tailwind CSS and reusable UI components.
- **State Management**: Redux and React Contexts.
- **API Integration**: React Query for efficient data fetching and caching.

---

## Folder Structure

```
index.html
postcss.config.js
README.md
tailwind.config.js
vite-error-handler.js
vite-hmr-client.js
vite.config.js
public/
  favicon.ico
  logo.jpeg
src/
  App.jsx
  index.css
  index.jsx
  setupTests.js
  components/
    Auth/
    Layout/
    UI/
  contexts/
    AIContext.jsx
    AuthContext.jsx
    PsychologyContext.jsx
    Web3Context.jsx
  lib/
    react-query-client.js
  pages/
    Payment.jsx
    Achievement/
    Advance/
    AI/
    Ai-settings/
    Analytics/
    Auth/
    Billing/
    Blockchain/
    ...
  services/
  store/
  utils/
```

- **components/**: Reusable UI and layout components.
- **contexts/**: React Context providers for global state (AI, Auth, Psychology, Web3).
- **lib/**: Library utilities (e.g., React Query client).
- **pages/**: Route-based pages (AI, Billing, Analytics, etc.).
- **services/**: API and business logic services.
- **store/**: Redux store configuration.
- **utils/**: Utility functions and helpers.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/) (used as the build tool)

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-org/deelflowai-prod-frontend.git
   cd deelflowai-prod-frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

---

## Running the Development Server

Start the Vite development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Building for Production

To build the application for production:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

---

## Testing

Unit tests are set up with Jest and React Testing Library.

To run tests:

```sh
npm test
# or
yarn test
```

Test configuration is in [`src/setupTests.js`](src/setupTests.js).

---

## Configuration

- **Tailwind CSS**: See [`tailwind.config.js`](tailwind.config.js) and [`postcss.config.js`](postcss.config.js).
- **Vite**: See [`vite.config.js`](vite.config.js).
- **Environment Variables**: Place your `.env` files in the root directory.

---

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `test`: Run unit tests
- `lint`: Lint codebase (if configured)

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

For questions or support, please contact [support@deelflowai.com](mailto:support@deelflowai.com).

```

You can further customize the sections as needed for your team or deployment.
- **components/**: Reusable UI and layout components.
- **contexts/**: React Context providers for global state (AI, Auth, Psychology, Web3).
- **lib/**: Library utilities (e.g., React Query client).
- **pages/**: Route-based pages (AI, Billing, Analytics, etc.).
- **services/**: API and business logic services.
- **store/**: Redux store configuration.
- **utils/**: Utility functions and helpers.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/) (used as the build tool)

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-org/deelflowai-prod-frontend.git
   cd deelflowai-prod-frontend

Install dependencies:
Running the Development Server
Start the Vite development server:

The app will be available at http://localhost:5173 (default Vite port).

Building for Production
To build the application for production:

The output will be in the dist/ folder.

Testing
Unit tests are set up with Jest and React Testing Library.

To run tests:

Test configuration is in src/setupTests.js.

Configuration
Tailwind CSS: See tailwind.config.js and postcss.config.js.
Vite: See vite.config.js.
Environment Variables: Place your .env files in the root directory.
Scripts
dev: Start development server
build: Build for production
test: Run unit tests
lint: Lint codebase (if configured)
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/my-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/my-feature).
Open a pull request.
License
This project is licensed under the MIT License. See LICENSE for details.

Contact
For questions or support, please contact support@deelflowai.com.
