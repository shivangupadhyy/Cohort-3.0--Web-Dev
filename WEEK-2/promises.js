class Rectangle{
    constructor(widht, height, color){
        this.width = widht;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area
        }

        paint(){
            console.log(`painting with color ${this.color}`)
        }
}

const react = new Rectangle(2,4, "red")
const area = react.area();
react.paint();
console.log(area)