import { Container, Badge, List, ListItem, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Temasek Community Center">
    <Container>
      <Title>
        Temasek CC <Badge>2024</Badge>
      </Title>
      <P>
        A website for Temasek Community Center, a community center in Singapore.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, SQL, MUI, Javascript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tcc.png" alt="TCC" />
      <Heading as="h3" variant="section-title">
        Key Features
      </Heading>
      <P>
        This website supports event bookings, membership sign-ons, in-app
        transactions. Designed to boost community engagement and help staff
        manage the community center more effectively.
      </P>
      <br />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
