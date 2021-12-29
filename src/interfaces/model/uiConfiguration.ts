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

export interface UiConfiguration {
  apisSorter?: string
  deepLinking?: boolean
  defaultModelExpandDepth?: number
  defaultModelRendering?: UiConfiguration.DefaultModelRenderingEnum
  defaultModelsExpandDepth?: number
  displayOperationId?: boolean
  displayRequestDuration?: boolean
  docExpansion?: UiConfiguration.DocExpansionEnum
  filter?: object
  jsonEditor?: boolean
  maxDisplayedTags?: number
  operationsSorter?: UiConfiguration.OperationsSorterEnum
  showExtensions?: boolean
  showRequestHeaders?: boolean
  supportedSubmitMethods?: Array<string>
  tagsSorter?: UiConfiguration.TagsSorterEnum
  validatorUrl?: string
}
export namespace UiConfiguration {
  export type DefaultModelRenderingEnum = 'example' | 'model'
  export const DefaultModelRenderingEnum = {
    Example: 'example' as DefaultModelRenderingEnum,
    Model: 'model' as DefaultModelRenderingEnum,
  }
  export type DocExpansionEnum = 'none' | 'list' | 'full'
  export const DocExpansionEnum = {
    None: 'none' as DocExpansionEnum,
    List: 'list' as DocExpansionEnum,
    Full: 'full' as DocExpansionEnum,
  }
  export type OperationsSorterEnum = 'alpha' | 'method'
  export const OperationsSorterEnum = {
    Alpha: 'alpha' as OperationsSorterEnum,
    Method: 'method' as OperationsSorterEnum,
  }
  export type TagsSorterEnum = 'alpha'
  export const TagsSorterEnum = {
    Alpha: 'alpha' as TagsSorterEnum,
  }
}
