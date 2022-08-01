# User funds withdraw

```
curl --location --request POST '[base_url]/transactions/withdraw/momo'
--header 'Authorization: Bearer {{accessToken}}'
--header 'Content-Type: application/json'
--data-raw '{
    "phoneNumber" : {{phoneNumber}},
    "amount" : {{localCurrencyAmount}},
    "fiatTxnReferenceId" : {{fiatTxnReferenceId}}
}'
```

### **Response**

#### success

```
   { status: 201, phoneNumber: `${phoneNumber}`,  amountWithdrawn: { currency: `${localCurrency}`, amount: `${localCurrencyAmount}`}, txnHash: `${transactionHash}`, depositReference: `fiatTxnReferenceId` } 
```

#### fail

```
  { status: 400, phoneNumber: `${withdrawMSISDN}`, desc: `invalid phoneNumber`}
  { status: 400, desc: "user account does not exist" }
  { status: 400, desc: "user account is not verified" } 
```

##
