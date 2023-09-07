# Toy Robot Simulation - README

## Overview

This application simulates a toy robot navigating on a 5x5 square tabletop, following a set of commands. The robot can be placed on the table, moved, rotated, and can report its current position. The goal is to implement this simulation with clean, maintainable code.

## Getting Started

To run this application, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the required dependencies.

3. **Run the Application**: Start the application by running `npm run dev`.

4. **Open in Browswer**: Navigate your browser to http://localhost:1234

5. **Testing**: Test the application by running `npm run test`

## Usage

### Command Format

Commands can be entered in the following format:

- `PLACE X,Y,DIRECTION` (e.g., `PLACE 1,2,NORTH`)
- `MOVE`
- `LEFT`
- `RIGHT`
- `REPORT`

### Example Usage

```bash
PLACE 0,0,NORTH
MOVE
REPORT
```

Expected output: `0,1,NORTH`

```bash
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```

Expected output: `3,3,NORTH`

## Devlog

1. Started with installing parcel for easy typescript compilation and better developer experience (hot reloading, native TS support). Just so I can work a little easier with typescript out of the gates and have a dedicated dev server for easier browser testing.
2. Decided to scaffold and test the main script which will eventually control a robot class.
3. Added primitive input validation to the command input using a HTML5 form and some pattern matching.
4. Added jest support and wrote some initial tests for our primary script, if this is solid the robot class itself should be trivial.
5. Introduced the core robot class which is controlled by our main script, adhering to a good separation of concerns pattern. Also wrote unit tests for the robot class. Now that our core scripts are written, I'll wire up the separate components and test the results.
6. Ran into a strange issue with Parcel complaining 🚨 Build failed. Error: Expected content key de1e4a02ec63c4eb to exist. A quick google suggested to clear the .parcel-cache and rebuild which worked perfectly
7. refactored for better separation of concerns and testability of the main script
8. Taking a quick break :D
9. Added additional inputs to move the robot left, right, and forward
10. That's time, thank you for the challenge! I had fun
