import _strategies from '..';
import { getAddress } from '@ethersproject/address';

export const author = 'zena';
export const version = '0.1.0';

const calculate = (a, operation, value) => {
  let result = a;

  switch (operation) {
    case 'except': {
      result = 0;
      break;
    }
    case 'none': {
      break;
    }
    case 'add': {
      result += value;
      break;
    }
    case 'minus': {
      result -= value;
      if (result < 0) result = 0;
      break;
    }
    case 'div': {
      if (value == 0) result = 0;
      result /= value;
      break;
    }
    case 'mul': {
      result *= value;
      break;
    }
    case 'sqrt': {
      result = Math.sqrt(result);
      break;
    }
  }
  return result;
};

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options: {
    name: string;
    weight: {
      ton: {
        operation: string;
        value: number;
      };
      wton: {
        operation: string;
        value: number;
      };
      swton: {
        operation: string;
        value: number;
      };
      tokamakNft: {
        operation: string;
        value: number;
      };
      titanNft: {
        operation: string;
        value: number;
      };
    };
    ton: {
      name: string;
      params: Record<string, string | number | boolean>;
    };
    wton: {
      name: string;
      params: Record<string, string | number | boolean>;
    };
    swton: {
      name: string;
      params: Record<string, string | number | boolean>;
    };
    tokamakNft: {
      name: string;
      params: Record<string, string | number | boolean>;
    };
    titanNft: {
      name: string;
      params: Record<string, string | number | boolean>;
    };
  },
  snapshot
) {
  let tonVotes, wtonVotes, swtonVotes, tkamakNftVotes, titanNftVotes;

  if (options.weight.ton.operation != 'except') {
    tonVotes = await _strategies[options.ton.name].strategy(
      space,
      network,
      provider,
      addresses,
      options.ton.params,
      snapshot
    );
    // console.log('tonVotes', tonVotes);
  }

  if (options.weight.wton.operation != 'except') {
    wtonVotes = await _strategies[options.wton.name].strategy(
      space,
      network,
      provider,
      addresses,
      options.wton.params,
      snapshot
    );
    // console.log('wtonVotes', wtonVotes);
  }

  if (options.weight.swton.operation != 'except') {
    swtonVotes = await _strategies[options.swton.name].strategy(
      space,
      network,
      provider,
      addresses,
      options.swton.params,
      snapshot
    );
    // console.log('swtonVotes', swtonVotes);
  }

  if (options.weight.tokamakNft.operation != 'except') {
    tkamakNftVotes = await _strategies[options.tokamakNft.name].strategy(
      space,
      network,
      provider,
      addresses,
      options.tokamakNft.params,
      snapshot
    );
    // console.log('tkamakNftVotes', tkamakNftVotes);
  }

  if (options.weight.titanNft.operation != 'except') {
    titanNftVotes = await _strategies[options.titanNft.name].strategy(
      space,
      network,
      provider,
      addresses,
      options.titanNft.params,
      snapshot
    );
    // console.log('tkamakNftVotes', tkamakNftVotes);
  }

  const calculateVotes = (
    weight,
    tList,
    wList,
    swList,
    tokamakNft,
    titanNft,
    a
  ) => {
    let sum = 0;

    if (weight.ton != 0 && tList != undefined && tList[a] > 0)
      sum += calculate(tList[a], weight.ton.operation, weight.ton.value);

    if (weight.wton != 0 && wList != undefined && wList[a] > 0)
      sum += calculate(wList[a], weight.wton.operation, weight.wton.value);

    if (weight.swton != 0 && swList != undefined && swList[a] > 0)
      sum += calculate(swList[a], weight.swton.operation, weight.swton.value);

    if (weight.tokamakNft != 0 && tokamakNft != undefined && tokamakNft[a] > 0)
      sum += calculate(
        tokamakNft[a],
        weight.tokamakNft.operation,
        weight.tokamakNft.value
      );

    if (weight.titanNft != 0 && titanNft != undefined && titanNft[a] > 0)
      sum += calculate(
        titanNft[a],
        weight.titanNft.operation,
        weight.titanNft.value
      );

    return sum;
  };

  return Object.fromEntries(
    Object.entries(addresses).map((address: any) => [
      getAddress(address[1]),
      calculateVotes(
        options.weight,
        tonVotes,
        wtonVotes,
        swtonVotes,
        tkamakNftVotes,
        titanNftVotes,
        address[1]
      )
    ])
  );
}
