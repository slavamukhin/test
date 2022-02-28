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
import { VersionObject } from './versionObject'

/**
 * Versions of the API.
 */
export interface VersionsDataObject {
  /**
   * The name of Default version if set
   */
  defaultVersion: string
  /**
   * If set to true Tyk will skip version checking, you can still apply blacklist and              whitelist information to your API by specifying a Default version within the versions map.
   */
  notVersioned: boolean
  /**
   * Can either be: header, urlParam or url. Tyk will then look for the version information in the appropriate location.
   */
  versionLocation: VersionsDataObject.VersionLocationEnum
  /**
   * The name of the key to check for versioning information.
   */
  versionLocationKey: string
  /**
   * This is a keyed JSON objects holding Swagger OpenAPI specification
   */
  versions: Array<VersionObject>
}
export namespace VersionsDataObject {
  export type VersionLocationEnum = 'urlParam' | 'HEADER'
  export const VersionLocationEnum = {
    UrlParam: 'urlParam' as VersionLocationEnum,
    Header: 'HEADER' as VersionLocationEnum,
  }
}
