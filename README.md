# s3 test project

- create a database "s3" to postgres or pgadmin.

- clone the project. 

- npm install --force

- npm run start

api list 

http://localhost:3000/device
method: get, post
post body 
    {
    "deviceId": "ibm-878A66",
    "deviceType": "computer1.0.0",
    "deviceName": "VN1-1-3",
    "groupId": "847b3b2f1b05dc4",
    "dataType": "DATA",
    "data": {
        "fullPowerMode": false,
        "activePowerControl": false,
        "firmwareVersion": 1,
        "temperature": 21,
        "humidity": 53
      },
      "timestamp": 1629369697
    }
