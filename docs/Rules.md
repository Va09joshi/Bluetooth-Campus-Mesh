# Project Rules & Guidelines

## 1. Development Principles
- **Offline-First Mindset:** Assume no internet connection. Design features to work locally first, using BLE Mesh and local storage, before syncing to the cloud.
- **Clean Architecture:** Strictly follow Clean Architecture and SOLID principles. Separate code into Presentation, Domain, and Data layers.
- **DRY & KISS:** Do Not Repeat Yourself. Keep It Simple, Stupid.

## 2. Code Quality
- **State Management:** Use Riverpod exclusively for state management in Flutter.
- **Null Safety:** Ensure 100% sound null safety.
- **Error Handling:** Implement global error handling and robust fallback mechanisms, especially for BLE connection failures.
- **Linting:** Follow standard Dart and Flutter lint rules. Fix all warnings before committing.

## 3. Database & Storage
- **Local DB:** Use Isar Database for all local storage and caching needs (messages, attendance, user data).
- **Secure Storage:** Store sensitive tokens (JWT) using `flutter_secure_storage`.
- **Sync Logic:** Implement robust conflict resolution for data synchronization when coming online.

## 4. Git Flow & Version Control
- **Branches:** `main` (production), `develop` (integration), `feature/<feature-name>` (development).
- **Commits:** Write clear and descriptive commit messages. Use conventional commits (e.g., `feat: added BLE scanner`, `fix: offline sync bug`).
- **PRs:** Pull requests require code review before merging into `develop`.

## 5. UI/UX Guidelines
- Follow Material Design 3 guidelines.
- Ensure accessible design (large touch targets, readable contrast, scalable fonts).
- Provide clear visual feedback for online vs. offline states and BLE connection status.
