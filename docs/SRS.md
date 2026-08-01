# SRS.md

# CampusMesh

### Software Requirements Specification (SRS)

**Version:** 1.0
**Document Type:** IEEE 830 Inspired Software Requirements Specification
**Platform:** Flutter (Android, iOS) + Web Admin Dashboard
**Project Name:** CampusMesh
**Status:** Draft

---

# Table of Contents

1. Introduction
2. Purpose
3. Scope
4. Definitions
5. Stakeholders
6. Product Overview
7. Assumptions
8. Constraints
9. Functional Requirements
10. Non-Functional Requirements
11. User Roles
12. User Stories
13. Use Cases
14. Business Rules
15. System Requirements
16. External Interfaces
17. Data Requirements
18. Security Requirements
19. Performance Requirements
20. Offline Requirements
21. BLE Requirements
22. Acceptance Criteria
23. Future Scope

---

# 1. Introduction

CampusMesh is an offline-first Smart Campus Platform that enables communication, discovery, attendance, and emergency services using Bluetooth Low Energy (BLE) Mesh networking. The platform allows users to communicate and discover campus resources without relying on internet connectivity.

The system consists of:

* Flutter Mobile Application
* Web Admin Dashboard
* Backend API
* BLE Mesh Layer
* Local Offline Database

---

# 2. Purpose

The purpose of CampusMesh is to provide a reliable communication and campus management system that continues functioning even when internet connectivity is unavailable.

The application aims to improve:

* Student communication
* Faculty communication
* Department discovery
* Office discovery
* Attendance
* Emergency response
* Campus navigation
* File sharing

---

# 3. Scope

CampusMesh provides:

* Authentication
* BLE Mesh Discovery
* Nearby User Discovery
* Nearby Faculty Discovery
* Nearby Department Discovery
* Nearby Office Discovery
* One-to-One Messaging
* Group Messaging
* File Sharing
* Smart Attendance
* Campus Directory
* Indoor Navigation
* Emergency SOS
* Notifications
* Events
* Announcements
* Visitor Mode
* Offline Synchronization
* Admin Dashboard

---

# 4. Definitions

| Term               | Meaning                                          |
| ------------------ | ------------------------------------------------ |
| BLE                | Bluetooth Low Energy                             |
| Mesh Network       | Peer-to-peer Bluetooth communication network     |
| Offline Sync       | Synchronization after internet becomes available |
| Beacon             | BLE broadcasting device                          |
| JWT                | JSON Web Token                                   |
| Repository Pattern | Data abstraction layer                           |
| Riverpod           | State management solution                        |
| Isar               | Local Flutter database                           |

---

# 5. Stakeholders

* Students
* Faculty
* Visitors
* University Administration
* Security Team
* IT Department
* System Administrators
* Developers

---

# 6. Product Overview

CampusMesh operates using BLE Mesh networking.

When internet is unavailable:

* Devices communicate using Bluetooth.
* Messages are stored locally.
* Attendance is cached.
* File transfers continue.
* Discovery features remain operational.

When internet returns:

* Cached data is synchronized.
* Messages are delivered.
* Attendance uploads automatically.
* Notifications synchronize.

---

# 7. Assumptions

* Users have smartphones supporting Bluetooth Low Energy.
* Bluetooth permissions are granted.
* Users possess valid campus accounts.
* Backend services are operational when online.
* Devices have sufficient battery.

---

# 8. Constraints

* BLE communication range is limited.
* Device battery optimization may affect scanning.
* Offline messaging depends on nearby devices.
* Internet-required features cannot synchronize while offline.
* Different operating systems may have varying BLE limitations.

---

# 9. Functional Requirements

## Authentication

* User Registration
* Login
* Logout
* Forgot Password
* OTP Verification
* Token Refresh
* Session Persistence

---

## User Management

* View Profile
* Edit Profile
* Change Password
* Role Management

---

## Bluetooth Mesh

* Enable Bluetooth
* Scan Nearby Devices
* Discover Users
* Connect Devices
* Maintain Mesh
* Monitor Signal Strength

---

## Messaging

* One-to-One Chat
* Group Chat
* Offline Messaging
* Delivery Status
* Read Receipts
* Message Synchronization

---

## File Sharing

* Send Images
* Send PDFs
* Send Documents
* Offline Transfer
* Retry Failed Transfers

---

## Campus Discovery

* Search Departments
* Search Offices
* Faculty Directory
* Campus Directory
* Building Information

---

## Indoor Navigation

* Department Navigation
* Office Navigation
* Classroom Finder
* Facility Finder

---

## Attendance

* Mark Attendance
* Attendance History
* Attendance Reports

---

## Notifications

* Push Notifications
* BLE Broadcast Alerts
* Emergency Notifications

---

## Emergency

* SOS Button
* Emergency Broadcast
* Nearby Assistance

---

## Administration

* Manage Users
* Manage Departments
* Manage Buildings
* Manage Attendance
* Manage BLE Beacons
* Analytics
* Reports

---

# 10. Non-Functional Requirements

## Performance

* App startup < 3 seconds
* Login response < 2 seconds
* BLE discovery < 5 seconds
* Screen transition < 300 ms

---

## Reliability

* Offline operation
* Automatic retry
* Data consistency
* Crash recovery

---

## Security

* JWT Authentication
* Secure Token Storage
* HTTPS
* Input Validation
* Encryption
* Secure BLE communication

---

## Scalability

Support:

* 50,000+ users
* 500+ departments
* Multiple campuses
* Concurrent administrators

---

## Maintainability

* Clean Architecture
* SOLID Principles
* Repository Pattern
* Modular Features
* Dependency Injection

---

## Accessibility

* WCAG AA compliance
* Large touch targets
* Dynamic font support
* Screen reader support

---

# 11. User Roles

## Student

* Chat
* Attendance
* Discover Departments
* Share Files
* Receive Notifications

---

## Faculty

* Attendance Management
* Broadcast Messages
* View Student Information

---

## Visitor

* Campus Navigation
* Office Discovery
* Visitor Information

---

## Administrator

* User Management
* Analytics
* BLE Management
* Reports
* System Configuration

---

# 12. User Stories

### Authentication

As a student,

I want to log in securely,

So that I can access campus services.

---

### Messaging

As a student,

I want to send messages offline,

So that communication continues without internet.

---

### Attendance

As a faculty member,

I want to mark attendance,

So that student records remain accurate.

---

### Department Discovery

As a visitor,

I want to locate departments,

So that I can reach the correct office.

---

# 13. Use Cases

### UC-01 Login

Actor:
Student

Flow:

1. Open App
2. Enter Credentials
3. Authenticate
4. Navigate to Home

---

### UC-02 Discover Nearby Users

Actor:
Student

Flow:

1. Enable Bluetooth
2. Scan Devices
3. Display Nearby Users
4. Connect

---

### UC-03 Send Message

Actor:
Student

Flow:

1. Select User
2. Compose Message
3. Send via BLE
4. Sync Online Later

---

# 14. Business Rules

* Email must be unique.
* Password must meet security policy.
* OTP expires after configured duration.
* Attendance cannot be duplicated.
* Bluetooth permission is mandatory for mesh features.
* Only administrators manage campus data.
* Messages sync automatically after connectivity returns.

---

# 15. System Requirements

## Mobile

* Android 10+
* iOS 15+
* Bluetooth Low Energy
* Internet (optional for sync)

## Web

* Modern Browser
* Chrome
* Edge
* Firefox
* Safari

---

# 16. External Interfaces

* REST API
* BLE Devices
* Firebase Cloud Messaging
* Secure Storage
* Local Isar Database

---

# 17. Data Requirements

Primary Entities:

* User
* Faculty
* Visitor
* Department
* Office
* Building
* Device
* Message
* Attendance
* Event
* Notification
* File
* Emergency Alert

---

# 18. Security Requirements

* JWT Authentication
* Refresh Tokens
* Role-Based Access Control (RBAC)
* Encrypted Storage
* Secure API Communication
* Audit Logs
* Session Timeout
* Device Validation

---

# 19. Performance Requirements

* BLE Scan ≤ 5 seconds
* Navigation ≤ 300 ms
* Local Search ≤ 200 ms
* Sync after internet restoration ≤ 30 seconds
* API response ≤ 2 seconds (average)

---

# 20. Offline Requirements

The application must:

* Authenticate existing cached sessions
* Cache user profile
* Store messages locally
* Queue outgoing messages
* Queue attendance records
* Queue file transfers
* Synchronize automatically when connectivity is restored

---

# 21. BLE Requirements

The system shall:

* Discover nearby devices
* Establish BLE connections
* Exchange encrypted payloads
* Maintain mesh connectivity
* Detect signal strength
* Retry failed connections
* Handle device disconnects gracefully

---

# 22. Acceptance Criteria

The project is considered successful when:

* Users can authenticate securely.
* BLE discovery functions reliably.
* Offline messaging works correctly.
* Attendance is recorded offline and synchronized later.
* Department and office discovery are accurate.
* Emergency broadcasts reach nearby devices.
* The application maintains acceptable performance and stability.

---

# 23. Future Scope

* Multi-campus support
* BLE Mesh optimization
* Wi-Fi Direct integration
* QR-based attendance
* Biometric authentication
* AI-powered campus assistant
* Indoor positioning using BLE beacons
* Campus IoT integration
* Digital student ID
* Analytics dashboard with predictive insights

---

# End of Document
