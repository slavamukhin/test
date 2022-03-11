import NiceModal from '@ebay/nice-modal-react'
import { EditApiModal } from './components/EditApiModal'
import { EditKeyModal } from './components/EditKeyModal'
import { AddVersionModal } from './components/AddVersionModal'
import { EditVersionModal } from './components/EditVersionModal'
import { ConfirmDeleteVersionModal } from
  './components/ConfirmDeleteVersionModal'
import { ConfirmDeleteAvaivableApiModal } from
  './components/ConfirmDeleteAvaivableApiModal'
import { ConfirmTurnOffKeyModal } from './components/ConfirmTurnOffKeyModal'
import { ConfirmTurnOffApiModal } from './components/ConfirmTurnOffApiModal'
import { AddAvaivableApiModal } from './components/AddAvaivableApiModal'
import { VersionObject } from './interfaces'

export const showKeyEditModal = (keyId: string) =>
  NiceModal.show(EditKeyModal, { keyId })

export const showApiEditModal = (apiId: string) =>
  NiceModal.show(EditApiModal, { apiId })

export const showAddVersionModal = () => NiceModal.show(AddVersionModal)

export const showEditVersionModal = (version: VersionObject) =>
  NiceModal.show(EditVersionModal, { version })

export const showConfirmDeleteVersionModal = (versionName: string) =>
  NiceModal.show(ConfirmDeleteVersionModal, { versionName })

export const showConfirmDeleteAvaivableApiModal = (apiId: string) =>
  NiceModal.show(ConfirmDeleteAvaivableApiModal, { apiId })

export const showConfirmTurnOffKeyModal = (keyId: string) =>
  NiceModal.show(ConfirmTurnOffKeyModal, { keyId })

export const showConfirmTurnOffApiModal = (apiId: string) =>
  NiceModal.show(ConfirmTurnOffApiModal, { apiId })

export const showAddAvaivableApiModal = (edit?: boolean) =>
  NiceModal.show(AddAvaivableApiModal, {edit})
