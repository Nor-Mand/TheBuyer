import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import StarRatings from "react-star-ratings";

const EcommerceProducts = () => {
  document.title = "Products | Dashboard Template";
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <h1>products</h1>
      <div className="page-content">
        <Container>
          <p>Breadcumbs....</p>
          <Row>
            <Col lg="3">
              <Card>
                <CardBody>
                  <CardTitle>Filter</CardTitle>
                  <div>
                    <h5 className="font-size-14 mb-3">Clothes</h5>
                    <ul className="list-unstyled product-list">
                      <li>
                        <Link to="/">
                          <i className="mdi mdi-chevron-right me-2" />
                          clotes 1
                        </Link>
                        <Link to="/">
                          <i className="mdi mdi-chevron-right me-2" />
                          clotes 2
                        </Link>
                        <Link to="/">
                          <i className="mdi mdi-chevron-right me-2" />
                          clotes 3
                        </Link>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="9">
              <Row className="mb-3">
                <Col xl="4" sm="6">
                  <div className="mt-2">
                    <h5>Clothes</h5>
                  </div>
                </Col>
                <Col lg="8" sm="6">
                  <Form className="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
                    <div className="search-box me-2">
                      <div className="position-relative">
                        <Input
                          type="text"
                          className="form-control border-0"
                          placeholder="Search..."
                        />
                        <i className="bx bx-search-alt search-icon" />
                      </div>
                    </div>
                    <Nav className="product-view-nav" pills>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1");
                          }}
                        >
                          <i className="bx bx-grid-alt" />
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            toggleTab("2");
                          }}
                        >
                          <i className="bx bx-list-ul" />
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col xl="4" sm="6">
                  <Card>
                    <CardBody>
                      <div className="product-img position-relative">
                        <div className="avatar-sm product-ribbon">
                          <span className="avatar-title rounded-circle bg-primary">
                            {`- Product Offer %`}
                          </span>
                        </div>
                        <img
                          src=""
                          alt=""
                          className="img-fluid mx-auto d-block"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h5 className="mb-3 text-truncate">
                          <Link to="/dashboard" className="text-dark">
                            Product name.....
                          </Link>
                        </h5>
                        <div className="text-muted mb-3">
                          <StarRatings
                            rating={2.403}
                            starRatedColor="#F1B44C"
                            starEmptyColor="#74788d"
                            numberOfStars={5}
                            name="rating"
                            starDimension="14px"
                            starSpacing="1px"
                          />
                        </div>
                        <h5 className="my-0">
                          <span className="text-muted me-2">
                            <del>Price....</del>
                          </span>
                          <b>New Price.....</b>
                        </h5>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EcommerceProducts;
