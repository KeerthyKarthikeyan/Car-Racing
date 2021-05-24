canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=120;
rover_height=90;
background_image="racing.jpg";
rover_image="car1.png";

rover1_width=120;
rover1_height=90;
rover1_image="car2.png";


rover_x=10;
rover_y=35;

rover1_x=10;
rover1_y=130;

function add() {
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;

    rover1_imgtag=new Image();
    rover1_imgtag.onload=uploadcar;
    rover1_imgtag.src=rover1_image;
}

function uploadbackground() {
  ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    
  }

  function uploadcar() {
    ctx.drawImage(rover1_imgtag,rover1_x,rover1_y,rover1_width,rover1_height);
    
  }

  window.addEventListener("keydown",my_keydown);
  function my_keydown(e){
   keypress=e.keyCode;
   console.log(keypress);
   if(keypress=="38"){
       up();
       console.log("up");
   }
   if(keypress=="39"){
    right();
    console.log("right");
}
if(keypress=="37"){
    left();
    console.log("left");
}
if(keypress=="40"){
    down();
    console.log("down");
}
if(keypress=="87"){
    up1();
    console.log("up");
}
if(keypress=="68"){
 right1();
 console.log("right");
}
if(keypress=="65"){
 left1();
 console.log("left");
}
if(keypress=="83"){
 down1();
 console.log("down");
}
}
  
 
   

  function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x= "+ rover_x+" | y= " +rover_y);
        uploadbackground();
        uploadrover();
        uploadcar();
    }
    }
 

   function down(){
     if(rover_y<=400){
         rover_y=rover_y+10;
         console.log("when down arrow is pressed x= "+ rover_x+" | y= " +rover_y);
         uploadbackground();
         uploadrover();
         uploadcar();
     }
  
    }
    function left(){
     if(rover_x>=0){
         rover_x=rover_x-10;
         console.log("when left arrow is pressed x= "+ rover_x+" | y= " +rover_y);
         uploadbackground();
         uploadrover();
         uploadcar();
     }
  
    }
 
    function right(){
     if(rover_x<=660){
         rover_x=rover_x+10;
         console.log("when right arrow is pressed x= "+ rover_x+" | y= " +rover_y);
         uploadbackground();
         uploadrover();
         uploadcar();
     }
  
    }
    function up1(){
        if(rover1_y>=0){
            rover1_y=rover1_y-10;
            console.log("when up arrow is pressed x= "+ rover1_x+" | y= " +rover1_y);
            uploadbackground();
            uploadcar();
            uploadrover();
        }
     
       }
       function down1(){
         if(rover1_y<=400){
             rover1_y=rover1_y+10;
             console.log("when down arrow is pressed x= "+ rover1_x+" | y= " +rover1_y);
             uploadbackground();
             uploadcar();
             uploadrover();
         }
      
        }
        function left1(){
         if(rover1_x>=0){
             rover1_x=rover1_x-10;
             console.log("when left arrow is pressed x= "+ rover1_x+" | y= " +rover1_y);
             uploadbackground();
             uploadcar();
             uploadrover();
         }
      
        }
     
        function right1(){
         if(rover1_x<=660){
             rover1_x=rover1_x+10;
             console.log("when right arrow is pressed x= "+ rover1_x+" | y= " +rover1_y);
             uploadbackground();
             uploadcar();
             uploadrover();
         }
      
        }