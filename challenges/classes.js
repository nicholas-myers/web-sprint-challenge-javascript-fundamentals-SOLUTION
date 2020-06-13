// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker {
    constructor(attrs) {
        this.length = attrs.length,
        this.width = attrs.width,
        this.height = attrs.height 
    }// close intiializers
    
    volume(length, width, height) {
        return this.length * this.width * this.height;
    }
    //closes volume
    surfaceArea(length, width, height) {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    } //closes surfaceArea
} 

  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })
  
 
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attrs) {
        super(attrs);
        this.side = attrs.side;
    } //closes initializers

    volume(side){
        return Math.pow(this.side, 3);
    };//closes volume

    surfaceArea(side){
        return 6 * Math.pow(this.side, 2);
    };//closes surfaceArea
}//closes cubemaker


const cube = new CubeMaker({
    side: 5
});

console.log(cube.volume());
console.log(cube.surfaceArea());