# Get User Account Balance



```
curl --location --request POST '[base_url]/user/account/getBalance'
--header 'Authorization: Bearer {{accessToken}}'
--header 'Content-Type: application/json'
--data-raw '{
	"phoneNumber": {{phoneNumber}}
}'
```

### **Response**

#### success

```
   { 
      status: 201,     
      address: `${publicAddress}`, 
      balance: {
        currency: `${localCurrency}`, 
        amount: `${amountInLocalCurrency}`,
      }   
    } 
```

#### fail

```
  { status: 400, user: `${name}`, phoneNumber: `${userMSISDN}`, desc: `The number provided is not a valid phoneNumber` }
  { status: 400, desc: `invalid request` }  
```
