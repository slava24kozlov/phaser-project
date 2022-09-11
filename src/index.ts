import "./index.scss";
import Parent from "./Parent";

const root = document.getElementById("root");
const head = document.createElement("h1");
const div = document.createElement("div");
head.innerText = "Phaser Project";
root.appendChild(head);
root.appendChild(div);

class Children extends Parent {
  private obj: { x: number, y: number };

  constructor(a: number, b: number) {
    super(a, b);
  }

  public getName(): { x: number, y: number } {
    console.log("Children");
    this.obj = super.getName();
    return {
      x: this.width + 100 + this.obj.x,
      y: this.height + 100 + this.obj.y
    };
  }
}

const instance = new Children(1, 2);

div.textContent = `X: ${instance.getName().x} || Y: ${instance.getName().y}`
