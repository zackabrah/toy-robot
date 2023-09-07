import { executeCommand } from "../main";

describe("executeCommand", () => {
  it("should execute PLACE command correctly", () => {
    const result = executeCommand("PLACE 1,2,NORTH");
    expect(result).toBe("placed robot at 1, 2, facing NORTH");
  });

  it("should execute MOVE command correctly", () => {
    const result = executeCommand("MOVE");
    expect(result).toBe("moved robot");
  });

  it("should execute LEFT command correctly", () => {
    const result = executeCommand("LEFT");
    expect(result).toBe("turned robot left");
  });

  it("should execute RIGHT command correctly", () => {
    const result = executeCommand("RIGHT");
    expect(result).toBe("turned robot right");
  });

  it("should execute REPORT command correctly", () => {
    const result = executeCommand("REPORT");
    expect(result).toBe("robot's current status: x, y, direction");
  });

  it("should handle invalid commands", () => {
    const result = executeCommand("INVALID");
    expect(result).toBe("invalid command");
  });
});
