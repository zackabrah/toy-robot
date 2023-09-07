import { executeCommand, robot } from "../robot-controller";

describe("executeCommand", () => {
  it("should execute PLACE command correctly", () => {
    const result = executeCommand("PLACE 1,2,NORTH");
    expect(robot.report()).toBe("1,2,NORTH");
  });

  it("should execute MOVE command correctly", () => {
    const result = executeCommand("MOVE");
    expect(robot.report()).toBe("1,3,NORTH");
  });

  // after the previous move the robot should be at 1,3,NORTH
  it("should execute REPORT command correctly", () => {
    const result = executeCommand("REPORT");
    expect(robot.report()).toBe("1,3,NORTH");
  });

  it("should execute LEFT command correctly", () => {
    const result = executeCommand("LEFT");
    expect(robot.isFacing()).toBe("WEST");
  });

  it("should execute RIGHT command correctly", () => {
    const result = executeCommand("RIGHT");
    expect(robot.isFacing()).toBe("NORTH");
  });

  it("should handle invalid commands", () => {
    const result = executeCommand("INVALID");
    expect(result).toBe("Invalid command");
  });
});
