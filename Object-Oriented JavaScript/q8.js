class Iphone4 {
    constructor(ASIN, display, storageGB, operatingSystem, color, lens, camera, bluetooth, storageMB) {
      this.ASIN = ASIN;
      this.display = display;
      this.storage = `${storageGB}GB/${storageMB}MB`;
      this.operatingSystem = operatingSystem;
      this.color = color;
      this.lens = lens;
      this.camera = camera;
      this.bluetooth = bluetooth;
  
      this.dial = () => {
        return "tring.. tring...";
      };
  
      this.sendMessage = () => {
        return "Sending message...";
      };
  
      this.cameraClick = () => {
        return "Camera clicked";
      };
  
      this.connectBluetooth = () => {
        return "Bluetooth connected successfully...";
      };
    }
  }
  
  let i4 = new Iphone4("B09X67JBQV", 7.8, 1, "IOS", "Gray", "90mm", "2.0 MP", "5.1", "128mb");
  
  console.log(i4.ASIN); 
  console.log(i4.color); 
  console.log(i4.display); 
  console.log(i4.operatingSystem); 
  console.log(i4.bluetooth); 

  console.log(i4.dial()); 
  console.log(i4.sendMessage());
  console.log(i4.cameraClick()); 
  console.log(i4.connectBluetooth()); 
  