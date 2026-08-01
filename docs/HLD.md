# HLD.md

# High-Level Design (HLD)

> **Project:** CampusMesh
> **Architecture:** Offline-First Smart Campus Platform

---

## System Overview

CampusMesh is an offline-first mobile platform that combines Bluetooth Low Energy (BLE) Mesh networking with cloud synchronization to provide uninterrupted campus communication and services.

---

<img width="1536" height="1024" alt="ChatGPT Image Aug 1, 2026, 11_37_30 PM" src="https://github.com/user-attachments/assets/9acd2c37-741d-4428-9e7c-f3d32f065cb8" />


# High-Level Architecture

```mermaid
flowchart LR

A[Flutter Mobile App]
B[BLE Mesh Layer]
C[Isar Local Database]
D[REST API]
E[Backend Server]
F[(PostgreSQL)]
G[Firebase Cloud Messaging]
H[Web Admin Dashboard]

A --> B
A --> C
A --> D

D --> E
E --> F
E --> G

H --> E
```

---

# Layered Architecture

```mermaid
flowchart TB

UI[Presentation Layer]

DOMAIN[Domain Layer]

DATA[Data Layer]

LOCAL[Local Storage<br>Isar]

BLE[BLE Mesh]

API[REST API]

DB[(Database)]

UI --> DOMAIN
DOMAIN --> DATA

DATA --> LOCAL
DATA --> BLE
DATA --> API

API --> DB
```

---


---

# Communication Flow

```mermaid
sequenceDiagram

participant User

participant Flutter

participant Repository

participant BLE

participant API

participant Backend

User->>Flutter: Send Message

Flutter->>Repository: Create Request

alt Offline

Repository->>BLE: Broadcast Message

BLE-->>Repository: Delivered

else Online

Repository->>API: POST /messages

API->>Backend: Save Message

Backend-->>API: Success

API-->>Repository: Response

end

Repository-->>Flutter: Update UI
```

---

# Offline Synchronization

```mermaid
flowchart LR

A[Create Data]

B[Save to Isar]

C{Internet?}

D[Sync Queue]

E[REST API]

F[(Database)]

A --> B

B --> C

C -- No --> D

C -- Yes --> E

D --> E

E --> F
```

---

# Technology Stack

| Layer            | Technology               |
| ---------------- | ------------------------ |
| Mobile           | Flutter                  |
| State Management | Riverpod                 |
| Navigation       | GoRouter                 |
| Local Storage    | Isar                     |
| Networking       | Dio                      |
| Bluetooth        | flutter_blue_plus        |
| Backend          | Node.js + Express        |
| Database         | PostgreSQL               |
| Notifications    | Firebase Cloud Messaging |

---

# Design Principles

* Offline First
* Clean Architecture
* SOLID Principles
* Repository Pattern
* Dependency Injection
* Modular Development
* Secure by Design

---

# Deployment Overview



---

> **Outcome:** A scalable, modular, and resilient architecture that enables uninterrupted campus communication, discovery, and collaboration, even without internet connectivity.
