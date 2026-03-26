# 📦 Package Sorting System

## Overview
This project implements a package classification system used in an automated warehouse.

## Rules

### Bulky Package
- Volume ≥ 1,000,000 cm³ OR
- Any dimension ≥ 150 cm

### Heavy Package
- Mass ≥ 20 kg

## Classification

| Condition              | Result     |
|----------------------|------------|
| Not bulky & not heavy| STANDARD   |
| Either bulky or heavy| SPECIAL    |
| Both bulky & heavy   | REJECTED   |

---

## 🛠 Tech Stack
- TypeScript
- Jest (unit testing)

---

## ▶️ Run Locally

npm install
npm start

## 🧪 Run Tests

npm test

---

## ✅ Features
- Strong typing with TypeScript
- Input validation
- Edge case handling
- Unit test coverage
- Clean and maintainable structure
