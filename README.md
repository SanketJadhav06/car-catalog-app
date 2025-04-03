🚀 Car Catalog Project – Solution Document
1️⃣ Project Overview
The Car Catalog project is built using Angular (Frontend) and Express.js with Node.js (Backend).

It allows users to browse and select car brands dynamically with a real-time search feature.

Selecting a brand updates the displayed cars, and if a new brand is searched, the selection resets to maintain consistency.

The UI is designed using PrimeNG for a modern and interactive experience.

The backend exposes RESTful APIs that provide car data to the frontend efficiently.

2️⃣ Project Setup & Installation

🔹 Frontend (Angular) Setup:

npm install       # Install dependencies
ng serve          # Start the Angular development server
✅ Runs at: http://localhost:4200/

🔹 Backend (Express.js) Setup:

npm install       # Install dependencies
node src/app.js         # Start the Express server 
✅ Runs at: http://localhost:5000/

3️⃣ Features Implemented
✅ Brand Selection & Filtering:

Users can select a brand, and only relevant cars are displayed.

Searching updates the brand list dynamically without reloading the page.

✅ Real-time Search with No Results Handling:

A search bar with an icon filters car brands as the user types.

If no matching brands are found, a "No Results Found" message is displayed.

✅ Dynamic Car List Updates:

If a user selects a brand and then searches for another, the selected brand resets to avoid confusion.

✅ Changing Product Colors Dynamically:

The color of the displayed car products can be changed dynamically based on selection or styling updates.

✅ Used Containers Instead of Images:

To save development time, normal containers were used instead of images for car brands and listings.

Images can be added later when required.

✅ Reusable Components & Modularization:

Created a dedicated component: app-car-list to manage car display.

Lazy loading is implemented to enhance performance.

✅ Backend API Integration:

The backend provides REST APIs to fetch car data dynamically.

Angular’s CarService handles API communication.

4️⃣ Angular Commands Used

ng g c component-name
ng g s service-name
ng g m module-name
ng generate directive directive-name

5️⃣ Future Enhancements
🚀 Favorites Feature: Allow users to save their preferred brands.
🚀 Pagination / Virtual Scrolling: Optimize for large data sets.
🚀 Improved UI/UX: Add animations and enhance design.
🚀 Deployment:

Frontend: Deploy using Firebase.

Backend: Deploy using Heroku/Vercel.


📌 Summary
The Car Catalog project follows a well-structured approach, using Angular for the frontend and Express.js for the backend to create a real-time searchable car brand catalog. Users can filter and select brands dynamically while ensuring smooth updates. Product colors can be modified using CSS and Angular bindings, and containers were used instead of images to speed up development. The project adheres to best practices with modularization, API integration, and UI optimizations. Future improvements include pagination, better UI, and cloud deployment. 🚀
