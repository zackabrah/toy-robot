import Robot from "./robot";
import robotController from "./robot-controller";

const boardSize = 5;

const robot = new Robot(0, 0, "NORTH", boardSize, boardSize);

const canvas = document.getElementById("game-board") as HTMLCanvasElement;
const context = canvas.getContext("2d");
const cellSize = canvas.width / boardSize;

context!.translate(0, canvas.height);
context!.scale(1, -1);

export function setupFormEventListener(): void {
  document.addEventListener("DOMContentLoaded", () => {
    // createTable(robot.)
    const boardSize = robot.getBoardSize();

    const form = document.querySelector("form");
    const turnLeft = document.querySelector("#turn-left");
    const turnRight = document.querySelector("#turn-right");
    const moveForward = document.querySelector("#move-forward");

    if (turnLeft) {
      turnLeft.addEventListener("click", () => {
        console.info("Turning left");
        executeCommand("LEFT");
      });
    }

    if (turnRight) {
      turnRight.addEventListener("click", () => {
        console.info("Turning right");
        executeCommand("RIGHT");
      });
    }

    if (moveForward) {
      moveForward.addEventListener("click", () => {
        console.info("Moving forward");
        executeCommand("MOVE");
      });
    }

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const commandInput = document.getElementById(
          "command-input"
        ) as HTMLInputElement;
        const command = commandInput.value.trim();

        if (
          command.match(
            /^(PLACE [0-4],[0-4],(NORTH|SOUTH|EAST|WEST)|MOVE|LEFT|RIGHT|REPORT)$/
          )
        ) {
          // Valid command; you can execute it here
          executeCommand(command);
        } else {
          // Invalid command
          alert("Invalid command: " + command);
        }
      });
    }
  });
}

function executeCommand(command: string) {
  robotController(command, robot);
  updateTable();
  updateRobotPosition();
}

// Function to update the table with the robot's position
function updateTable() {
  const xPosition = document.getElementById("x-position");
  const yPosition = document.getElementById("y-position");
  const directionElement = document.getElementById("direction");
  const robotPos = robot.getPosition();

  if (xPosition && yPosition && directionElement) {
    xPosition.textContent = robotPos.x.toString();
    yPosition.textContent = robotPos.y.toString();
    directionElement.textContent = robotPos.direction;
  }
}

function drawGameBoard() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      // chessboard style checkers
      if (row % 2 === 0) {
        if (col % 2 === 0) {
          context!.fillStyle = "black";
        } else {
          context!.fillStyle = "grey";
        }
      } else {
        if (col % 2 === 0) {
          context!.fillStyle = "grey";
        } else {
          context!.fillStyle = "black";
        }
      }
      context!.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
    }
  }
}

function drawRobot(x: number, y: number) {
  const robotSize = cellSize * 0.5;
  const robotX = x * cellSize + (cellSize - robotSize) / 2;
  const robotY = y * cellSize + (cellSize - robotSize) / 2;

  context!.fillStyle = "red";
  context!.fillRect(robotX, robotY, robotSize, robotSize);

  context!.fillStyle = "white";

  const direction = robot.getDirection();

  if (direction === "SOUTH") {
    context!.fillRect(robotX, robotY, robotSize, robotSize / 3);
  } else if (direction === "NORTH") {
    context!.fillRect(
      robotX,
      robotY + robotSize - robotSize / 4,
      robotSize,
      robotSize / 4
    );
  } else if (direction === "EAST") {
    context!.fillRect(
      robotX + robotSize - robotSize / 4,
      robotY,
      robotSize / 4,
      robotSize
    );
  } else if (direction === "WEST") {
    context!.fillRect(robotX, robotY, robotSize / 3, robotSize);
  }
}

// Call this function to update the robot's position on the canvas
function updateRobotPosition() {
  context!.clearRect(0, 0, canvas.width, canvas.height);
  drawGameBoard();
  drawRobot(robot.getPosition().x, robot.getPosition().y);
}

setupFormEventListener();
updateRobotPosition();
