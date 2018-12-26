import React from 'react'

import Layout from '../components/layout/index'
import SEO from '../components/seo'

import { Section } from '../components/section';
import { colors } from '../components/theme/colors';
import { SectionHeading } from '../components/heading';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

    <Section
      background={colors.sections.lightSection.background}
    >
      <SectionHeading title={'Customer Reviews'}/>
    </Section>

    <Section
      background={colors.sections.greenSection.background}
    >
      <SectionHeading title={'Meet The Team'} inverse/>
    </Section>

  </Layout>
)

export default IndexPage
