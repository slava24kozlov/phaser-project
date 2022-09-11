class Parent {
  protected readonly width: number;
  protected readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getName(): { x: number, y: number } {
    console.log("Parent");
    return {
      x: 1 + this.width,
      y: 2 + this.height
    };
  }
}

export default Parent;