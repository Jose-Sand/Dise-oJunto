const fetch = require("node-fetch");
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
s.on('message', function(msg, rinfo) {
    raw_data = msg.toString();
    if(raw_data.startsWith(">REV")){
        //Create today date based on time delta
        weeks = parseInt(raw_data.slice(6,10))
        time = parseInt(raw_data.slice(11,16))

        const today = new Date(1980, 0, 8)
        const year = today.getFullYear()
        const month = today.getMonth()
        const day = today.getDate()
        const seconds = today.getDate()
        // Creating a new Date (with the delta)
        const finalDate = new Date(year, month, day + 7*weeks, 0, 0, seconds + time + 14*60*60)
        console.log(finalDate.toISOString())
        data = [
            {
                "latitude": parseFloat(raw_data.slice(16,24))/100000,
                "longitude": parseFloat(raw_data.slice(24,33))/100000,
                "date": finalDate.toISOString().slice(0,10),
                "hour": finalDate.toISOString().slice(11,19)
            }
        ]
        fetch("http://localhost:8080/data", {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
        console.log(data);
        console.log("I got this message :" + msg.toString());
    }
    
});
s.bind({
    port: 61000,
    exclusive: true
});