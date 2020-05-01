class Drop{
    constructor(){
        this.x = Math.round(random(50,750));
        this.y = Math.round(random(-200,0));
        this.ySpeed = 20;
    }
    fall(){
        this.y = this.y + this.ySpeed;
        this.display();
        if(this.y>height){
            this.y= Math.round(random(-200,0)); 
        }
    }
    display(){
        fill(200)
        var rand = Math.round(random(0,letters.length))
        text (letters[rand],this.x,this.y);
    }
} 