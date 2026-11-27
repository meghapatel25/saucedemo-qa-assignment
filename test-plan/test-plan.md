# SauceDemo – Test Plan

## 1. Introduction

This test plan defines the testing approach, scope, objectives, test environment, and activities for testing the SauceDemo e-commerce website.

The application is tested to verify the functionality of login, product inventory, product sorting, shopping cart, checkout, and related user behavior.

**Application URL:** https://www.saucedemo.com/

---

## 2. Testing Objectives

- Verify that users can log in with valid credentials.
- Verify appropriate error messages for invalid login attempts.
- Validate locked-out user behavior.
- Verify product inventory and product details.
- Validate product sorting functionality.
- Verify adding and removing products from the cart.
- Validate checkout and order completion.
- Identify and document application defects.
- Perform UI automation using Playwright.
- Perform API testing and validate response status codes and data.

---

## 3. Scope of Testing

### 3.1 In Scope

The following functionalities are included in testing:

- Login page
- Login with valid credentials
- Login with invalid credentials
- Locked-out user behavior
- Password masking
- Inventory page
- Product names and prices
- Product details navigation
- Product sorting
- Add to cart
- Remove from cart
- Shopping cart
- Checkout information
- Checkout overview
- Order completion
- Functional behavior of `problem_user`
- Performance observations of `performance_glitch_user`
- UI automation testing
- API automation testing

### 3.2 Out of Scope

The following activities are not included:

- Real payment processing
- Security penetration testing
- Load and stress testing
- Production transaction testing
- Extensive cross-browser testing
- Mobile device compatibility testing

---

## 4. Test Approach

### 4.1 Manual Testing

Manual testing is performed by interacting with the application through the browser.

Test cases are executed to verify functionality, expected results, error handling, and user-specific behavior.

Test execution results are recorded as Pass or Fail, and defects are documented when actual behavior differs from expected behavior.

### 4.2 UI Automation Testing

Playwright is used to automate important user interface scenarios.

Automated tests validate:

- Login functionality
- Login error handling
- Locked-out user behavior
- Inventory display
- Product sorting
- Cart functionality
- Checkout process

### 4.3 API Testing

API testing is performed using Playwright API requests against ReqRes.

The API tests validate:

- GET requests
- POST requests
- Response status codes
- Response body data
- Error responses

---

## 5. Test Environment

| Environment Component | Details                    |
| --------------------- | -------------------------- |
| Application           | SauceDemo                  |
| Application URL       | https://www.saucedemo.com/ |
| Operating System      | Windows                    |
| Browser               | Chromium                   |
| Browser Automation    | Playwright                 |
| Programming Language  | JavaScript                 |
| Runtime Environment   | Node.js                    |
| Package Manager       | npm                        |
| API Testing Tool      | Playwright API             |
| API Service           | ReqRes                     |
| Defect Tracking       | GitHub Issues              |
| Test Tracking         | GitHub Projects            |

---

## 6. Test Users

| Username                  | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| `standard_user`           | Verify normal application functionality    |
| `locked_out_user`         | Verify login restriction                   |
| `problem_user`            | Identify UI and functional issues          |
| `performance_glitch_user` | Observe page loading and navigation delays |

**Password for SauceDemo users:** `secret_sauce`

---

## 7. Test Scenarios

### 7.1 Login Testing

- Verify the login page opens successfully.
- Verify login using valid credentials.
- Verify login using invalid credentials.
- Verify the locked-out user cannot log in.
- Verify the error message is displayed for invalid login.
- Verify password characters are masked.

### 7.2 Inventory Testing

- Verify inventory page opens after successful login.
- Verify products are displayed.
- Verify product names and prices.
- Verify product details page navigation.
- Verify product sorting by name.
- Verify product sorting by price.

### 7.3 Cart Testing

- Verify a product can be added to the cart.
- Verify the cart badge updates.
- Verify multiple products can be added.
- Verify products can be removed from the cart.
- Verify cart contents are correct.

### 7.4 Checkout Testing

- Verify checkout can be initiated.
- Verify checkout information fields.
- Verify mandatory field validation.
- Verify checkout overview details.
- Verify order completion.
- Verify confirmation message after successful order.

### 7.5 User-Specific Testing

- Verify `problem_user` application behavior.
- Record incorrect product navigation.
- Verify sorting behavior for the affected user.
- Observe cart button behavior.
- Observe page loading and navigation delays for `performance_glitch_user`.

### 7.6 API Testing

- Verify GET users list endpoint.
- Verify GET single user endpoint.
- Verify POST create user endpoint.
- Verify GET invalid user response.
- Verify login request with missing password.
- Validate status codes and response data.

---

## 8. Defect Reporting

Defects are documented with the following information:

- Bug ID
- Bug title
- Description
- Test environment
- Test user
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Evidence

Defects are tracked using GitHub Issues.

A GitHub Project board is used to track defect status and progress.

---

## 9. Entry Criteria

Testing can begin when:

- The application is accessible.
- Test accounts are available.
- The test environment is ready.
- Test cases are prepared.
- Playwright and required dependencies are installed.
- Browser is available for testing.

---

## 10. Exit Criteria

Testing is considered complete when:

- Planned manual test cases have been executed.
- Important application functionalities have been tested.
- Test execution results have been documented.
- Identified defects have been reported.
- UI automation tests have been executed.
- API automation tests have been executed.
- Testing documentation and evidence are prepared.
- Project files are uploaded to GitHub.

---

## 11. Test Deliverables

The following deliverables are included:

- Test Plan
- Manual Test Cases
- Test Execution Results
- Bug Reports
- Screenshots and video evidence
- GitHub Issues
- GitHub Project Board
- Playwright UI Automation Scripts
- API Automation Scripts
- README Documentation

---

## 12. Test Summary

| Testing Activity | Coverage                                                                           |
| ---------------- | ---------------------------------------------------------------------------------- |
| Manual Testing   | Login, inventory, product details, sorting, cart, checkout, user-specific behavior |
| UI Automation    | 8 test cases                                                                       |
| API Automation   | 5 test cases                                                                       |
| Defect Reporting | 4 documented bugs/observations                                                     |
| Test Management  | GitHub Issues and Project Board                                                    |
| Evidence         | Screenshots and recordings                                                         |

---

## 13. Conclusion

Testing of the SauceDemo application was performed using manual testing and Playwright automation. Functional scenarios were executed for login, inventory, sorting, cart, and checkout. API scenarios were also automated using Playwright.

Issues and observations identified during testing were documented and tracked using GitHub Issues and a Project board.
