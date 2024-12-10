import _strategies from '..';
import { getAddress } from '@ethersproject/address';
// import { BigNumberish } from '@ethersproject/bignumber';
// import { formatUnits } from '@ethersproject/units';
// import { Multicaller } from '../../utils';

export const author = 'zena';
export const version = '0.1.0';

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options: {
    name: string;
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
    tokamaknft: {
      name: string;
      params: Record<string, string | number | boolean>;
    };
  },
  snapshot
) {
  const tonStrategy = _strategies[options.ton.name].strategy;
  const wtonStrategy = _strategies[options.wton.name].strategy;
  // const tkamakNftStrategy = _strategies[options.ton.name].strategy;

  const tonVotes = await tonStrategy(
    space,
    network,
    provider,
    addresses,
    options.ton.params,
    snapshot
  );
  // console.log('tonVotes', tonVotes);

  const wtonVotes = await wtonStrategy(
    space,
    network,
    provider,
    addresses,
    options.wton.params,
    snapshot
  );

  // console.log('wtonVotes', wtonVotes);

  // const tkamakNftVotes = await tkamakNftStrategy(
  //   space,
  //   network,
  //   provider,
  //   addresses,
  //   options.tokamaknft.params,
  //   snapshot
  // );
  // console.log('tkamakNftVotes', tkamakNftVotes);

  const calculateVotes = (tList, wList, a) => {
    const tonBalance = tList[a] ? tList[a] : 0;
    const wtonBalance = wList[a] ? wList[a] : 0;
    return tonBalance + wtonBalance;
  };

  return Object.fromEntries(
    Object.entries(addresses).map((address: any) => [
      getAddress(address[1]),
      calculateVotes(tonVotes, wtonVotes, address[1])
    ])
  );
}
