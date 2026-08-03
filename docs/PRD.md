# Product Requirements Document (PRD)

## 1. Project Information
**Project Name:** CampusMesh
**Platform:** Flutter (Android, iOS) + Web Admin Dashboard
**Status:** Draft
**Version:** 1.0

## 2. Objective
CampusMesh aims to build an offline-first Smart Campus Platform to facilitate reliable communication, resource discovery, attendance tracking, and emergency services utilizing Bluetooth Low Energy (BLE) Mesh networking. The platform guarantees functionality in environments without internet connectivity.

## 3. Target Audience
- **Students:** For chatting, sharing files, attendance, and campus discovery.
- **Faculty:** For managing attendance, broadcasting messages, and student interaction.
- **Visitors:** For campus navigation and discovering departments/offices.
- **Administrators:** For managing users, roles, beacons, and viewing analytics.

## 4. Key Features & Requirements

### 4.1 Authentication & User Management
- Secure user registration and login (JWT based).
- Profile management and role-based access.

### 4.2 BLE Mesh & Offline Communication
- Device scanning and peer-to-peer connection via Bluetooth Low Energy.
- 1-to-1 and Group messaging.
- File sharing (images, documents).
- Messages and files queue locally and sync when internet is restored.

### 4.3 Smart Attendance
- Faculty can initiate BLE-based attendance.
- Students can mark attendance automatically or manually when in range.
- Offline attendance records are cached and uploaded upon internet connectivity.

### 4.4 Campus Discovery & Navigation
- Directory of faculty, departments, and offices.
- Indoor navigation using BLE beacons.

### 4.5 Emergency & Notifications
- SOS button for immediate alerts to nearby devices.
- Broadcast alerts and push notifications.

## 5. Non-Functional Requirements
- **Performance:** App startup < 3s, BLE discovery < 5s.
- **Offline-First:** All core features (messaging, attendance, discovery) must work over BLE without internet.
- **Security:** Encrypted local storage (Isar), secure BLE communication, JWT authentication.
- **Cross-Platform:** Built with Flutter for seamless Android and iOS support.

## 6. Success Metrics
- Seamless connection between nearby devices using BLE.
- 100% data sync reliability after internet connection restores.
- Accurate and fast offline attendance marking.
