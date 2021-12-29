/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Basic auth data
 */
export interface ApiBasicAuthObject {
  hashType?: ApiBasicAuthObject.HashTypeEnum
  login?: string
  password?: string
}
export namespace ApiBasicAuthObject {
  export type HashTypeEnum = 'bcrypt'
  export const HashTypeEnum = {
    Bcrypt: 'bcrypt' as HashTypeEnum,
  }
}
