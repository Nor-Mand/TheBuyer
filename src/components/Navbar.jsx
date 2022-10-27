import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

// import { connect } from "react-redux";

const Navbar = (props) => {
  const [dashboard, setdashboard] = useState(false);
  const [app, setapp] = useState(false);
  const [ecommerce, setecommerce] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link  arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {/* {props.t("Dashboard")} {props.menuOpen} */}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="/dashboard" className="dropdown-item">
                      Default
                    </Link>
                    <Link to="/dashboard-saas" className="dropdown-item">
                      Saas
                    </Link>
                    <Link to="/dashboard-crypto" className="dropdown-item">
                      Crypto
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      Blog
                    </Link>
                    <Link to="/dashboard-job" className="dropdown-item">
                      Jobs
                    </Link>
                  </div>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link z arrow-none"
                  >
                    <i className="bx bx-customize me-2"></i>
                    Apps <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item  arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setecommerce(!ecommerce);
                        }}
                      >
                        Ecommerce <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: ecommerce,
                        })}
                      >
                        <Link
                          to="/ecommerce-products"
                          className="dropdown-item"
                        >
                          Products
                        </Link>
                        <Link
                          to="/ecommerce-product-detail/1"
                          className="dropdown-item"
                        >
                          Product Detail
                        </Link>
                        <Link to="/ecommerce-orders" className="dropdown-item">
                          Orders
                        </Link>
                        <Link
                          to="/ecommerce-customers"
                          className="dropdown-item"
                        >
                          Customers
                        </Link>
                        <Link to="/ecommerce-cart" className="dropdown-item">
                          Cart
                        </Link>
                        <Link
                          to="/ecommerce-checkout"
                          className="dropdown-item"
                        >
                          Checkout
                        </Link>
                        <Link to="/ecommerce-shops" className="dropdown-item">
                          Shops
                        </Link>
                        <Link
                          to="/ecommerce-add-product"
                          className="dropdown-item"
                        >
                          Add Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

export default withRouter(Navbar);
