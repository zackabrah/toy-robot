import Robot from "../robot";

describe("Robot", () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot(0, 0, "NORTH", 5, 5);
  });

  it("should place the robot correctly", () => {
    robot.place(1, 2, "NORTH");
    expect(robot.report()).toBe("1,2,NORTH");
  });

  it("should report the current direction correctly", () => {
    robot.place(1, 2, "NORTH");
    expect(robot.getDirection()).toBe("NORTH");
  });

  it("should move the robot north", () => {
    robot.place(1, 2, "NORTH");
    robot.move();
    expect(robot.report()).toBe("1,3,NORTH");
  });

  it("should move the robot south", () => {
    robot.place(1, 2, "SOUTH");
    robot.move();
    expect(robot.report()).toBe("1,1,SOUTH");
  });

  it("should move the robot east", () => {
    robot.place(1, 2, "EAST");
    robot.move();
    expect(robot.report()).toBe("2,2,EAST");
  });

  it("should move the robot west", () => {
    robot.place(1, 2, "WEST");
    robot.move();
    expect(robot.report()).toBe("0,2,WEST");
  });

  it("should not fall off the tabletop when moving north", () => {
    robot.place(0, 4, "NORTH");
    robot.move(); // Robot should stay in the same position
    expect(robot.report()).toBe("0,4,NORTH");
  });

  it("should not fall off the tabletop when moving south", () => {
    robot.place(0, 0, "SOUTH");
    robot.move(); // Robot should stay in the same position
    expect(robot.report()).toBe("0,0,SOUTH");
  });

  it("should not fall off the tabletop when moving east", () => {
    robot.place(4, 0, "EAST");
    robot.move(); // Robot should stay in the same position
    expect(robot.report()).toBe("4,0,EAST");
  });

  it("should not fall off the tabletop when moving west", () => {
    robot.place(0, 0, "WEST");
    robot.move(); // Robot should stay in the same position
    expect(robot.report()).toBe("0,0,WEST");
  });

  it("should rotate the robot left", () => {
    robot.place(1, 2, "NORTH");
    robot.left();
    expect(robot.report()).toBe("1,2,WEST");
  });

  it("should rotate the robot right", () => {
    robot.place(1, 2, "NORTH");
    robot.right();
    expect(robot.report()).toBe("1,2,EAST");
  });
});
