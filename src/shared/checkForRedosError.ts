import { isSafe } from 'redos-detector';

const checkForRedosError = (regex: string): any => !isSafe(new RegExp(`${regex}`)).safe && [
  {
    message: `${regex} This pattern is not safe from ReDoS attacks.`,
  }
]

export default checkForRedosError
