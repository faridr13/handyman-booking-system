# handyman-booking-system
# Local Handyman Booking System (v1.0)

A data-driven web application designed for independent contractors to manage their service availability and allow clients to book time slots without scheduling conflicts. This project serves as a practical milestone for mastering full-stack web development.

---

## 🚀 Tech Stack Roadmap
* **Phase 1 (Current):** HTML5, CSS3, Bootstrap 5 (UI Framework), Vanilla JavaScript (Core Logic)
* **Phase 2 (Future):** PHP (Server Architecture), MySQL (Relational Database)

---

## 📋 Feature Checklist & Progress Tracker

### Phase 1: Frontend & Browser Logic (Current Focus)
- [ ] **Task 1: Environment & UI Shell**
  - [X] Set up project directory with 'index.html', 'app.js' and 'booking.html'.
  - [X] Link Bootstrap 5 via CDN.
  - [X] Verify JavaScript connection via browser console.
- [ ] **Task 2: Dynamic Service Catalog**
  - [ ] Define a structured Array of Objects in `app.js` to store service data (ID, name, price, description).
  - [ ] Use DOM manipulation to loop through the array and dynamically render Bootstrap cards.
- [ ] **Task 3: Booking Form & State Management**
  - [ ] Create a modal or separate section with a booking form (Service selection, Date picker, Time slots).
  - [ ] Capture form inputs using JavaScript event listeners.
- [ ] **Task 4: Double-Booking Prevention Algorithm**
  - [ ] Write logic to store confirmed bookings in a global array.
  - [ ] Implement validation: If a user selects a date and time slot that already exists in the bookings array, block the submission and display an error message.
- [ ] **Task 5: Persistent Storage**
  - [ ] Integrate `localStorage` to save the bookings array so data survives page refreshes.
  - [ ] Write a function to load existing bookings from `localStorage` on page load.

### Phase 2: Database & Backend Migration (Upcoming)
- [ ] Create a local MySQL database via phpMyAdmin.
- [ ] Migrate the JavaScript mock data array into a relational `services` and `bookings` table structure.
- [ ] Replace frontend storage logic with PHP backend routing and PDO database queries.

---

## 🛠️ How to Update Progress
To update this log as you build:
1. Open this file in your editor.
2. Change a blank task `- [ ]` to a completed task `- [x]`.
3. Commit the change to Git with a message describing what you just completed.
