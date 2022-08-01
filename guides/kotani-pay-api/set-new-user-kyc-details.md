# Set new user KYC details



```
curl --location --request POST '[base_url]/kyc/user/setDetails'
--header 'Authorization: Bearer {{accessToken}}' 
--header 'Content-Type: application/json' 
--data-raw '{
    phoneNumber: {{phoneNumber}},
    documentType: {{documentType}}, // ID or AlienId or Passport
    documentNumber: {{documentNumber}},
    fullname: {{firstname lastname}},
    dateofbirth: {{dateofbirth}}, // YYYY-MM-DD
    programName: {{programName}}, // CANNOT BE EMPTY
    email: {{email}}
}'
```

### **Response**

#### success

```
   { status: 201, desc: `KYC completed successfully` } 
```

#### fail

```
  { status: 400, desc: `invalid information provided` }
```
