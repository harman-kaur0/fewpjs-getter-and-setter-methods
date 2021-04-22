// Add your Circle class here
"";
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return 2 * this.radius * Math.PI;
  }
  get area() {
    return this.radius ** 2 * Math.PI;
  }

  set diameter(newDiam) {
    this.radius = newDiam / 2;
  }
  set circumference(newCir) {
    this.radius = newCir / (Math.PI * 2);
  }

  set area(newA) {
    this.radius = Math.sqrt(newA / Math.PI);
  }
}
