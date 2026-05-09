<div align="center">

# 📄 Shocodoc

### A Real-Time Collaborative Document Editor

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Liveblocks](https://img.shields.io/badge/Liveblocks-2.x-FF6B6B?style=for-the-badge)](https://liveblocks.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://shocodoc507.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**Shocodoc** is a full-stack, real-time collaborative document editing platform — think Google Docs, built from scratch. Multiple users can create, edit, share, comment on, and manage documents simultaneously, with changes reflected live across all connected clients.

[🌐 Live Demo](https://shocodoc507.vercel.app) · [🐛 Report a Bug](https://github.com/ahmadali507/Shocodoc/issues) · [✨ Request a Feature](https://github.com/ahmadali507/Shocodoc/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Core Modules Explained](#-core-modules-explained)
  - [Authentication (Clerk)](#authentication-clerk)
  - [Real-Time Engine (Liveblocks)](#real-time-engine-liveblocks)
  - [Rich Text Editor (Lexical)](#rich-text-editor-lexical)
  - [Document Management](#document-management)
  - [Collaboration & Sharing](#collaboration--sharing)
  - [Comments & Threads](#comments--threads)
  - [Notifications](#notifications)
- [API Routes](#-api-routes)
- [Role-Based Access Control](#-role-based-access-control)
- [UI & Styling](#-ui--styling)
- [Error Monitoring (Sentry)](#-error-monitoring-sentry)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔍 Overview

Shocodoc is a production-grade collaborative document editor built with the **Next.js 14 App Router**. It integrates three core third-party services — **Clerk** for authentication, **Liveblocks** for real-time collaboration infrastructure, and **Lexical** (Meta's rich text editor framework) for the editing experience — to deliver a seamless, Google Docs-like workflow.

Every document is backed by a **Liveblocks Room**, which acts as the real-time session container. Users are authenticated via Clerk and identified to Liveblocks through a custom auth API endpoint. Access to each room is controlled by a granular, role-based permission system (creator / editor / viewer).

The application is deployed on **Vercel** and monitored in production with **Sentry**.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Secure sign-up and sign-in with Clerk, including full session management and protected routes via middleware |
| 📝 **Rich Text Editing** | Full-featured editor powered by Meta's Lexical framework with bold, italic, underline, strikethrough, headings, and alignment |
| 🔴 **Real-Time Collaboration** | Multiple users can edit the same document simultaneously with changes synchronized instantly via Liveblocks |
| 👥 **Active Collaborators** | Live avatars showing every user currently present in the document room |
| 🔗 **Document Sharing** | Share documents with any user by email, assigning them editor or viewer permissions |
| 💬 **Threaded Comments** | Inline comment threads anchored to specific text selections, with floating composer and thread resolution |
| 🔔 **In-App Notifications** | Real-time inbox notifications when collaborators are mentioned or share document access with you |
| ✏️ **Inline Title Editing** | Click-to-edit document titles that auto-save on blur or on pressing Enter |
| 🗑️ **Document Deletion** | Soft-delete documents with a confirmation modal; only editors and creators can delete |
| 🌑 **Dark Theme UI** | Polished dark-themed interface using a custom Tailwind color palette |
| 📱 **Responsive Design** | Fully responsive layout that adapts from mobile to wide desktop screens |
| 🛡️ **Error Monitoring** | Production error tracking and session replay powered by Sentry |

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.2.5 | React framework with App Router, SSR, and API routes |
| [React](https://react.dev/) | 18 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static typing across the entire codebase |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.x | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | 0.424 | Icon library |

### Editor
| Technology | Version | Purpose |
|---|---|---|
| [Lexical](https://lexical.dev/) | 0.16.1 | Meta's extensible rich text editor framework |
| [@lexical/react](https://lexical.dev/docs/react/create-react-app) | 0.16.1 | React bindings for Lexical |
| [@liveblocks/react-lexical](https://liveblocks.io/docs/api-reference/liveblocks-react-lexical) | 2.4.0 | Liveblocks collaboration layer for Lexical |

### Authentication
| Technology | Version | Purpose |
|---|---|---|
| [@clerk/nextjs](https://clerk.com/docs/quickstarts/nextjs) | 5.2.12 | Full authentication solution (sign-in, sign-up, user management) |
| [@clerk/themes](https://clerk.com/docs/customization/themes) | 2.1.16 | Pre-built Clerk UI themes |

### Real-Time Collaboration
| Technology | Version | Purpose |
|---|---|---|
| [@liveblocks/client](https://liveblocks.io/) | 2.4.0 | Core Liveblocks client |
| [@liveblocks/react](https://liveblocks.io/docs/api-reference/liveblocks-react) | 2.4.0 | React hooks for Liveblocks (presence, storage, notifications) |
| [@liveblocks/react-ui](https://liveblocks.io/docs/api-reference/liveblocks-react-ui) | 2.4.0 | Prebuilt Liveblocks UI components (threads, inbox) |
| [@liveblocks/node](https://liveblocks.io/docs/api-reference/liveblocks-node) | 2.4.0 | Server-side Liveblocks SDK for room management |

### UI Components
| Technology | Version | Purpose |
|---|---|---|
| [Radix UI](https://www.radix-ui.com/) | Various | Headless, accessible UI primitives (Dialog, Popover, Select, Label) |
| [class-variance-authority](https://cva.style/) | 0.7.0 | Variant-based component styling |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Latest | Conditional className utilities |

### Monitoring & Infrastructure
| Technology | Version | Purpose |
|---|---|---|
| [Sentry](https://sentry.io/) | 8.24.0 | Error tracking and performance monitoring |
| [Vercel](https://vercel.com/) | — | Deployment and hosting platform |
| [nanoid](https://github.com/ai/nanoid) | 5.0.7 | Unique ID generation for room/document IDs |

---

## 🏗 Project Architecture

```
User Browser
    │
    ▼
┌───────────────────────────────────────────┐
│              Next.js 14 App               │
│  ┌─────────────┐    ┌──────────────────┐  │
│  │   Clerk     │    │  Liveblocks      │  │
│  │ Middleware  │    │  Provider        │  │
│  │ (Auth Gate) │    │  (Real-time WS)  │  │
│  └─────────────┘    └──────────────────┘  │
│                                           │
│  ┌────────────────────────────────────┐   │
│  │         Page / Route Layer         │   │
│  │  / (home)  /document/[id] (editor) │   │
│  └────────────────────────────────────┘   │
│                                           │
│  ┌────────────────────────────────────┐   │
│  │        Server Actions Layer        │   │
│  │  createDocument  getDocument       │   │
│  │  updateDocument  deleteDocument    │   │
│  │  updateDocumentAccess              │   │
│  │  removeCollaborator                │   │
│  └────────────────────────────────────┘   │
│                                           │
│  ┌────────────────────────────────────┐   │
│  │    Liveblocks Node SDK (Rooms)     │   │
│  │  createRoom  getRoom  updateRoom   │   │
│  │  deleteRoom  getRooms              │   │
│  │  triggerInboxNotification          │   │
│  └────────────────────────────────────┘   │
└───────────────────────────────────────────┘
         │                     │
         ▼                     ▼
   Clerk Backend         Liveblocks Cloud
  (User Identity)      (Real-time Rooms &
                          Notifications)
```

---

## 📁 Directory Structure

```
Shocodoc/
└── my-app/                         # Next.js application root
    ├── public/
    │   └── assets/
    │       ├── icons/              # SVG icons (logo, add, edit, share, bell, doc, h3, etc.)
    │       └── images/             # Static images (modal, doc, logo)
    ├── src/
    │   ├── app/
    │   │   ├── (auth)/             # Auth route group
    │   │   │   ├── sign-in/        # Clerk sign-in page
    │   │   │   └── sign-up/        # Clerk sign-up page
    │   │   ├── (root)/             # Main app route group
    │   │   │   ├── page.tsx        # Home page — document list dashboard
    │   │   │   └── document/
    │   │   │       └── [id]/
    │   │   │           └── page.tsx  # Document editor page
    │   │   ├── api/
    │   │   │   ├── liveblocks-auth/
    │   │   │   │   └── route.ts    # POST — identifies Clerk user to Liveblocks
    │   │   │   └── sentry-example-api/
    │   │   │       └── route.ts    # Sentry test endpoint
    │   │   ├── Provider.tsx        # LiveblocksProvider wrapper with user resolution
    │   │   ├── layout.tsx          # Root layout with Clerk & Provider
    │   │   ├── globals.css         # Global styles and Tailwind directives
    │   │   ├── global-error.tsx    # Sentry global error boundary
    │   │   └── sentry-example-page/
    │   ├── components/
    │   │   ├── editor/
    │   │   │   ├── Editor.tsx            # Main Lexical editor component
    │   │   │   └── plugins/
    │   │   │       ├── ToolbarPlugin.tsx  # Top formatting toolbar
    │   │   │       ├── FloatingToolbarPlugin.tsx  # Context-aware floating toolbar
    │   │   │       └── Theme.ts          # Lexical custom theme config
    │   │   ├── ui/                       # shadcn/ui-style base components
    │   │   │   ├── button.tsx
    │   │   │   ├── dialog.tsx
    │   │   │   ├── input.tsx
    │   │   │   ├── label.tsx
    │   │   │   ├── popover.tsx
    │   │   │   └── select.tsx
    │   │   ├── AddDocumentBtn.tsx        # Creates a new Liveblocks room/document
    │   │   ├── Collaborative.tsx         # CollaborativeRoom — wraps RoomProvider + Editor
    │   │   ├── Collaborator.tsx          # Single collaborator row (role selector + remove)
    │   │   ├── activeCollborators.tsx    # Live avatars of current room users
    │   │   ├── Comments.tsx              # Threaded comment list using Liveblocks threads
    │   │   ├── DeleteModal.tsx           # Confirmation modal for document deletion
    │   │   ├── Header.tsx                # Responsive top navigation bar
    │   │   ├── Loader.tsx                # Full-screen loading spinner
    │   │   ├── Notifications.tsx         # Bell icon + unread notification popover
    │   │   ├── Sharemodal.tsx            # Share dialog with email input & collaborator list
    │   │   └── UserTypeSelector.tsx      # Dropdown to select viewer/editor role
    │   ├── lib/
    │   │   ├── actions/
    │   │   │   ├── room.actions.ts       # All Liveblocks room Server Actions
    │   │   │   └── user.action.ts        # Clerk user resolution Server Actions
    │   │   ├── liveblocks.ts             # Liveblocks Node SDK instance
    │   │   └── utils.ts                  # Shared helpers (dateConverter, getAccessType, cn, etc.)
    │   ├── styles/
    │   │   ├── dark-theme.css            # Dark mode CSS variables
    │   │   └── light-theme.css           # Light mode CSS variables
    │   ├── middleware.ts                 # Clerk middleware (auth guard for all routes)
    │   └── instrumentation.ts            # Sentry instrumentation entry point
    ├── types/
    │   └── index.d.ts                   # Global TypeScript type declarations
    ├── next.config.mjs                  # Next.js config (images, Sentry plugin)
    ├── tailwind.config.ts               # Tailwind theme (custom colors, fonts, animations)
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` (or `yarn` / `pnpm`)
- A **Clerk** account — [clerk.com](https://clerk.com)
- A **Liveblocks** account — [liveblocks.io](https://liveblocks.io)
- A **Sentry** account (optional, for error monitoring) — [sentry.io](https://sentry.io)

---

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahmadali507/Shocodoc.git
   cd Shocodoc/my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

---

### Environment Variables

Create a `.env.local` file in the `my-app/` directory and populate it with the following keys:

```env
# ─── Clerk Authentication ─────────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Clerk redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# ─── Liveblocks ───────────────────────────────────────────────────────────────
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
LIVEBLOCKS_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ─── Sentry (optional) ────────────────────────────────────────────────────────
SENTRY_AUTH_TOKEN=sntrys_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> **Where to find these keys:**
> - **Clerk keys**: [Clerk Dashboard](https://dashboard.clerk.com) → Your application → API Keys
> - **Liveblocks keys**: [Liveblocks Dashboard](https://liveblocks.io/dashboard) → Your project → API Keys
> - **Sentry token**: [Sentry Dashboard](https://sentry.io) → Organization Settings → Auth Tokens

---

### Running the App

**Development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production build:**

```bash
npm run build
npm run start
```

**Lint:**

```bash
npm run lint
```

---

## 🔬 Core Modules Explained

### Authentication (Clerk)

Shocodoc uses **Clerk** as its complete authentication layer. Clerk handles user registration, sign-in, session management, and provides the `currentUser()` server helper and `useUser()` client hook.

**Route protection** is enforced globally by the Clerk middleware in `src/middleware.ts`, which intercepts every request and redirects unauthenticated users to `/sign-in`:

```typescript
// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
```

Authentication pages are scoped under the `(auth)` route group (`/sign-in`, `/sign-up`), using Clerk's prebuilt `<SignIn />` and `<SignUp />` components with custom dark theming applied via `@clerk/themes`.

User identity data (name, email, avatar, ID) is pulled from Clerk and passed directly to Liveblocks for user presence and notifications.

---

### Real-Time Engine (Liveblocks)

**Liveblocks** powers all real-time features. Every document corresponds to a **Liveblocks Room** — a persistent, synchronized session object stored on Liveblocks' infrastructure.

**`src/app/Provider.tsx`** wraps the entire app in a `<LiveblocksProvider>`, configured with:

- **`authEndpoint`** — points to `/api/liveblocks-auth`, which authenticates the current Clerk user against Liveblocks.
- **`resolveUsers`** — a callback that fetches Clerk user profiles by ID, used to display names and avatars throughout the UI.
- **`resolveMentionSuggestions`** — enables `@mention` autocomplete in the comment composer by querying room participants.

**`src/app/api/liveblocks-auth/route.ts`** is a Next.js API route that:
1. Reads the current Clerk user via `currentUser()`.
2. Builds a user identity object (id, name, email, avatar, color).
3. Calls `liveblocks.identifyUser()` to issue a Liveblocks access token tied to that user.

The `CollaborativeRoom` component wraps the editor in `<RoomProvider id={roomId}>`, connecting the client to the specific Liveblocks room for that document.

---

### Rich Text Editor (Lexical)

The editor is built on **Lexical**, Meta's extensible rich-text editor framework. The Liveblocks integration layer (`@liveblocks/react-lexical`) wraps the Lexical config with `liveblocksConfig()`, transparently syncing the editor's state across all clients in the same room.

**Editor components:**

| Component | Responsibility |
|---|---|
| `Editor.tsx` | Top-level Lexical composer; manages editor config, loading states, and layout |
| `ToolbarPlugin.tsx` | Persistent top toolbar with Bold, Italic, Underline, Strikethrough, Undo/Redo, and Block type controls (Paragraph, H1, H2, H3, Quote) |
| `FloatingToolbarPlugin.tsx` | Context-sensitive floating toolbar that appears on text selection |
| `Theme.ts` | Maps Lexical's internal class names to custom CSS classes for styling |

The editor supports:
- **Text formatting**: Bold, Italic, Underline, Strikethrough
- **Block types**: Normal paragraph, Heading 1/2/3, Block quote
- **Text alignment**: Left, Center, Right, Justify
- **Undo / Redo** with full history tracking
- **Floating Comments**: Text selections can be anchored to comment threads via `<FloatingComposer />`

The editor's `editable` property is dynamically set based on the user's role — `editor` role users get a fully interactive editor, while `viewer` role users see a read-only view.

---

### Document Management

All document CRUD operations are implemented as **Next.js Server Actions** in `src/lib/actions/room.actions.ts`, using the Liveblocks Node SDK.

| Server Action | Description |
|---|---|
| `createDocument(userId, email)` | Creates a new Liveblocks room with a `nanoid`-generated ID and sets the creator as the sole write-access user |
| `getDocument(roomId, userId)` | Fetches a single room and verifies the requesting user has explicit access |
| `getDocuments(email)` | Fetches all rooms the user participates in, used to populate the dashboard |
| `updateDocument(roomId, title)` | Updates the room's metadata title |
| `updateDocumentAccess(roomId, email, userType, updatedBy)` | Grants or changes a collaborator's access level and triggers an inbox notification to the invited user |
| `removeCollaborator(roomId, email)` | Revokes a collaborator's room access (cannot remove the creator) |
| `deleteDocument(roomId)` | Permanently deletes the Liveblocks room and redirects to the dashboard |

Each room's **metadata** stores:

```typescript
{
  creatorId: string;   // Clerk user ID of the document creator
  email: string;       // Creator's email address
  title: string;       // Document title (editable)
}
```

---

### Collaboration & Sharing

The **Share Modal** (`Sharemodal.tsx`) allows editors to invite collaborators by email. The modal:

1. Accepts an email address and a role selection (`editor` or `viewer`).
2. Calls `updateDocumentAccess()` to update the Liveblocks room's `usersAccesses` map.
3. Sends an in-app notification to the invited user via `liveblocks.triggerInboxNotification()`.

The **Collaborator** component (`Collaborator.tsx`) renders each existing collaborator in the share list with their avatar, name, email, and a dropdown to change their role or remove them.

**Active Collaborators** (`activeCollborators.tsx`) uses Liveblocks presence hooks to show live avatars of everyone currently viewing or editing the document in real time.

---

### Comments & Threads

Comments are deeply integrated into the editor via Liveblocks' `@liveblocks/react-lexical` and `@liveblocks/react-ui` packages.

- **`<FloatingComposer />`** — appears when the user selects text and chooses to comment, anchoring a new thread to that specific selection.
- **`<FloatingThreads />`** — renders thread bubbles inline within the document, attached to the text they reference.
- **`<Comments />`** (`Comments.tsx`) — renders the full list of comment threads in a sidebar panel, sorted and styled with active/resolved states.
- **`ThreadWrapper`** — wraps each Liveblocks `<Thread />` component and applies an active highlight when the thread corresponds to the current text cursor position.

---

### Notifications

The **Notifications** system uses Liveblocks' inbox API to deliver real-time alerts.

The `Notifications.tsx` component:
- Uses `useInboxNotifications()` to fetch the notification feed.
- Uses `useUnreadInboxNotificationsCount()` to show a blue badge on the bell icon when there are unread items.
- Renders three kinds of notifications via `<InboxNotification>`:
  - **`thread`** — someone commented on a document you're in.
  - **`textMention`** — someone `@mentioned` you in a comment.
  - **`$documentAccess`** — someone granted you access to a document (custom notification kind with the grantor's avatar and role).

Each notification links directly to the relevant document (`/document/{roomId}`).

---

## 📡 API Routes

| Route | Method | Auth | Description |
|---|---|---|---|
| `/api/liveblocks-auth` | `POST` | Clerk (required) | Authenticates the current Clerk session with Liveblocks and returns a room access token |
| `/api/sentry-example-api` | `GET` | None | Test endpoint for verifying Sentry error capture |

---

## 🔐 Role-Based Access Control

Shocodoc uses a three-tier role system stored in Liveblocks room access metadata:

| Role | Value | Liveblocks Permissions | Capabilities |
|---|---|---|---|
| **Creator** | `"creator"` | `["room:write"]` | Full access: edit, share, manage collaborators, delete document |
| **Editor** | `"editor"` | `["room:write"]` | Edit content, change title, share, add/remove collaborators |
| **Viewer** | `"viewer"` | `["room:read", "room:presence:write"]` | Read-only; can see presence and comments but cannot edit |

Access is enforced at two levels:
1. **Server-side** — `getDocument()` checks `room.usersAccesses` before returning data. Unauthorized users receive an error.
2. **Client-side** — The `currentUserType` prop is passed down to the `CollaborativeRoom` and `Editor` components, which conditionally render controls (e.g., toolbar, share button, delete button) based on the user's role.

---

## 🎨 UI & Styling

The UI is built with **Tailwind CSS** and a custom dark-first design system.

**Custom color palette** (defined in `tailwind.config.ts`):

```
Blue:  100 → #B4C6EE  |  400 → #417BFF  |  500 → #3371FF
Red:   400 → #DD4F56  |  500 → #DC4349
Dark:  100 → #09111F  |  200 → #0B1527  |  300 → #0F1C34
       350 → #12213B  |  400 → #27344D  |  500 → #2E3D5B
```

**Component library**: Radix UI primitives (Dialog, Popover, Select, Label, Slot) are styled with `class-variance-authority` and `tailwind-merge` following the **shadcn/ui** pattern — fully accessible, unstyled at the primitive level, and fully themed at the component level.

**Responsive strategy**: Mobile-first with targeted breakpoints. On small screens the logo collapses to an icon, collaborator lists compact, and the toolbar adapts its layout.

**Theming**: Separate `dark-theme.css` and `light-theme.css` files define CSS custom properties for the editor theme, keeping Lexical's styling decoupled from Tailwind.

---

## 🛡 Error Monitoring (Sentry)

**Sentry** is integrated via the `@sentry/nextjs` SDK and configured in `next.config.mjs` with the Sentry webpack plugin.

Key configurations:
- **Source map upload** — wider source map upload for human-readable stack traces in Sentry.
- **React component annotation** — automatically annotates component names in breadcrumbs.
- **Tree-shaking** — logger statements are stripped from production bundles to reduce size.
- **Global error boundary** — `global-error.tsx` catches unhandled React render errors and reports them to Sentry.
- **Instrumentation** — `src/instrumentation.ts` registers Sentry on both Node.js and Edge runtimes.

---

## 🌐 Deployment

Shocodoc is deployed on **Vercel**, which provides:
- Automatic deployments on every push to `main`.
- Edge-optimized delivery via Vercel's global CDN.
- Serverless functions for Next.js API routes and Server Actions.
- Environment variable management via the Vercel dashboard.

**Live URL**: [https://shocodoc507.vercel.app](https://shocodoc507.vercel.app)

To deploy your own instance:

1. Push the repository to GitHub.
2. Import the project on [vercel.com/new](https://vercel.com/new).
3. Set the **root directory** to `my-app`.
4. Add all [environment variables](#environment-variables) in the Vercel project settings.
5. Deploy.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository.
2. Create a **feature branch**: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'feat: add some feature'`
4. **Push** to your branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request** against `main`.

Please make sure your code follows the existing TypeScript and ESLint conventions, and that all changes are scoped to the `my-app/` directory.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built with ❤️ by [Ahmad Ali](https://github.com/ahmadali507)

⭐ If you found this project useful, give it a star!

</div>
