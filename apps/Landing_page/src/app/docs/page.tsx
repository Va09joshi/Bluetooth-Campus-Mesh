"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Book, Cpu, Zap, Code, Shield } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './page.css';

const latencyData = [
  { nodes: 10, mesh: 12, wifi: 45, cellular: 120 },
  { nodes: 50, mesh: 18, wifi: 85, cellular: 125 },
  { nodes: 100, mesh: 24, wifi: 210, cellular: 130 },
  { nodes: 250, mesh: 35, wifi: 500, cellular: 145 },
  { nodes: 500, mesh: 42, wifi: null, cellular: 180 }, // Wi-Fi fails at high density
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -75% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="docs-layout">
      {/* Sidebar */}
      <aside className="docs-sidebar">
        <Link href="/" className="docs-logo">
          <ArrowLeft size={20} />
          <span>Mesh. Docs</span>
        </Link>
        
        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <span className="sidebar-heading">Introduction</span>
            <a href="#getting-started" className={`sidebar-link ${activeSection === 'getting-started' ? 'active' : ''}`} onClick={() => setActiveSection('getting-started')}>Getting Started</a>
            <a href="#architecture" className={`sidebar-link ${activeSection === 'architecture' ? 'active' : ''}`} onClick={() => setActiveSection('architecture')}>Architecture</a>
            <a href="#features" className={`sidebar-link ${activeSection === 'features' ? 'active' : ''}`} onClick={() => setActiveSection('features')}>Features</a>
          </div>
          
          <div className="sidebar-section">
            <span className="sidebar-heading">Core Concepts</span>
            <a href="#security" className={`sidebar-link ${activeSection === 'security' ? 'active' : ''}`} onClick={() => setActiveSection('security')}>Security & Encryption</a>
            <a href="#authentication" className={`sidebar-link ${activeSection === 'authentication' ? 'active' : ''}`} onClick={() => setActiveSection('authentication')}>Authentication</a>
          </div>
          
          <div className="sidebar-section">
            <span className="sidebar-heading">Metrics</span>
            <a href="#performance" className={`sidebar-link ${activeSection === 'performance' ? 'active' : ''}`} onClick={() => setActiveSection('performance')}>Performance Benchmarks</a>
          </div>
          
          <div className="sidebar-section">
            <span className="sidebar-heading">Developers & Legal</span>
            <a href="#api" className={`sidebar-link ${activeSection === 'api' ? 'active' : ''}`} onClick={() => setActiveSection('api')}>API Reference</a>
            <a href="#policy" className={`sidebar-link ${activeSection === 'policy' ? 'active' : ''}`} onClick={() => setActiveSection('policy')}>Privacy & Policy</a>
            <a href="#contributing" className={`sidebar-link ${activeSection === 'contributing' ? 'active' : ''}`} onClick={() => setActiveSection('contributing')}>Contributing</a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="docs-main">
        <header className="docs-header">
          <h1 className="docs-title">Documentation Hub</h1>
          <p className="docs-subtitle">Learn how to integrate, deploy, and scale decentralized Bluetooth mesh networks across your campus infrastructure.</p>
        </header>

        <div className="docs-prose">
          <section id="getting-started">
            <h2>Getting Started</h2>
            <p>
              Welcome to the official documentation for <strong>Bluetooth-Campus-Mesh</strong>. This protocol enables smart devices to communicate securely without relying on cellular towers or centralized Wi-Fi routers.
            </p>
            <p>
              To initialize a node on a device, you simply need to import the core library and call the initialize function:
            </p>
            <pre><code>{`import { MeshNode } from '@mesh/core';

// Initialize a new node on the device
const node = new MeshNode({
  deviceId: 'device-xyz',
  beaconInterval: 1000, // ms
});

await node.start();
console.log('Node active on the mesh network');`}</code></pre>
          </section>

          <section id="architecture">
            <h2>Architecture Overview</h2>
            <p>
              Traditional communication relies on a <em>hub-and-spoke</em> model where every device must talk to a centralized server. If the server or the connection to it fails, communication halts entirely.
            </p>
            <p>
              Mesh networking utilizes a decentralized topology. Every device acts as both a client and a router, relaying encrypted packets to their final destination.
            </p>
            
            <h3>Comparison Table</h3>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Bluetooth Mesh</th>
                    <th>Traditional Wi-Fi</th>
                    <th>Cellular (LTE/5G)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dependency</strong></td>
                    <td>None (Device-to-device)</td>
                    <td>Router & ISP</td>
                    <td>Cell Tower & Carrier</td>
                  </tr>
                  <tr>
                    <td><strong>Range</strong></td>
                    <td>Dynamic (Extends per node)</td>
                    <td>Fixed (~50-100m)</td>
                    <td>Fixed (Miles, if in range)</td>
                  </tr>
                  <tr>
                    <td><strong>Cost per Node</strong></td>
                    <td>Free</td>
                    <td>High (Infrastructure)</td>
                    <td>High (Data Plans)</td>
                  </tr>
                  <tr>
                    <td><strong>Failure Point</strong></td>
                    <td>None (Decentralized)</td>
                    <td>Single (The Router)</td>
                    <td>Single (The Tower)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="performance">
            <h2>Performance Benchmarks</h2>
            <p>
              One of the primary concerns with decentralized routing algorithms is packet latency at scale. Our proprietary routing protocol optimizes paths dynamically, resulting in sub-50ms latency even in highly dense environments like lecture halls.
            </p>
            <p>
              Below is a benchmark showing message latency (in milliseconds) as the number of active nodes in a single building increases. Note how Traditional Wi-Fi routers become saturated and drop packets above 200 concurrent connections, whereas the Mesh becomes <em>stronger</em> with more nodes.
            </p>
            
            <div className="docs-chart-container">
              <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                  <LineChart
                    data={latencyData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="nodes" stroke="#6b7280" fontSize={12} tickLine={false} />
                    <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} unit="ms" />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                      labelStyle={{ fontWeight: 'bold', color: '#111827' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                    <Line type="monotone" name="Mesh (Our Protocol)" dataKey="mesh" stroke="#d32f2f" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" name="Cellular 5G" dataKey="cellular" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" name="Traditional Wi-Fi" dataKey="wifi" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          <section id="security">
            <h2>Security & Encryption</h2>
            <p>
              Security is paramount in a decentralized network where untrusted devices act as relays. Mesh employs a dual-layer encryption strategy.
            </p>
            <ul>
              <li><strong>Network Layer:</strong> AES-CCM encrypts the routing data, ensuring that malicious nodes cannot map the network topology or perform traffic analysis.</li>
              <li><strong>Application Layer:</strong> AES-256-GCM provides End-to-End Encryption (E2EE) between the sender and receiver. Intermediate relay nodes cannot read the message contents.</li>
            </ul>
          </section>

          <section id="authentication">
            <h2>Authentication (Login & Sign Up)</h2>
            <p>
              While Mesh operates without a central server, user identities are cryptographically signed and verifiable. When a user first installs the app, they must create a local cryptographic identity.
            </p>
            <p>
              The Sign Up process generates a public/private key pair locally. The public key acts as the user's "username" across the mesh:
            </p>
            <pre><code>{`// Sign Up / Create Identity
const identity = await MeshAuth.signUp({
  displayName: 'John Doe',
  deviceType: 'mobile'
});

// Save secure credentials to device storage
await secureStorage.save(identity.privateKey);`}</code></pre>
            <p>
              Subsequent logins simply require the device to unlock the private key using local biometric authentication (FaceID/TouchID):
            </p>
            <pre><code>{`// Login to Mesh Network
const isAuthenticated = await MeshAuth.loginWithBiometrics();
if (isAuthenticated) {
  meshNode.broadcastPresence();
}`}</code></pre>
          </section>

          <section id="features">
            <h2>Additional Features</h2>
            <p>
              Mesh is packed with powerful features designed for campus environments:
            </p>
            <ul>
              <li><strong>Offline Messaging:</strong> Send direct messages, group chats, and broadcasts without Wi-Fi or cellular data.</li>
              <li><strong>Emergency Broadcasts:</strong> Campus security can broadcast authenticated, high-priority alerts that instantly propagate to all active nodes.</li>
              <li><strong>Offline Maps:</strong> Share real-time location data securely with specific study groups using local mesh triangulation.</li>
              <li><strong>Battery Optimization:</strong> BLE (Bluetooth Low Energy) ensures the app consumes less than 3% of battery life per day.</li>
            </ul>
          </section>

          <section id="api">
            <h2>API Reference</h2>
            <p>
              The CampusMesh platform provides secure, consistent, and scalable RESTful endpoints that support both online operations and offline synchronization.
            </p>

            <h3>API Principles</h3>
            <ul>
              <li>RESTful Endpoints & Stateless Requests</li>
              <li>Versioned APIs (<code>/api/v1</code>)</li>
              <li>JSON Request & Response</li>
              <li>Secure Authentication (JWT, Refresh Tokens, RBAC, HTTPS Only)</li>
              <li>Consistent Error Handling & Pagination/Filtering Support</li>
              <li>Offline Synchronization Support</li>
            </ul>

            <div style={{ backgroundColor: 'var(--color-surface)', padding: '16px', borderRadius: '8px', marginTop: '24px', marginBottom: '32px' }}>
              <strong>Base URL:</strong> <code>https://api.campusmesh.com/api/v1</code>
            </div>

            <h3>Core Endpoints</h3>
            
            <h4>Authentication</h4>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>POST</strong></td><td><code>/auth/register</code></td><td>Register a new user</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/auth/login</code></td><td>User login</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/auth/logout</code></td><td>Logout current session</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/auth/refresh</code></td><td>Refresh access token</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/auth/forgot-password</code></td><td>Send reset OTP</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/auth/verify-otp</code></td><td>Verify OTP</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/auth/reset-password</code></td><td>Reset password</td></tr>
                </tbody>
              </table>
            </div>

            <h4>User</h4>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>GET</strong></td><td><code>/users/me</code></td><td>Get current profile</td></tr>
                  <tr><td><strong>PUT</strong></td><td><code>/users/me</code></td><td>Update profile</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/users/&#123;id&#125;</code></td><td>Get user details</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/users/nearby</code></td><td>Nearby users via BLE</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/users/search</code></td><td>Search users</td></tr>
                </tbody>
              </table>
            </div>

            <h4>Bluetooth Mesh</h4>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>POST</strong></td><td><code>/ble/discover</code></td><td>Sync discovered devices</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/ble/connect</code></td><td>Register BLE connection</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/ble/sync</code></td><td>Sync offline data</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/ble/status</code></td><td>Mesh status</td></tr>
                </tbody>
              </table>
            </div>

            <h4>Messaging & Groups</h4>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>GET</strong></td><td><code>/chats</code></td><td>Chat list</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/messages</code></td><td>Send message</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/groups</code></td><td>Create group</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/groups/&#123;id&#125;/members</code></td><td>Add member</td></tr>
                </tbody>
              </table>
            </div>

            <h4>Campus Directory & Navigation</h4>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>GET</strong></td><td><code>/departments</code></td><td>List departments</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/buildings</code></td><td>List buildings</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/navigation/map</code></td><td>Campus map</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/navigation/route</code></td><td>Route guidance</td></tr>
                </tbody>
              </table>
            </div>

            <h4>Emergency & Notifications</h4>
            <div className="docs-table-wrapper">
              <table className="docs-table">
                <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>POST</strong></td><td><code>/emergency/sos</code></td><td>Trigger SOS</td></tr>
                  <tr><td><strong>POST</strong></td><td><code>/emergency/broadcast</code></td><td>Emergency broadcast</td></tr>
                  <tr><td><strong>GET</strong></td><td><code>/notifications</code></td><td>Notification list</td></tr>
                </tbody>
              </table>
            </div>

            <h3>Standard Responses</h3>
            <p><strong>Success Response:</strong></p>
            <pre><code>{`{
  "success": true,
  "message": "Request successful",
  "data": {}
}`}</code></pre>

            <p><strong>Error Response:</strong></p>
            <pre><code>{`{
  "success": false,
  "message": "Invalid request",
  "errors": []
}`}</code></pre>

          </section>

          <section id="policy">
            <h2>Privacy & Policy</h2>
            <p>
              Because Mesh does not rely on centralized servers, we do not collect, store, or monetize your data. 
              All data is routed blindly by peers and is impossible to decrypt without the destination private key.
            </p>
            <p>
              Institutions using our Enterprise Management dashboard only receive anonymized telemetry regarding network health (e.g., node density, packet drop rates), and never message contents or personal identities.
            </p>
            
            {/* Massive dummy policy content without scroll box */}
            <div style={{ marginTop: '24px' }}>
              <h3 style={{ marginTop: 0 }}>Extended Enterprise Agreement & End-User License</h3>
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i}>
                  <h4>Section {i + 1}: {['Data Processing', 'Liability Limitations', 'User Obligations', 'Cryptographic Standards', 'Anonymization Protocols'][i % 5]}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
                    In accordance with the decentralized nature of the Protocol, subsection {i}.A dictates that no central authority, including but not limited to the University, Campus Security, or the Developers, shall have the technical capacity to intercept, decipher, or otherwise access encrypted payloads traversing the mesh network. Furthermore, the routing of said packets through intermediate nodes constitutes a blind relay action, absolving the intermediate node operator of any liability regarding the contents of the relayed transmission. 
                    {(i % 3 === 0) ? " The user acknowledges that cryptographic key generation occurs locally on the hardware enclave of their device, and loss of said keys results in irrecoverable loss of identity and message history." : ""}
                    {(i % 4 === 0) ? " Telemetry data, when enabled voluntarily by the end-user, is scrubbed of all identifiable markers prior to transmission, utilizing differential privacy algorithms to inject mathematical noise into the dataset." : ""}
                    This section remains in full force and effect indefinitely, surviving any termination of the application usage or deletion of the local cryptographic identity.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="contributing">
            <h2>Contributing</h2>
            <p>
              Mesh is open-source and built by the community. We welcome contributions ranging from core protocol optimizations in Rust to UI improvements in the React Native app.
            </p>
            <p>
              Please read our <code>CONTRIBUTING.md</code> file in the GitHub repository before submitting pull requests.
            </p>

            {/* Massive dummy contributing content without scroll box */}
            <div style={{ marginTop: '24px' }}>
              <h3 style={{ marginTop: 0 }}>Developer Contribution Guidelines</h3>
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i}>
                  <h4>Guideline {i + 1}: {['Code Formatting', 'Pull Request Review Process', 'Writing Tests', 'Architecture Decisions', 'Commit Messaging'][i % 5]}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-secondary-text)' }}>
                    When contributing to the open-source mesh protocol, ensure that you follow the strict guidelines outlined in chapter {i}. All new code submissions must pass the automated CI/CD pipeline which includes static analysis, memory leak detection (vital for low-end Android devices running the background mesh service), and cryptographic auditing. 
                    {(i % 2 === 0) ? " Reviewers will reject PRs that lack comprehensive unit tests covering edge cases in the peer discovery algorithm." : ""}
                    {(i % 5 === 0) ? " Ensure you prefix your commit messages according to the Conventional Commits specification (e.g., feat:, fix:, chore:, docs:)." : ""}
                    By submitting this code, you license it under the MIT License and assign joint copyright to the Open Campus Mesh Foundation.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
