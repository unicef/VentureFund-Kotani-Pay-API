# User funds deposit



```
curl --location --request POST '[base_url]/transactions/deposit/momo'
--header 'Authorization: Bearer {{accessToken}}'
--header 'Content-Type: application/json'
--data-raw '{
    "phoneNumber": {{phoneNumber}},
    "amount": {{amount}},
    "currency": {{currencySymbol}}
}'
```

### Response

#### success

```
   { status: 201, phoneNumber: `${phoneNumber}`,  deposited: { currency: `${localCurrency}`, amount: `${localCurrencyAmount}`}, txnHash: `${transactionHash}`, depositReference: `momoRefId` } 
```

#### fail

```
  { status: 400, phoneNumber: `${withdrawMSISDN}`, desc: `invalid phoneNumber`}
  { status: 400, desc: "user account does not exist" }
  { status: 400, desc: "user account is not verified" } 
```
