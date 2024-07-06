import { Container, Badge, List, ListItem, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="greenstyles">
    <Container>
      <Title>
        GreenStyles <Badge>2022</Badge>
      </Title>
      <P>
        A fashion brand focused heavily on eco-friendliness and e-commerce.
        Greenstyles aims to make a difference by implementing green strategies
        in its business.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python Flask, HTML, Bootstrap, Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/greenstyles.jpeg" alt="greenstyles" />
      <Heading as="h3" variant="section-title">
        Key Features
      </Heading>
      <P>
        GreenStyles is a website that handles online orders of eco-friendly
        clothes and garments, comes with analytics for better management for
        staff. The website also has in-app transactions available for user
        payments.
      </P>
      <br />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
