# Get access token

## Get Access Token <a href="#get-access-token" id="get-access-token"></a>

```javascript
curl --location --request POST '[base_url]/api/login'
--header 'Content-Type: application/json'
--data-raw '{
    "phoneNumber": {{phoneNumber}},
    "countryCode": {{countryCode}},
    "password" : {{password}}
}'
```

### **Response**

#### success

```json5
   { accessToken: `${accessToken}` } 
```

#### fail

```json5
  { status: 400, desc: `cannot find user` }
  { status: 400, desc: `not allowed` }
  { status: 500 }
```
