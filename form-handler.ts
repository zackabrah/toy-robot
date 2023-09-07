import { executeCommand } from "./robot-controller";

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
          executeCommand(command);
        } else {
          // Invalid command
          alert("Invalid command: " + command);
        }
      });
    }
  });
}
