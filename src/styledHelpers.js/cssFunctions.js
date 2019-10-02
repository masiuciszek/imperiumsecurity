/* eslint-disable import/prefer-default-export */
export const transition = (
  amount = 'all',
  time = '300',
  type = 'ease-in-out'
) => `transition: ${amount} ${time}ms ${type}`;
