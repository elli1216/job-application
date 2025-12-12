# Project: TanStack Full-Stack Starter

This is a full-stack web application built with a modern, TypeScript-based stack. It serves as a starter kit demonstrating the integration of various powerful technologies.

## Core Technologies

- **Framework:** [TanStack Start](https://tanstack.com/start) for server-side rendering (SSR), file-based routing, and build optimization.
- **UI Library:** [React](https://react.dev/) for building the user interface.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for static typing.
- **Routing:** [TanStack Router](https://tanstack.com/router) for type-safe routing.
- **Data Fetching:** [TanStack Query](https://tanstack.com/query) for managing server-state, caching, and data synchronization.
- **Database ORM:** [Prisma](https://www.prisma.io/) for database access and schema management.
- **Database Provider:** [Neon](https://neon.tech/) serverless Postgres, integrated via a custom Vite plugin.
- **Authentication:** [Clerk](https://clerk.com/) for user management and authentication.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling, with [Shadcn](https://ui.shadcn.com/) for UI components.
- **Build Tool:** [Vite](https://vitejs.dev/) for fast development and optimized builds.
- **Deployment:** [Netlify](https://www.netlify.com/) for hosting and deployment.

## Architecture

The project follows a file-based routing convention managed by TanStack Router, where files in the `src/routes` directory correspond to application routes. The main entry point and root layout is `src/routes/__root.tsx`, which sets up the global HTML structure, CSS, and essential providers like Clerk for authentication and TanStack Devtools for debugging.

Data is managed through a combination of TanStack Query for client-side and server-side data fetching, and Prisma as the ORM for the PostgreSQL database. The database connection is configured in `src/db.ts` to use a serverless Postgres instance from Neon.

The application is configured for deployment on Netlify, as specified in `netlify.toml`.

## Key Commands

### Development

To start the local development server:

```bash
pnpm install
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production-ready build:

```bash
pnpm build
```

The output is generated in the `dist/` directory.

### Database

The project uses Prisma for database management.

- **Generate Prisma Client:** Updates the client based on the schema.

  ```bash
  pnpm db:generate
  ```

- **Push Schema Changes:** Pushes the schema from `prisma/schema.prisma` to the database.

  ```bash
  pnpm db:push
  ```

- **Run Migrations:**

  ```bash
  pnpm db:migrate
  ```

- **Seed the Database:**

  ```bash
  pnpm db:seed
  ```

- **Open Prisma Studio:** A GUI for viewing and editing data.

  ```bash
  pnpm db:studio
  ```

### Testing and Linting

- **Run Tests:**

  ```bash
  pnpm test
  ```

- **Lint Files:**

  ```bash
  pnpm lint
  ```

- **Format Files:**

  ```bash
  pnpm format
  ```

- **Check and Fix:**

  ```bash
  pnpm check
  ```

## Development Conventions

- **Package Manager:** The project uses `pnpm`.
- **Coding Style:** Enforced by ESLint and Prettier, with configurations from `@tanstack/eslint-config`.
- **File Structure:** Follows the conventions of TanStack Start, with routes in `src/routes`, components in `src/components`, and integrations in `src/integrations`.
- **Type Safety:** TypeScript is used throughout the project.
- **Demo Files:** Files prefixed with `demo` in the `src` directory are for demonstration purposes and can be safely removed.
