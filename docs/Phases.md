# Development Phases

## Phase 1: Foundation & Setup
**Goal:** Establish the base architecture and essential project infrastructure.
- Set up Flutter project with Clean Architecture.
- Configure Riverpod for state management.
- Set up local Isar database.
- Implement UI Design System (Colors, Typography, Components).
- Create basic Authentication (Login, Registration) UI & Local State.

## Phase 2: Core Connectivity & Discovery
**Goal:** Implement the BLE Mesh foundation.
- Implement BLE permissions handling (Android & iOS).
- Develop BLE Scanner to discover nearby devices (Beacons and other Users).
- Display a list of nearby peers/users.
- Establish basic peer-to-peer Bluetooth connections.

## Phase 3: Offline Features Implementation
**Goal:** Build out the core functionality that operates without internet.
- Implement Offline 1-to-1 Messaging using BLE.
- Implement Offline Group Messaging.
- Implement Offline File Sharing over BLE.
- Build Smart Attendance feature (BLE broadcast from faculty, students receive and cache locally).
- Implement Offline Emergency SOS broadcasts.

## Phase 4: Synchronization & Backend Integration
**Goal:** Connect the app to the cloud and enable data syncing.
- Integrate REST API for backend communication.
- Implement automatic sync mechanism (Upload cached messages, attendance, files when internet restores).
- Implement background syncing tasks.
- Implement Firebase Cloud Messaging (FCM) for online push notifications.

## Phase 5: Advanced Features & Navigation
**Goal:** Add campus discovery and indoor navigation.
- Implement Campus Directory (Departments, Offices, Faculty search).
- Integrate Indoor Navigation using BLE Beacons (calculating distance/direction based on RSSI).
- Build Web Admin Dashboard for managing beacons, users, and campus data.

## Phase 6: Testing, Polish & Launch
**Goal:** Ensure stability and prepare for release.
- Comprehensive testing of BLE mesh in real-world scenarios (multiple devices).
- UI/UX refinements and animation polishing.
- Optimize battery usage for background BLE scanning.
- Security audits (JWT, encryption).
- App Store and Play Store deployment.
