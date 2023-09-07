import Robot from "./robot";

export const robot = new Robot();

export function executeCommand(command: string): string {
  let result = "";
  const parts = command.trim().split(" ");
  const commandType = parts[0].toUpperCase();

  switch (commandType) {
    case "PLACE":
      const placeArgs = parts[1].split(",");
      if (placeArgs.length === 3) {
        const x = parseInt(placeArgs[0]);
        const y = parseInt(placeArgs[1]);
        const direction = placeArgs[2];
        robot.place(x, y, direction);
        console.info(`Placed robot at ${x}, ${y}, facing ${direction}`);
      }
      break;
    case "MOVE":
      robot.move();
      console.info(`Robot moved to ${robot.report()}`);
      break;
    case "LEFT":
      robot.left();
      console.info(`Robot turned left, now facing: ${robot.isFacing()}`);
      break;
    case "RIGHT":
      robot.right();
      console.info(`Robot turned right, now facing: ${robot.isFacing()}`);
      break;
    case "REPORT":
      result = `Robot's current status: ${robot.report()}`;
      console.info(`Robot's current status: ${robot.report()}`);
      break;
    default:
      result = "Invalid command";
  }

  return result; // Default return empty string for non-report commands
}
