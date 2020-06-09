$(document).ready(function(){

  var imgArray = [];
  var img1 = new Image();
  var img2 = new Image();
  var img3 = new Image();
  var count = 0;
  var first = true;

  img1.src = "public/images/BackgroundImage.jpeg";
  img2.src = "public/images/BackgroundImage2.jpg";
  img3.src = "public/images/BackgroundImage3.jpg";

  imgArray.push(img1);
  imgArray.push(img2);
  imgArray.push(img3);


  $("#style").on("click", function(event){
      event.preventDefault();

      if(first){
        count = 0;
      } else{
        count++;
      }

      if(count == 3){
        count = 0;
      }
      $(".backgroundImage").attr("src", imgArray[count].src);
  });

  first = false;

  var fontSize = 14;
  $(".increase").on("click",function(event){
      fontSize += 2;
      $(".content").css("font-size", fontSize);
  });

  $(".decrease").on("click",function(event){
      fontSize -= 2;
      $(".content").css("font-size",fontSize);
  });

  $(".default").on("click",function(event){
      $(".content").css("font-size","14px");
  });


  // $(document).on("keydown", function(event){
  //     if(event.key === "i"){
  //         $('.content').css({'font-size':fontSize + 'px'});
  //     } else if(event.key === "d"){
  //         $('.content').css({'font-size':fontSize + 'px'});
  //     } else if(event.key === "n"){
  //         $('.content').css({'font-size':fontSize + 'px'});
  //     }
  //
  //
  // });



  // $("#font").on("click", function(event){
  //     event.preventDefault();
  //
  // });


});
