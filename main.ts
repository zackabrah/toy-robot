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
        result = `placed robot at ${x}, ${y}, facing ${direction}`;
      }
      break;
    case "MOVE":
      result = "moved robot";
      break;
    case "LEFT":
      result = "turned robot left";
      break;
    case "RIGHT":
      result = "turned robot right";
      break;
    case "REPORT":
      result = "robot's current status: x, y, direction";
      break;
    default:
      result = "invalid command";
  }

  return result; // Default return empty string for non-report commands
}
