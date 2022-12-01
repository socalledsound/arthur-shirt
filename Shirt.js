class Shirt{
  constructor(img, mod, x, y, z, theta){
    this.img = img
    this.mod = mod
    this.pos = createVector(x,y,z)
    this.startDrag = null
    this.theta = theta
    this.rotationVal = 180
    this.dragging = false
    this.rotateShirt = false
    this.autoRotateValue = 0
  }

  changeShirt(img){
    this.img = img
  }

  drag(mX, mY){
    this.startDrag = createVector(mX, mY, 0)
    this.lastMousePos = this.startDrag
    this.dragging = true

  }

  render(){
    noStroke()
    push()
      translate(this.pos.x, this.pos.y, this.pos.z)
      scale(50.0)
      translate(3, 8, 3)
      rotateX(180)
      rotateY(this.rotationVal + this.autoRotateValue)
      // rotateZ(this.theta/4)

      scale(-1, 1)
      texture(this.img)

      model(this.mod)
    pop()
  }

  getDelta(currentMousePos){
   //console.log(currentMousePos, this.lastMousePos)

     return currentMousePos.dist(this.lastMousePos)
   }

   toggleRotate(){
    this.rotateShirt = !this.rotateShirt
    
   }


  update(mX, mY, theta){
    if(this.dragging){
    console.log('being dragged')      
      // this.startDrag was set when mouse was clicked
      // we need to know if mouse is still moving
     
      const currentMousePos = createVector(mX, mY, 0)
      
      const delta = this.getDelta(currentMousePos)
      console.log(delta)
      //console.log(currentMousePos)
      if(delta > 0 || delta < 0){
        let d = currentMousePos.dist(this.startDrag)
        if(d > 10){
          d = 10
        }
        if(d < -10){
          d = -10
        }
        // this.rotationVal -= d

        if(currentMousePos.y > this.startDrag.y){
          this.rotationVal -= d
        }else{
          this.rotationVal += d
        }
      }

      this.lastMousePos = currentMousePos
    } else {
      
      if(this.rotateShirt){
        console.log(theta)
        console.log('should rotate')
        
          this.autoRotateValue += theta
       
        
      }
    }

    
  }
}
