# Tokamak Network DAO voting strategy

The voting rights are calculated proportionally based on the following assets:

- TON balance
- WTON balance
- Staked TON balance
- Tokanak NFT balance
- Titan NFT balance


The voting rights are calculated using operations and values.

The operations work as follows:
- except: No voting rights
- none: Not calculating, Use the balance as is a 1:1 ratio.
- add: Addition operation
- minus: Subtraction operation
- div: Division operation
- mul: Multiplication operation
- sqrt: Sqrt operation



Parameters:

| param |      | sub-param | type | description | example |
| ---   | ---  | --- | --- | --- | --- |
| `weight` | `ton` |  `operation`  | `string`|  Weight calculation operator  |  none : No counting to voting
| `weight` | `ton` |           | `number`| Voting Rights Reflection Ratio    | 0.5
|          | `wton` |   | `number`| Voting Rights Reflection Ratio  | 0.5
|          | `swton` |   | `number`| Voting Rights Reflection Ratio  | 1
|          | `tokamakNft` |   | `number`|  Voting Rights Reflection Ratio  | 1000
|          | `titanNft` |   | `number`|  Voting Rights Reflection Ratio  | 0
| `ton` | `name`   |           | `string`|   Strategy name | erc20-balance-of |
|       | `params` | `address` | `string`|  TON address | 0x2be5e8c109e2197D077D13A82dAead6a9b3433C5 |
|       |          | `symbol`  | `string`|  TON symbol | TON |
|       |          | `decimals`| `number`| TON decimals | 18 |
| `wton` | `name`   |           | `string`|  Strategy name | erc20-balance-of |
|       | `params` | `address` | `string`|  WTON address  | 0xc4A11aaf6ea915Ed7Ac194161d2fC9384F15bff2 |
|       |          | `symbol`  | `string`|  WTON symbol  | WTON |
|       |          | `decimals`| `number`| WTON decimals  | 27 |
| `swton` | `name`   |           | `string`|  Strategy name | staked-ton-balance-of |
|       | `params` | `address` | `string`|  SeigManager address | 0x0b55a0f463b6defb81c6063973763951712d0e5f |
|       |          | `symbol`  | `string`|  Staked TON symbol | SWTON |
| `tokamakNft` | `name`   |           | `string`|  Strategy name | erc721 |
|       | `params` | `address` | `string`|  Tokamak NFT address | 0x073afd0ca0b12da8543e67b664dbf9fcc03fca99 |
|       |          | `symbol`  | `string`|  Tokamak NFT symbol | TOK |
| `titanNft` | `name`   |           | `string`|  Strategy name | erc721 |
|       | `params` | `address` | `string`|  Titan NFT address | 0x0000000000000000000000000000000000000000 |
|       |          | `symbol`  | `string`|  Titan NFT symbol | TITAN |



Here is an example of parameters:

```json
{
      "name": "tokamak-network-dao",
       "params": {
        "weight": {
          "ton": {
            "operation": "sqrt",
            "value": 0
          } ,
          "wton":  {
            "operation": "div",
            "value": 10
          },
          "swton":  {
            "operation": "none",
            "value": 1
          },
          "tokamakNft":  {
            "operation": "add",
            "value": 10000
          },
          "titanNft":  {
            "operation": "except",
            "value": 0
          }
        },
        "ton": {
          "name": "erc20-balance-of",
          "params": {
            "address": "0x2be5e8c109e2197D077D13A82dAead6a9b3433C5",
            "symbol": "TON",
            "decimals": 18
          }
        },
        "wton": {
          "name": "erc20-balance-of",
          "params": {
            "address": "0xc4A11aaf6ea915Ed7Ac194161d2fC9384F15bff2",
            "symbol": "WTON",
            "decimals": 27
          }
        },
        "swton": {
          "name": "simple-staking-ton-balance-of",
          "params": {
            "address": "0x0b55a0f463b6defb81c6063973763951712d0e5f",
            "symbol": "SWTON",
            "decimals": 27
          }
        },
        "tokamakNft": {
          "name": "erc721",
          "params": {
            "address": "0x073afd0ca0b12da8543e67b664dbf9fcc03fca99",
            "symbol": "TOK"
          }
        },
        "titanNft": {
          "name": "erc721",
          "params": {
            "address": "0x0000000000000000000000000000000000000000",
            "symbol": "TITAN"
          }
        }
      }
}
```

