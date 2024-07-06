import { Container, Badge, List, ListItem, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="productify">
    <Container>
      <Title>
        Productify <Badge>2024</Badge>
      </Title>
      <P>
        Productify is an all-in-one app designed around increasing productivity!
        The app includes many features that help organize and manage user&apos;s time
        and energy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Chakra UI, Framer Motion, and Three.js</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/productify.jpeg" alt="Productify" />
      <Heading as="h3" variant="section-title">
        Key Features
      </Heading>
      <P>
        Productify is an app that is designed to improve user&apos;s productivity.
        The app has features to help users manage their time and efforts better
        and allow for better organisation overall.
      </P>
      <br />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
