# Dr. Jatinder Manhas Portfolio Website

## Overview

This is a single-page academic portfolio website for Dr. Jatinder Manhas, Ph.D., an Associate Professor at the University of Jammu specializing in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Brain-Computer Interface research. The website showcases his academic credentials, research supervision, publications, funded projects, awards, events organized, teaching experience, and administrative roles.

The application is built as a modern, responsive single-page application following academic portfolio design patterns inspired by research-focused institutions. It emphasizes clean presentation, accessibility, and ease of navigation for academic content consumption.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**Routing**: Wouter for lightweight client-side routing with a single-page application pattern

**UI Component Library**: Radix UI primitives with shadcn/ui styling system (New York variant)

**Styling**: 
- Tailwind CSS for utility-first styling
- CSS variables for theming with light mode design
- Custom design tokens defined in `index.css` for colors, shadows, and elevation effects
- Typography using Inter/Poppins font families for clean academic presentation

**State Management**: TanStack React Query (v5) for server state management and data fetching

**Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

**Design System**:
- Component-based architecture with reusable UI components in `client/src/components/ui/`
- Section-based components for portfolio content (HeroSection, ResearchSection, PublicationsSection, etc.)
- Smooth scroll navigation between sections
- Responsive design with mobile-first approach

**Key Features**:
- Fixed navigation bar with smooth scrolling to sections
- Scroll-to-top button
- Interactive accordions for expandable content
- Tabbed interfaces for publications and research categories
- Timeline layouts for education and events
- Card-based layouts for projects and awards
- Contact form with validation

### Backend Architecture

**Runtime**: Node.js with Express.js server

**Language**: TypeScript with ES modules

**API Design**: RESTful API pattern
- POST `/api/contact` - Contact form submission endpoint
- GET `/api/contact/messages` - Retrieve contact messages (admin)

**Development Server**: Vite middleware integration for hot module replacement in development

**Production Build**: 
- Client: Vite builds static assets to `dist/public`
- Server: esbuild bundles server code to `dist/`

**Request Handling**:
- JSON body parsing with raw body preservation for webhook verification
- Request logging middleware for API endpoints
- Error handling with validation error formatting

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL

**Database Provider**: Neon Database (serverless PostgreSQL) via `@neondatabase/serverless`

**Schema Design** (defined in `shared/schema.ts`):
- `users` table: User authentication (id, username, password)
- `contact_messages` table: Contact form submissions (id, name, email, message, created_at)

**Schema Validation**: Drizzle-Zod for runtime validation of insert operations

**Storage Implementation**:
- Abstract `IStorage` interface for CRUD operations
- `MemStorage` class for in-memory storage (development/fallback)
- Database migrations managed in `./migrations` directory via drizzle-kit

**Data Layer**:
- Shared schema types between client and server
- Type-safe database queries with Drizzle ORM
- Zod schemas for input validation

### External Dependencies

**UI Component Dependencies**:
- @radix-ui/* - Unstyled, accessible component primitives (accordion, dialog, dropdown, navigation, popover, tabs, toast, etc.)
- class-variance-authority - Type-safe component variant management
- clsx & tailwind-merge - Conditional className utilities
- lucide-react - Icon library
- react-icons - Additional icon sets (SiResearchgate, SiOrcid for academic profiles)
- embla-carousel-react - Carousel/slider functionality
- cmdk - Command menu interface
- date-fns - Date manipulation and formatting

**Form & Validation**:
- react-hook-form - Form state management
- zod - Schema validation
- @hookform/resolvers - Integration between react-hook-form and zod

**State & Data Fetching**:
- @tanstack/react-query - Server state management, caching, and data synchronization
- Query client configuration with custom fetch wrappers for API requests

**Database & ORM**:
- drizzle-orm - TypeScript ORM for PostgreSQL
- drizzle-kit - Database migrations and schema management
- @neondatabase/serverless - Serverless PostgreSQL driver
- drizzle-zod - Zod schema generation from Drizzle tables

**Session Management**:
- connect-pg-simple - PostgreSQL session store for Express (configured but not actively used in current implementation)

**Build Tools**:
- vite - Frontend build tool and dev server
- @vitejs/plugin-react - React support for Vite
- esbuild - Server-side bundling for production
- tsx - TypeScript execution for development
- tailwindcss - CSS framework
- autoprefixer - PostCSS plugin for vendor prefixes

**Development Tools** (Replit-specific):
- @replit/vite-plugin-runtime-error-modal - Error overlay in development
- @replit/vite-plugin-cartographer - Code navigation
- @replit/vite-plugin-dev-banner - Development banner

**Portfolio Data**:
- Static data stored in `client/src/data/portfolioData.ts` containing:
  - Personal information and contact details
  - Research interests
  - Educational qualifications
  - Ph.D. supervision records (awarded and ongoing)
  - Research projects with funding details
  - Publications (journals, conferences, books)
  - Awards and fellowships
  - Events organized
  - Teaching experience
  - Administrative roles

**Third-Party Services** (referenced but not integrated):
- Email service providers (SendGrid, Mailgun) - Mentioned for future contact form email notifications
- Google Scholar, ORCID, ResearchGate - Academic profile links for external references