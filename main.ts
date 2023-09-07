import Robot from "./robot";
import robotController from "./robot-controller";

const robot = new Robot();

export function setupFormEventListener(): void {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
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
          robotController(command, robot);
          updateTable();
        } else {
          // Invalid command
          alert("Invalid command: " + command);
        }
      });
    }
  });
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

setupFormEventListener();
