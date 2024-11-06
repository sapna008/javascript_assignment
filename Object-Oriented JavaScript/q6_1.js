function iPhone1(ASIN, color, display, camera, storage, model, lens, megapixels) {
    return {
      ASIN,
      color,
      display,
      camera,
      storage,
      model,
      lens,
      megapixels,
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      }
    };
  }
  
  let i1 = iPhone1(1, "Gray", 7.8, "2.0 MP", "128mb", "IOS", "90mm", "B09X67JBQV");
 
  console.log(i1.ASIN); 
  console.log(i1.color); 
  console.log(i1.display); 
  console.log(i1.camera); 
  
  console.log(i1.dial()); 
  console.log(i1.sendMessage()); 
  console.log(i1.cameraClick());
  