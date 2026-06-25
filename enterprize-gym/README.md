# Gym Management System

A scalable, mobile-first Gym Management System built with React and TypeScript.

> ⚠️ This project is currently under active development.

---

# 📖 Overview

Gym Management System is a Progressive Web Application (PWA) designed for managing gyms, coaches, and members.

The application supports multiple gyms (Multi-Tenant Architecture), allowing each gym to have its own:

- Members
- Coaches
- Products
- Workout Plans
- Diet Plans
- Payments

---

# 🎯 Goals

- High Performance
- Scalable Architecture
- Mobile First
- PWA Ready
- Clean Code
- Easy Maintenance
- Enterprise-Level Folder Structure

---

# 👥 Roles

## Admin (Gym Manager)

- Manage gym information
- Manage coaches
- Manage members
- Manage products
- Manage payments
- Manage subscriptions (Future)

---

## Coach

- Manage own members
- Create workout plans
- Create diet plans
- View payment status
- Upload PDF files

---

## Member

- View workout plans
- View diet plans
- Upload progress photos
- View products
- Pay membership
- Compare progress photos

---

# 🏗 Architecture

This project combines multiple software architecture patterns.

## 1. Feature-Based Architecture

The application is organized around business features instead of technical folders.

Example:

```
Workout
Diet
Payment
Authentication
Products
```

Each feature owns its own business logic.

---

## 2. Clean Architecture

Business logic is separated from UI and API layers.

Example:

```
Feature

├── api
├── ui
├── model (when needed)
├── lib (when needed)
└── types
```

Not every feature requires all layers.
Folders are created only when they become necessary.

---

## 3. Atomic Design

Reusable UI components live inside the shared layer.

```
shared/ui

├── atoms
├── molecules
└── organisms
```

Only generic UI components belong here.

Examples:

- Button
- Input
- Modal
- Avatar
- Table

Business-specific components remain inside their corresponding feature.

---

## 4. Feature-Sliced Design (FSD)

FSD is used only as the project organization strategy.

```
src

app
pages
widgets
features
entities
shared
assets
```

---

# 📂 Current Folder Structure

```
src
│
├── app
├── assets
├── entities
├── features
├── pages
├── shared
└── widgets
```

This structure will evolve as the project grows.

---

# 🧩 Design Principles

- Single Responsibility Principle
- Separation of Concerns
- Reusable Components
- Feature Isolation
- Domain Driven Thinking
- Mobile First
- Performance First
- Simplicity over Over Engineering

---

# 🛠 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query (TanStack Query)
- React Router
- Axios

---

# 🚀 Future Features

- Subscription Plans
- Push Notifications
- Offline Mode
- Dark Mode
- Progress Analytics
- Multi-language Support
- Image Comparison
- Payment Gateway Integration

---

# 📌 Development Rules

- No business logic inside UI components.
- Shared components must be business-agnostic.
- Features should remain isolated.
- Create folders only when needed.
- Prefer composition over duplication.
- Keep components small and focused.

---

# 📄 License

This project is currently private.
