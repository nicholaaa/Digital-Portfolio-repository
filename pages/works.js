import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbGreenStyles from '../public/images/works/greenstyles.jpeg'
import thumbTcc from '../public/images/works/tcc.png'
import thumbProductify from '../public/images/works/productify.jpeg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="greenstyles"
            title="GreenStyles"
            thumbnail={thumbGreenStyles}
          >
            An E-commerce platform centered around fashion with
            Eco-friendliness.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="tcc" title="Temasek CC" thumbnail={thumbTcc}>
            App development project for a Community Center's website.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="productify"
            title="Productify"
            thumbnail={thumbProductify}
          >
            A Productivity app focused on optmizing tasks and time-management.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
