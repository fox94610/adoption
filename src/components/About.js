// @flow

import React from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Col } from 'react-bootstrap';

const catImg = require('../assets/img/header-image-about.png');
const glitchFoxImg = require('../assets/img/mr-glitch-fox.png');

export default () => (
  <section>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About · Asana Pet Adoption</title>
    </Helmet>
    <img className="header-image" src={catImg} alt="Cat laying down" />
    <Grid className="about">
      <Col xs={12} sm={8} smOffset={2}>
        <img
          className="about-profile-pic"
          src={glitchFoxImg}
          alt="Mr. Glitch Fox"
        />
        <h3>
          <span className="no-wrap">Mr. Glitch Fox</span> Says...
        </h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ’Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ’lorem ipsum’ will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn’t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
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
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Col>
    </Grid>
  </section>
);
