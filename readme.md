### Dice2.Win Subgraph [https://dice2.win](https://dice2.win "https://dice2.win")

[https://thegraph.com/explorer/subgraph/achiko/dice2win](https://thegraph.com/explorer/subgraph/achiko/dice2win "https://thegraph.com/explorer/subgraph/achiko/dice2win")


ID:  QmUuY41LpmTWYqFkt3yQUL2wwuzQtsRJdwKxMRha1eXGDb

**Queries (HTTP)**
[https://api.thegraph.com/subgraphs/name/achiko/dice2win](https://api.thegraph.com/subgraphs/name/achiko/dice2winhttp:// "https://api.thegraph.com/subgraphs/name/achiko/dice2win")
**Subscriptions (WS)**
[wss://api.thegraph.com/subgraphs/name/achiko/dice2win](wss://api.thegraph.com/subgraphs/name/achiko/dice2win "wss://api.thegraph.com/subgraphs/name/achiko/dice2win")

## GraphQl Queries

```json
{
  failedPayments(first: 5) {
    id
    _beneficiary
    amount
  }
  payments(first: 5) {
    id
    _beneficiary
    amount
  }
  jackpotPayments(first: 10) {
    _beneficiary
    amount
  }
}
```


