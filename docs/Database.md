
---

## Database Architecture

```mermaid
flowchart TD

A[Flutter Mobile App]

A --> B[(Isar Database)]
A --> C[REST API]

C --> D[(PostgreSQL)]

B -. Offline Sync .-> D
```

---

# Entity Relationship Diagram (ERD)

```mermaid
erDiagram

    ROLE ||--o{ USER : has

    USER {
        uuid id PK
        string name
        string email
        string phone
        string password
        uuid role_id FK
        string profile_image
        boolean is_active
        datetime created_at
    }

    ROLE {
        uuid id PK
        string name
    }

    CAMPUS ||--o{ BUILDING : contains

    CAMPUS {
        uuid id PK
        string name
        string address
    }

    BUILDING ||--o{ FLOOR : contains

    BUILDING {
        uuid id PK
        uuid campus_id FK
        string name
    }

    FLOOR ||--o{ DEPARTMENT : contains
    FLOOR ||--o{ OFFICE : contains

    FLOOR {
        uuid id PK
        uuid building_id FK
        int floor_no
    }

    DEPARTMENT {
        uuid id PK
        uuid floor_id FK
        string name
    }

    OFFICE {
        uuid id PK
        uuid floor_id FK
        string name
    }

    USER ||--o{ DEVICE : owns

    DEVICE {
        uuid id PK
        uuid user_id FK
        string ble_identifier
        string device_name
        datetime last_seen
    }

    DEVICE ||--o{ BLE_CONNECTION : creates

    BLE_CONNECTION {
        uuid id PK
        uuid source_device_id FK
        uuid target_device_id FK
        int signal_strength
        datetime connected_at
    }

    CHAT ||--o{ CHAT_MEMBER : contains
    USER ||--o{ CHAT_MEMBER : joins

    CHAT {
        uuid id PK
        string type
        string title
    }

    CHAT_MEMBER {
        uuid id PK
        uuid chat_id FK
        uuid user_id FK
    }

    CHAT ||--o{ MESSAGE : has
    USER ||--o{ MESSAGE : sends

    MESSAGE {
        uuid id PK
        uuid chat_id FK
        uuid sender_id FK
        string content
        string status
        datetime sent_at
    }

    MESSAGE ||--o{ ATTACHMENT : contains

    ATTACHMENT {
        uuid id PK
        uuid message_id FK
        string file_url
        string file_type
    }

    USER ||--o{ ATTENDANCE : marks

    ATTENDANCE {
        uuid id PK
        uuid user_id FK
        date attendance_date
        string status
    }

    EVENT {
        uuid id PK
        string title
        datetime event_date
    }

    ANNOUNCEMENT {
        uuid id PK
        string title
        string content
    }

    USER ||--o{ NOTIFICATION : receives
    EVENT ||--o{ NOTIFICATION : generates
    ANNOUNCEMENT ||--o{ NOTIFICATION : creates

    NOTIFICATION {
        uuid id PK
        uuid user_id FK
        string title
        boolean is_read
    }

    USER ||--o{ EMERGENCY_ALERT : triggers

    EMERGENCY_ALERT {
        uuid id PK
        uuid user_id FK
        string type
        datetime created_at
    }
```

---

# Core Tables

## Authentication

| Table | Purpose                  |
| ----- | ------------------------ |
| users | User accounts            |
| roles | User roles & permissions |

---

## Campus

| Table       | Purpose                |
| ----------- | ---------------------- |
| campuses    | Campus information     |
| buildings   | Buildings              |
| floors      | Building floors        |
| departments | Academic departments   |
| offices     | Administrative offices |

---

## Bluetooth Mesh

| Table           | Purpose                  |
| --------------- | ------------------------ |
| devices         | Registered devices       |
| ble_connections | Nearby BLE connections   |
| mesh_nodes      | Mesh routing information |

---

## Communication

| Table        | Purpose           |
| ------------ | ----------------- |
| chats        | Chat rooms        |
| chat_members | Chat participants |
| messages     | Chat messages     |
| attachments  | Shared files      |

---

## Academic

| Table               | Purpose             |
| ------------------- | ------------------- |
| attendance          | Student attendance  |
| attendance_sessions | Attendance sessions |

---

## Campus Services

| Table            | Purpose              |
| ---------------- | -------------------- |
| events           | Campus events        |
| announcements    | Notices              |
| notifications    | User notifications   |
| emergency_alerts | Emergency broadcasts |
| visitors         | Visitor records      |

---

# Table Relationships

```text
Campus
 └── Building
      └── Floor
           ├── Department
           └── Office

User
 ├── Role
 ├── Device
 ├── Attendance
 └── Chat

Chat
 ├── Members
 └── Messages
         └── Attachments

Device
 └── BLE Connections
```

---

# Primary Keys

| Table         | Primary Key     |
| ------------- | --------------- |
| users         | user_id (UUID)  |
| roles         | role_id         |
| campuses      | campus_id       |
| buildings     | building_id     |
| floors        | floor_id        |
| departments   | department_id   |
| offices       | office_id       |
| devices       | device_id       |
| chats         | chat_id         |
| messages      | message_id      |
| attendance    | attendance_id   |
| notifications | notification_id |

---

# Foreign Keys

| Child Table  | Parent Table |
| ------------ | ------------ |
| users        | roles        |
| buildings    | campuses     |
| floors       | buildings    |
| departments  | floors       |
| offices      | floors       |
| devices      | users        |
| attendance   | users        |
| chat_members | users        |
| chat_members | chats        |
| messages     | chats        |
| attachments  | messages     |

---

# Offline Storage (Isar)

```text
Cached Data

• User Session
• Profile
• Messages
• Departments
• Offices
• Attendance
• Notifications
• BLE Devices
• Sync Queue
```

---

# Synchronization Flow

```mermaid
flowchart LR

A[User Action]

A --> B[(Isar)]

B --> C{Internet?}

C -- No --> D[Sync Queue]

C -- Yes --> E[REST API]

D --> E

E --> F[(PostgreSQL)]
```

---

# Database Design Principles

* UUID Primary Keys
* Third Normal Form (3NF)
* Soft Delete
* Audit Logging
* Indexed Queries
* Offline-First Storage
* Automatic Synchronization
* ACID Transactions
* Secure Data Access

---
