import React from "react";

import Layout from "../components/layout/containers/Layout";
import PageTitle from "../components/typography/pageTitle/PageTitle";

const NotFoundPage = () => (
  <Layout>
    <div style={ {margin: "auto"} }>
      <PageTitle pageTitle="404: Not Found" />
      <p>This route doesn't exist.</p>
      <p>But there are lots that do. How about we pick one of those instead.</p>
    </div>
  </Layout>
);

export default NotFoundPage;