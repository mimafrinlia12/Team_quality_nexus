

👥 Team Members

Team Name: Quality Nexus

- Mim Afrin Lia
- Atik Shahriar Safi
- Julfiker Nayeem
- Vaggo Roy
- Sumaiya Akter Sraboni

📌 Project Overview

This project is an SQA (Software Quality Assurance) automation project focused on testing the Recruitment feature of the OrangeHRM demo website.

Demo Website: OrangeHRM
Tested Feature: Recruitment
Automated Test Cases: 23

The main goal of this project is to automate functional test cases and verify that the Recruitment module works correctly under different scenarios.

🧪 Testing & Automation

The project uses Playwright for browser automation and follows the Page Object Model (POM) design pattern to keep the automation framework organized, reusable, and maintainable.

Technologies & Tools

- Programming Language: JavaScript
- Automation Framework: Playwright
- Design Pattern: Page Object Model (POM)
- Test Data Generation: Faker
- File System Handling: Node.js "fs"
- Authentication/Session Storage: "storage.json"



🎯 Recruitment Feature

The Recruitment module of OrangeHRM was selected as the target feature for automation.

A total of 23 test cases have been automated covering different functional scenarios of the Recruitment feature.

The test cases include scenarios related to:

- Candidate creation
- Candidate information validation
- Search functionality
- Vacancy creation
- Different positive and negative scenarios

🏗️ Framework Approach

Page Object Model (POM)

POM is used to separate page-specific locators and actions from the test cases.

This helps to:

- Reduce code duplication
- Improve code readability
- Make maintenance easier
- Reuse page actions across multiple test cases

Faker

Faker is used to generate dynamic test data such as candidate names, email addresses, and other required information.

This makes the automated tests more realistic and reduces dependency on static test data.

File System ("fs")

Node.js "fs" module is used for file-related operations, including handling test data and automation-related files where required.

"storage.json"

"storage.json" is used to maintain the authenticated browser/session state so that tests can reuse the existing login session instead of performing login repeatedly.

📊 Test Coverage

Item| Details
Project Type| SQAT Automation
Application| OrangeHRM Demo
Feature| Recruitment
Automated Test Cases| 23
Language| JavaScript
Framework| Playwright
Design Pattern| POM
Test Data| Faker
File Handling| fs
Session Storage| storage.json

🚀 Running the Project

Install the project dependencies:

npm install

Run all Playwright tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

View the Playwright HTML report:

npx playwright show-report

👨‍💻 Team

Quality Nexus
SQAT Project — Recruitment Feature Automation
