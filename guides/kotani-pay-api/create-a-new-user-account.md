# Create a new user account



```javascript
curl --location --request POST '[base_url]/kyc/user/create'
--header 'Authorization: Bearer {{accessToken}}'
--header 'Content-Type: application/json'
--data-raw '{
    "phoneNumber": {{phoneNumber}}
}'
```

### **Response**

#### success

```json5
   { "status": 201, "userId": {{userID}} } 
```

#### fail

```json5
  { "status": 400, "desc": "user exists", "userId": {{userID}} }
  { "status": 400, "desc": "invalid phoneNumber" }
```

##
