// @flow

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Row, Col } from 'react-bootstrap';

const dogCatImg = require('../assets/img/header-dog-cat.png');
const smlPetImg = require('../assets/img/smaller-pet.png');

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>News · Asana Pet Adoption</title>
    </Helmet>
    <img className="header-image" src={dogCatImg} alt="White pet" />
    <Grid className="news">
      <h2>News</h2>
      <Row>
        <Col xs={12} sm={8} className="main-section">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ’Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ’lorem ipsum’ will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ’Content here, content
            here’, making it look like readable English.
          </p>
        </Col>
        <Col xs={12} sm={4} className="sidebar-section">
          <figure>
            <img src={smlPetImg} alt="Man holding pet" />
            <figcaption>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </figcaption>
          </figure>
        </Col>
      </Row>
    </Grid>
  </Fragment>
);
