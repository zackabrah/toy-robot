function executeCommand(command: string): string {
  const parts = command.trim().split(" ");
  const commandType = parts[0].toUpperCase();

  switch (commandType) {
    case "PLACE":
      const placeArgs = parts[1].split(",");
      if (placeArgs.length === 3) {
        const x = parseInt(placeArgs[0]);
        const y = parseInt(placeArgs[1]);
        const direction = placeArgs[2];
        console.log(`place robot at ${x}, ${y}, ${direction}`);
      }
      break;
    case "MOVE":
      console.log("move robot");
      break;
    case "LEFT":
      console.log("left");
      break;
    case "RIGHT":
      console.log("right");
      break;
    case "REPORT":
      console.log("report");
  }

  return ""; // Default return empty string for non-report commands
}
