import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

interface PropsHeader {
  title: string;
  description?: string;
  component?: any;
  image_background?: any;
}

interface StateHeader {}

export default class HeaderDefault extends React.Component<
  PropsHeader,
  StateHeader
> {
  render() {
    let styleBackgroud: Object = {};

    if (this.props.image_background)
      styleBackgroud = {
        minHeight: "600px",
        backgroundImage: "url(" + this.props.image_background + ")",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      };

    return (
      <Fragment>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={styleBackgroud}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="12">
                <h1 className="display-2 text-white">{this.props.title}</h1>
                <p className="text-white mt-0 mb-5">
                  {this.props.description || ""}
                </p>

                {this.props.component || ""}
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
