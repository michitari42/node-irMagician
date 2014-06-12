/**
 * Created by roro0000 on 2014/06/13.
 */
var SerialPort = require('serialport').SerialPort;

var irMagician = new SerialPort("/dev/ttyACM0", {
    baudrate: 9600
});

irMagician.on("open", function () {
    console.log('open');
    irMagician.on('data', function(data) {
        console.log('data received: ' + data);
    });
    irMagician.write("c\n", function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
    });
});