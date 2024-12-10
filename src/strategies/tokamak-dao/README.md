# Tokamak DAO voting strategy

The voting rights are calculated based on the following assets:

- TON balance

- WTON balance

- Staked TON balance

- Tokanak NFT balance

- Titan NFT balance

Parameters:

| param |      | sub-param | type | description | default |
| ---   | ---  | --- | --- | --- | --- |
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
| `tokamaknft` | `name`   |           | `string`|  Strategy name | erc721 |
|       | `params` | `address` | `string`|  Tokamak NFT address | 0x073afd0ca0b12da8543e67b664dbf9fcc03fca99 |
|       |          | `symbol`  | `string`|  Tokamak NFT symbol | TOK |

Here is an example of parameters:

```json
{
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
          "name": "staked-ton-balance-of",
          "params": {
            "address": "0x0b55a0f463b6defb81c6063973763951712d0e5f",
            "symbol": "SWTON"
          }
        },
        "tokamaknft": {
          "name": "erc721",
          "params": {
            "address": "0x073afd0ca0b12da8543e67b664dbf9fcc03fca99",
            "symbol": "TOK"
          }
        }
      }
```

