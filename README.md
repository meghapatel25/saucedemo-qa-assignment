# SauceDemo QA Testing Assignment

## Project Overview

This project focuses on manual testing, bug reporting, UI automation, and API testing of the SauceDemo e-commerce website.

The objective is to validate important functionalities such as login, product inventory, sorting, shopping cart, and checkout, while identifying and documenting defects.

**Application:** SauceDemo  
**Website:** https://www.saucedemo.com/

---

## Objectives

- Perform manual testing of important application functionalities.
- Validate application behavior using different test users.
- Identify, document, and report defects.
- Execute UI automation tests using Playwright.
- Perform API testing using Playwright API requests.
- Maintain bug reports and test tracking through GitHub.

---

## Tools & Technologies

| Tool            | Purpose                 |
| --------------- | ----------------------- |
| Manual Testing  | Functional verification |
| Playwright      | UI and API automation   |
| JavaScript      | Automation scripting    |
| Node.js         | JavaScript runtime      |
| npm             | Package management      |
| Chromium        | Browser testing         |
| Git             | Version control         |
| GitHub          | Repository hosting      |
| GitHub Issues   | Bug tracking            |
| GitHub Projects | Kanban tracking         |

---

## Test Users

| Username                  | Testing Purpose                  |
| ------------------------- | -------------------------------- |
| `standard_user`           | Normal functional testing        |
| `locked_out_user`         | Login restriction testing        |
| `problem_user`            | Functional and UI defect testing |
| `performance_glitch_user` | Performance behavior observation |

**Password:** `secret_sauce`

---

## Testing Coverage

### Manual Testing

Manual testing covers:

- Login and logout
- Valid and invalid credentials
- Locked-out user behavior
- Password masking
- Inventory page and product details
- Product names and prices
- Product sorting
- Add/remove cart functionality
- Cart contents
- Checkout form validations
- Order completion
- User-specific application behavior

### UI Automation Testing

Automated UI tests using Playwright cover:

1. Login page visibility
2. Valid user login
3. Invalid login error
4. Locked-out user login restriction
5. Inventory product count
6. Product sorting by price (low to high)
7. Add product to cart
8. Checkout completion

### API Automation Testing

API testing using Playwright covers:

1. GET users list
2. GET single user
3. POST create user
4. GET invalid user
5. Login request with missing password

---

## Bug Reports

The following issues were identified during testing:

| Bug ID  | Title                                         | User                      |
| ------- | --------------------------------------------- | ------------------------- |
| BUG-001 | Incorrect product details navigation          | `problem_user`            |
| BUG-002 | Product sorting functionality not working     | `problem_user`            |
| BUG-003 | Cart buttons become unresponsive              | `problem_user`            |
| BUG-004 | Slow page navigation and loading observations | `performance_glitch_user` |

Detailed bug reports include reproduction steps, expected and actual results, and supporting evidence where available.

Bug tracking is maintained through GitHub Issues and a GitHub Project board.

---

## Repository Structure

```text
saucedemo-qa-assignment/
│
├── bug-reports/
│   ├── BUG-001.md
│   ├── BUG-002.md
│   ├── BUG-003.md
│   └── BUG-004.md
│
├── screenshots/
│   ├── BUG-001/
│   ├── BUG-002/
│   ├── BUG-003/
│   └── BUG-004/
│
├── test-plan/
│   └── Test_Plan.md
│
├── test-results/
│   └── Manual_Test_Cases
│
├── tests/
│   ├── login.spec.js
│   ├── saucedemo.spec.js
│   └── api.spec.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## How to Run the Automation Tests

### Prerequisites

- Node.js
- npm
- Git

### Install Dependencies

```bash
npm install
```

### Install Playwright Browser

```bash
npx playwright install chromium
```

### Run All Tests

```bash
npm test
```

### Run UI Tests

```bash
npx playwright test tests/login.spec.js tests/saucedemo.spec.js
```

### Run API Tests

```bash
npx playwright test tests/api.spec.js
```

---

## Test Execution Summary

| Test Type        | Test Cases | Status |
| ---------------- | ---------: | ------ |
| UI Automation    |          8 | Passed |
| API Automation   |          5 | Passed |
| Total Automation |         13 | Passed |

Manual testing was also performed, and identified issues were documented through bug reports with evidence.

---

## Test Management

- Test cases and execution results are maintained in the project documentation.
- Defects are reported using GitHub Issues.
- Issue status is tracked through a GitHub Project board.
- Screenshots and recordings are maintained as test evidence.

---

## Author

**Megha Patel**

QA Testing Assignment – Manual Testing, Playwright UI Automation & API Testing
