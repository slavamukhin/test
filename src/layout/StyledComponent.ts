import styled from 'styled-components'

// Layout components
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: calc(100% - 48px);
`

// Header components
export const HeaderWrapper = styled.header`
  height: 48px;
  background: #0d2653;
  display: flex;
  align-items: center;
`
export const LogoTitle = styled.div`
  color: #fff;
  font-size: 14px;
  margin-left: 12px;
`

export const UserWrapper = styled.div`
  flex-grow: 1;
  margin-left: 57px;
  margin-right: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WrapperLogo = styled.div`
  margin-left: 24px;
  display: flex;
`

// Content components
export const ContentWrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  padding: 0 20px;
`
