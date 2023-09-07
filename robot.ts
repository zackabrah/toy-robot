class Robot {
  private x: number;
  private y: number;
  private direction: string;

  constructor() {
    this.x = -1; // Initialize with an invalid position
    this.y = -1;
    this.direction = "";
  }

  // Utility function to check if the placement is within bounds
  private isPlacementValid(x: number, y: number): boolean {
    return x >= 0 && x <= 4 && y >= 0 && y <= 4;
  }

  place(x: number, y: number, direction: string): void {
    // Check if the placement is within the tabletop bounds
    if (this.isPlacementValid(x, y)) {
      this.x = x;
      this.y = y;
      this.direction = direction;
    }
  }

  move(): void {
    // Implement the logic for moving the robot
    if (
      this.direction === "NORTH" &&
      this.isPlacementValid(this.x, this.y + 1)
    ) {
      this.y += 1;
    } else if (
      this.direction === "SOUTH" &&
      this.isPlacementValid(this.x, this.y - 1)
    ) {
      this.y -= 1;
    } else if (
      this.direction === "EAST" &&
      this.isPlacementValid(this.x + 1, this.y)
    ) {
      this.x += 1;
    } else if (
      this.direction === "WEST" &&
      this.isPlacementValid(this.x - 1, this.y)
    ) {
      this.x -= 1;
    }
  }

  left(): void {
    // Implement the logic for rotating the robot left
    switch (this.direction) {
      case "NORTH":
        this.direction = "WEST";
        break;
      case "SOUTH":
        this.direction = "EAST";
        break;
      case "EAST":
        this.direction = "NORTH";
        break;
      case "WEST":
        this.direction = "SOUTH";
        break;
    }
  }

  right(): void {
    // Implement the logic for rotating the robot right
    switch (this.direction) {
      case "NORTH":
        this.direction = "EAST";
        break;
      case "SOUTH":
        this.direction = "WEST";
        break;
      case "EAST":
        this.direction = "SOUTH";
        break;
      case "WEST":
        this.direction = "NORTH";
        break;
    }
  }

  report(): string {
    // Implement the logic for reporting the robot's position
    if (this.x == -1 && this.y == -1) return ""; // return empty string for "unplaced" robot
    return `${this.x},${this.y},${this.direction}`;
  }
}

export default Robot;
