import React, { FC } from 'react'
import styled from 'styled-components'
import { AuthPageContent } from '../components'
import { Layout } from '../layout/indext'

export const AuthPage: FC = () => {
  return (
    <Layout auth>
      <AuthPageContent />
    </Layout>
  )
}
