const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let img, img2, mod, shirt
let wg, bg, fg, money,venmo
let imgs = [], imageCounter = 0
let theta = 0
let thetaInc = 0.01
let rotating = false
let clicked = false

function preload(){
    // audio = createAudio("Katy Perry - Firework (Acoustic Session) REMASTERED.mp3");
    audio = createAudio("Carly Rae Jepsen - Call Me Maybe (Audio) [TubeRipper.com].m4a");

imgs[0]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/SCREENPRINT_Shirt_resized_ujjqp1.png')
 imgs[1] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/voldemort_shirt_resized_ytqhl7.png') 
    imgs[2]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/OSKI_BIRTHDAY_SHIRT3d_resized_or4zka.png')
 imgs[3] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/DemnaShirt_resized_ko0nu6.png') 
  imgs[4]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773930/carolshirt3d_resized_xs8lip.png')
  imgs[5]= loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665773929/bottledloveshirt3d_flsb0r.png')
  imgs[6] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665884116/NOTEBOOKSHIRTTEXT_w3jjsn.jpg')
    imgs[7] = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1665884680/yourCardDeclined_ShirtMockup_vnw9pc.png')    
  imgs[8] = loadImage('  https://res.cloudinary.com/painkillerkid/image/upload/v1665888592/OSKIWEDDING_SHIRT_tz6okn.png')
    imgs[9] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665948981/oskiweddinground2_egydil.png')
      imgs[10] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665949784/toadpacshirt_3dthing_j0satg.png')

        imgs[11] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665957356/housedrawing_3dShirt_nf3yob.png')
  
        imgs[12] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665957205/mountainshirt_3d_kmlazm.png')
            
  imgs[13] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665978926/oski_peeing_shirt_xtvoe3.png')
    
  imgs[14] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1666047243/thisisstupidshirt_wltht1.png')  
  
//   imgs[15] = loadImage(' https://res.cloudinary.com/painkillerkid/image/upload/v1665960566/MXMTOON_Shirt_iqmgow.png')
        
  imgs[15] = loadImage(' https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/kevin-hart-wins-halloween-2019-by-dressing-up-as-frenemy-dwayne-johnson-the-rock-is-anything-but-impressed.jpg')
  
  
  mod = loadModel('Finished_Voldemort_3dthing.obj')
}


function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  angleMode(DEGREES)
  shirt = new Shirt(imgs[0], mod, -100, -100, 0, theta)
    wg = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669760216/wordstuff2_iqvi3a.png');
  
  fg = loadImage ('https://archive.org/download/spongedance-hd/spongedance-4.gif')
  
  bg = loadImage ('https://media.tenor.com/2roX3uxz_68AAAAM/cat-space.gif')
 
    money = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669858524/sendmemoney_schfml.png')
  
      venmo = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1669857644/MYVENMO_bkfuco.jpg')
}

function draw() {
  background('rgb(211,246,0)'); 
  
    push();
  noStroke();
translate(30, 20, -3000);
  texture(bg);
  plane(20000, 20000);
  pop();  
  
  push();
  noStroke()
  button = createButton('');
  if(rotating){
    button.addClass('unrotate-button')
    button.html('stop rotation')
  }else{
    button.addClass('rotate-button');
    button.html('rotate shirt')    
  }
 
  button.position(1300, 650);
  button.mousePressed(setRotate);
  pop();
  
    push();
  noStroke();
translate(1300, -150, -1000);
  texture(money);
  plane(500, 500);
  pop(); 
  
      push();
  noStroke();
translate(1300, -650, -1000);
  texture(venmo);
  plane(500, 500);
  pop(); 
  
  push();
  noStroke();
translate(-1130, -200, -1000);
  texture(fg);
  plane(1000, 1000);
  pop(); 
  
    push();
  noStroke();
translate(-1130, -200, -1000);
  texture(wg);
  plane(1000, 1000);
  pop(); 
  //audio.autoplay(true);
  //audio.loop(true);
  //console.log(theta)
  shirt.update(mouseX, mouseY, theta)
  
 
  shirt.render()
  if(theta > 2 || theta < -2){
    thetaInc*=-1
  }
  theta+=thetaInc

}

function setRotate(){
  rotating = !rotating
  shirt.toggleRotate()
}

function changeBG() {
  let val = random(255);
  background(val);
}
function mousePressed(){

   shirt.drag(mouseX, mouseY)
   clicked = true

}

function mouseReleased(){

   shirt.dragging = false
   clicked = false

}




  // old

// function mousePressed(){ 
  // if mouse is in right box
    // then: do the image increment thing
  //else if mouse is in left box
    // do the image decrement thing
  // else

  // imageCounter = floor(random(imgs.length))

//     shirt.changeShirt(imgs[imageCounter])

//}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(imageCounter < imgs.length -1){
      imageCounter++
    }else{
      imageCounter = 0
    }
  }
    if(keyCode === LEFT_ARROW){
      if(imageCounter > 0){
         imageCounter--
      } else {
        imageCounter = imgs.length - 1
      }

  }
 // console.log(imageCounter)
  shirt.changeShirt(imgs[imageCounter])
}
