import Head from "next/head";
import 'antd/dist/antd.css';
import { Typography, Divider, Layout, Breadcrumb, Input } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default function AntD() {
  return (
    <>
      <Head>
        <title>Ant Design</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Layout className="layout" style={{height: '100%'}}>
      <Input placeholder="Basic usage" />
        <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              In the process of internal desktop applications development, many different design specs and
              implementations would be involved, which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
              After massive project practice and summaries, Ant Design, a design language for background
              applications, is refined by Ant UED Team, which aims to
              <Text strong>
                uniform the user interface specs for internal background projects, lower the unnecessary
                cost of design differences and implementation and liberate the resources of design and
                front-end development
              </Text>.
            </Paragraph>
            <Divider />
            <Title level={2}>Guidelines and Resources</Title>
            <Paragraph>
              We supply a series of design principles, practical patterns and high quality design resources
              (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
              prototypes beautifully and efficiently.
            </Paragraph>
            <Paragraph>
              <ul>
                <li>
                  <Link href="/docs/spec/proximity">Principles</Link>
                </li>
                <li>
                  <Link href="/docs/spec/overview">Patterns</Link>
                </li>
                <li>
                  <Link href="/docs/resources">Resource Download</Link>
                </li>
              </ul>
            </Paragraph>
          </Typography>  
        </Layout.Content>
      </Layout>
    </>
  );
}