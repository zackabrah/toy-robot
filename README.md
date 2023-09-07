# Toy Robot Simulation - README

Hello,

This README provides an overview of my solution for the Toy Robot Simulation coding challenge. I'll walk you through the project's structure, how to use it, and some of the development choices I made.

## Getting Started

To run this application, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the required dependencies.

3. **Run the Application**: Start the application by running `npx parcel index.html`.

4. **Open in Browswer**: Navigate your browser to http://localhost:1234

## Devlog

1. Started with installing parcel for easy typescript compilation and better developer experience (hot reloading, native TS support). Just so I can work a little easier with typescript out of the gates and have a dedicated dev server for easier browser testing.
2. Decided to scaffold and test the main script which will eventually control a robot class.
3. Added primitive input validation to the command input using a HTML5 form and some pattern matching.
4. Added jest support and wrote some initial tests for our primary script, if this is solid the robot class itself should be trivial
