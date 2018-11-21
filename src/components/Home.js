// @flow

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import shortid from 'shortid';

// https://github.com/tsuyoshiwada/react-stack-grid
import StackGrid from 'react-stack-grid';

// https://github.com/frontend-collective/react-image-lightbox
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type Props = {};

type Pet = {
  image: string,
  source: string,
  petName: string,
  thumbHt: number,
  thumbUrl: string
};

type PetArray = Array<Pet>;

type State = {
  hasErrored: boolean,
  isLoading: boolean,
  candidates: PetArray,
  lightBoxIsOpen: boolean,
  photoIndex: number,
};

type PicData = {
  width: number,
  height: number,
}

const thumbWidth = 170;

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasErrored: false,
      isLoading: true,
      candidates: [],
      lightBoxIsOpen: false,
      photoIndex: 0,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const animalType = 'dogs'; // Pretending there are other animal data sets available
    const data = await this.fetchData(animalType);
    this.onFetchComplete(data, animalType);
  }

  onPictureSelect(index: number) {
    this.setState({
      lightBoxIsOpen: true,
      photoIndex: index,
    });
  }

  async onFetchComplete(returnedData: {}, animalType: string) {
    const candidates = returnedData[animalType];
    // Call unsplash.com API to get original width/height in order find
    // correct thumbnail height before loading image
    // masonary layout needs dimensions pre image load
    for (const candidate of candidates) {
      const picId = candidate.source.substring(
        candidate.source.lastIndexOf('/') + 1,
        candidate.source.length,
      );
      const picData = await this.getPicData(picId);
      // thumbWidth is const defined at top of class
      candidate.thumbHt = (thumbWidth * picData.height) / picData.width;
      candidate.thumbUrl = `//source.unsplash.com/${picId}/${thumbWidth}x${candidate.thumbHt}`;
    }

    this.setState({
      candidates,
      isLoading: false,
    });
  }

  getPicData(id: string): Promise<PicData> {
    return fetch(
      `//api.unsplash.com/photos/${id}?client_id=5db564338bd08f56cb82e8db2375eb8a7568381d89f80386002549351caeac7d`,
    )
      .then(response => {
        if (!response.ok) {
          console.warn(response.statusText);
        }
        return response;
      })
      .then(response => response.json());
    // TODO gracefully handle fetch failure that satisfies Flow and Jest
    // and prints out message to screen
    // .catch(() => console.warn('picture data fetch failure'));
  }

  fetchData(animalType: string): Promise<Object> {
    return fetch(`data/${animalType}.json`)
      .then(response => {
        if (!response.ok) {
          console.warn(response.statusText);
        }
        return response;
      })
      .then(response => response.json());
    // TODO gracefully handle fetch failure that satisfies Flow and Jest
    // and prints out message to screen
    // .catch(() => console.warn('animal data fetch failure'));
  }

  render() {
    return (
      <section className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Best Place to Adopt a Pet · Asana Pet Adoption</title>
        </Helmet>
        <Grid>
          <Jumbotron className="home-leadin">
            <h2>Where Pets Find Their People</h2>
            <p>
              Thousands of adoptable pets are looking for people. Click on a
              thumbnail to introduce yourself...
            </p>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col className="pets-col">
              {/* multi-conditionals require iife */}
              {(() => {
                let content;
                if (this.state.hasErrored) {
                  content = (
                    <h1>
                      There was an error
                      <br />
                      loading the items.
                    </h1>
                  );
                } else if (this.state.isLoading) {
                  content = <h1>Loading...</h1>;
                } else if (this.state.candidates) {
                  content = (
                    <StackGrid
                      columnWidth={thumbWidth}
                      duration={0}
                      className="stack-grid"
                    >
                      {this.state.candidates.map((candidate, i) => (
                        <picture
                          style={{
                            width: `${thumbWidth}px`,
                            height: `${candidate.thumbHt}px`,
                          }}
                          onClick={() => this.onPictureSelect(i)}
                          key={`id-${shortid.generate()}`}
                        >
                          <img
                            style={{
                              width: `${thumbWidth}px`,
                              height: `${candidate.thumbHt}px`,
                            }}
                            src={candidate.thumbUrl}
                            alt={candidate.petName}
                          />
                        </picture>
                      ))}
                    </StackGrid>
                  );
                }
                return content;
              })()}
            </Col>
          </Row>
        </Grid>

        {this.state.lightBoxIsOpen && (
          <Lightbox
            mainSrc={this.state.candidates[this.state.photoIndex].image}
            nextSrc={
              this.state.candidates[
                (this.state.photoIndex + 1) % this.state.candidates.length
              ].image
            }
            prevSrc={
              this.state.candidates[
                (this.state.photoIndex + this.state.candidates.length - 1) %
                  this.state.candidates.length
              ].image
            }
            onCloseRequest={() =>
              this.setState({
                lightBoxIsOpen: false,
              })
            }
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (this.state.photoIndex + this.state.candidates.length - 1) %
                  this.state.candidates.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex:
                  (this.state.photoIndex + 1) % this.state.candidates.length,
              })
            }
            imageCaption={
              <div className="lightbox-pet-name">
                {this.state.candidates[this.state.photoIndex].petName}
              </div>
            }
          />
        )}
      </section>
    );
  }
}
