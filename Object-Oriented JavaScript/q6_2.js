function iPhone2(ASIN, display, operatingSystem, storageGB, storageMB, color, camera, bluetooth) {
    return {
      ASIN,
      color,
      display,
      operatingSystem,
      storage: `${storageGB}GB/${storageMB}MB`,
      camera,
      bluetooth,
      dial: function() {
        return "tring.. tring...";
      },
      sendMessage: function() {
        return "Sending message...";
      },
      cameraClick: function() {
        return "Camera clicked";
      },
      connectBluetooth: function() {
        return "Bluetooth connected successfully...";
      }
    };
  }
  
  let i2 = iPhone2("B09X673BQV", 7.8, "IOS", 1, "128mb", "Gray", "2.0 MP", "5.1");

  console.log(i2.ASIN);
  console.log(i2.color); 
  console.log(i2.display); 
  console.log(i2.operatingSystem); 
  console.log(i2.bluetooth); 
  
  console.log(i2.dial()); 
  console.log(i2.sendMessage()); 
  console.log(i2.cameraClick()); 
  console.log(i2.connectBluetooth()); 
  