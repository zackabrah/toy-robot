import Robot from "../robot";
import robotController from "../robot-controller";

const robot = new Robot();

describe("executeCommand", () => {
  it("should execute PLACE command correctly", () => {
    const result = robotController("PLACE 1,2,NORTH", robot);
    expect(robot.report()).toBe("1,2,NORTH");
  });

  it("should execute MOVE command correctly", () => {
    const result = robotController("MOVE", robot);
    expect(robot.report()).toBe("1,3,NORTH");
  });

  // after the previous move the robot should be at 1,3,NORTH
  it("should execute REPORT command correctly", () => {
    const result = robotController("REPORT", robot);
    expect(robot.report()).toBe("1,3,NORTH");
  });

  it("should execute LEFT command correctly", () => {
    const result = robotController("LEFT", robot);
    expect(robot.getDirection()).toBe("WEST");
  });

  it("should execute RIGHT command correctly", () => {
    const result = robotController("RIGHT", robot);
    expect(robot.getDirection()).toBe("NORTH");
  });

  it("should handle invalid commands", () => {
    const result = robotController("INVALID", robot);
    expect(result).toBe("Invalid command");
  });
});
