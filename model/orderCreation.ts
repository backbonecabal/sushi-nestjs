/**
 * @file orderCreation
 */
import { OrderType } from './orderType';

/**
 * Data a user provides when creating a new order.
 */
export interface OrderCreation {
  /**
   * Ethereum 40 byte address encoded as a hex with `0x` prefix.
   */
  sellToken?: string;
  /**
   * Ethereum 40 byte address encoded as a hex with `0x` prefix.
   */
  buyToken?: string;
  /**
   * Amount of a token. uint256 encoded in decimal.
   */
  sellAmount?: string;
  /**
   * Amount of a token. uint256 encoded in decimal.
   */
  buyAmount?: string;
  /**
   * Unix timestamp until the order is valid. uint32.
   */
  validTo?: number;
  /**
   * Arbitrary identifier sent along with the order. Could be used to track the interface or other meta-aspects of the order. uint32 encoded
   */
  appData?: number;
  /**
   * Amount of a token. uint256 encoded in decimal.
   */
  feeAmount?: string;
  kind?: OrderType;
  /**
   * Is this a fill-or-kill order or a partially fillable order?
   * @note This is Not Implemented on-chain yet, this is a multi-pathway meta transaction
   */
  partiallyFillable?: boolean;
  /**
   * 65 bytes encoded as hex with `0x` prefix. r + s + v from the spec.
   */
  Signature?: object;
}
