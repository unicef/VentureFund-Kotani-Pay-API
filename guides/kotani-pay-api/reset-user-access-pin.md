# Reset User Access PIN



```javascript
curl --location --request POST '[base_url]/user/resetPin'
--header 'Authorization: Bearer {{accessToken}}'
--header 'Content-Type: application/json'
--data-raw '{
    "phoneNumber": {{phoneNumber}},
    "newUserPin": {{newUserPin}}
}'
```

### **Response**

#### success

```json5
   { "status": 201, "desc": {{userMSISDN}} "Kotani Pay PIN updated successfully" } 
```

#### fail

```json5
  { "status": 400, "desc": "user exists", "userId": {{userID}} }
  { "status": 400, "desc": "invalid phoneNumber" }
  { "status": 400, "desc": "User does not exist" }
  { "status": 400, "desc": "PIN must be atleast 4 characters"}
  { "status": 400, "desc": "invalid information provided" }
```
