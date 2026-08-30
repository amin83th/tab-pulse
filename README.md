# Tab Pulse

A lightweight, framework-agnostic TypeScript library for browser tab notifications.

Tab Pulse helps web applications notify users about new messages, tickets, notifications, or any other event by updating the browser tab title and displaying a notification badge on the favicon.

Inspired by the tab notification experience used by applications such as Telegram Web.

---

## ✨ Features

* 🔔 Browser tab notifications
* 🔴 Favicon notification badge
* 🏷️ Custom notification labels
* 🔢 Custom notification counts
* 🧩 Framework agnostic
* 📦 Written in TypeScript
* 🪶 Lightweight and dependency-free at runtime
* ♻️ Restore the original title and favicon
* 🌐 Works with Vanilla JavaScript and modern frontend frameworks

---

## 📦 Installation

Install Tab Pulse with npm:

```bash
npm install tab-pulse
```

Or with pnpm:

```bash
pnpm add tab-pulse
```

Or with yarn:

```bash
yarn add tab-pulse
```

---

## 🚀 Quick Start

Import `tabPulse` and call `notify()` when you want to notify the user.

```ts
import { tabPulse } from "tab-pulse";

tabPulse.notify(3, "messages");
```

The browser tab will display:

```text
3 messages
```

and the favicon will receive a notification badge.

To clear the notification:

```ts
tabPulse.clear();
```

The original page title and favicon will be restored.

---

## 💡 Example

Imagine your application receives three new messages:

```ts
import { tabPulse } from "tab-pulse";

function onNewMessages(count: number) {
    tabPulse.notify(count, "messages");
}

onNewMessages(3);
```

The browser tab becomes:

```text
3 messages
```

You can use any label that makes sense for your application:

```ts
tabPulse.notify(5, "new tickets");
```

```ts
tabPulse.notify(1, "notification");
```

```ts
tabPulse.notify(12, "unread emails");
```

The label is completely controlled by the developer.

---

## 🧹 Clear Notification

When the user has seen the notification, clear it:

```ts
tabPulse.clear();
```

This restores:

* The original document title
* The original favicon

---

## 🧩 Framework Support

Tab Pulse does not depend on any frontend framework.

It works with applications built with:

* Vanilla JavaScript
* TypeScript
* React
* Angular
* Vue
* Svelte
* Other browser-based applications

### React

```ts
import { tabPulse } from "tab-pulse";

tabPulse.notify(3, "messages");
```

### Angular

```ts
import { tabPulse } from "tab-pulse";

tabPulse.notify(3, "tickets");
```

### Vue

```ts
import { tabPulse } from "tab-pulse";

tabPulse.notify(2, "notifications");
```

The library communicates directly with browser APIs rather than framework-specific APIs, so no framework adapter is required.

---

## 🏗️ How It Works

Tab Pulse operates at the browser level.

```text
Your Application
       │
       │ notify()
       ▼
   Tab Pulse
       │
       ├──────────────► Document Title
       │
       └──────────────► Favicon
```

For example:

```ts
tabPulse.notify(3, "messages");
```

results in:

```text
Browser Tab

🔴  3 messages
```

When the notification is cleared:

```ts
tabPulse.clear();
```

the original browser tab state is restored.

---

## 📁 Project Structure

```text
tab-pulse/
│
├── src/
│   ├── core/
│   │   ├── TabPulse.ts
│   │   ├── title.ts
│   │   └── favicon.ts
│   │
│   └── index.ts
│
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── LICENSE
```

### Core

The `core` directory contains the framework-independent implementation.

#### `TabPulse.ts`

The main class responsible for coordinating the notification behavior.

#### `title.ts`

Handles browser document title updates and restoration.

#### `favicon.ts`

Handles favicon notification badges and restoration.

#### `index.ts`

Defines the public API exposed by the package.

---

## 🔌 API

### `tabPulse.notify(count, label)`

Creates a browser tab notification.

```ts
tabPulse.notify(3, "messages");
```

#### Parameters

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| `count`   | `number` | Number displayed in the notification |
| `label`   | `string` | Custom text displayed with the count |

---

### `tabPulse.clear()`

Removes the current notification and restores the original tab state.

```ts
tabPulse.clear();
```

---

### `TabPulse`

The underlying class is also exported:

```ts
import { TabPulse } from "tab-pulse";

const pulse = new TabPulse();

pulse.notify(3, "messages");

pulse.clear();
```

This allows developers to create their own `TabPulse` instance when needed.

---

## 🛠️ Development

Clone the repository:

```bash
git clone https://github.com/amin83th/tab-pulse.git
```

Navigate into the project:

```bash
cd tab-pulse
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the library:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📦 Build

Tab Pulse uses Vite's Library Mode to build the package.

The library entry point is:

```text
src/index.ts
```

The production build is generated in:

```text
dist/
```

---

## 🎯 Use Cases

Tab Pulse can be useful for applications that need to notify users while they are viewing another browser tab.

Examples include:

* 💬 Chat applications
* 🎫 Ticketing systems
* 📧 Email clients
* 🔔 Notification systems
* 📊 Admin dashboards
* 🛒 E-commerce dashboards
* 📈 Monitoring systems
* 🧑‍💼 CRM applications
* 📨 Customer support systems

For example, a support dashboard could notify an agent when a new ticket arrives:

```ts
tabPulse.notify(1, "new ticket");
```

---

## 🗺️ Roadmap

The project is actively being developed.

Planned improvements include:

* [ ] Automatic notification clearing when the user returns to the tab
* [ ] Favicon badge customization
* [ ] Custom badge colors
* [ ] Custom title formatting
* [ ] Notification title animation
* [ ] Better favicon format support
* [ ] Unit tests
* [ ] Improved TypeScript API
* [ ] Documentation website
* [ ] More configuration options

Have an idea?

Feel free to open an issue or submit a pull request.

---

## 🤝 Contributing

Contributions are welcome.

If you find a bug or have an idea for improving Tab Pulse:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/my-feature
```

3. Make your changes
4. Run the tests and build
5. Commit your changes

```bash
git commit -m "feat: add my feature"
```

6. Push your branch

```bash
git push origin feature/my-feature
```

7. Open a Pull Request

---

## 📄 License

Tab Pulse is released under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mohammad Amin Taheri**

Frontend Developer interested in building reusable tools and developer-focused products.

GitHub: [@amin83th](https://github.com/amin83th)

---

## ⭐ Support

If Tab Pulse is useful for your project, consider giving the repository a ⭐ on GitHub.

Every star helps the project grow.
