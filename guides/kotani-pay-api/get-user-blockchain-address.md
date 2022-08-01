# Get User Blockchain Address



```
curl --location --request POST '[base_url]/user/account/details' 
--header 'Authorization: Bearer {{accessToken}}' 
--header 'Content-Type: application/json' 
--data-raw '{
    "phoneNumber" : {{phoneNumber}}
}'
```

### **Response**

#### success

```
   {status: 201, address : `${publicAddress}`} 
```

#### fail

```
  { status: 401, desc: `user does not exist` }
  { status: 400, desc: `invalid request` }
  { status: 400, phoneNumber: `${userMSISDN}`, desc: `invalid ${targetCountry} phoneNumber` }
```
