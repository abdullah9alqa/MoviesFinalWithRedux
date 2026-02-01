import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction";
import "../App.css";
const NavBar = () => {
  const dispatch = useDispatch();

  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  const onSearch = (word) => {
    search(word);
  };

  return (
    <div className="nav-wrap">
      <Container>
        <Row className="align-items-center py-2">
          <Col xs="3" md="2" className="d-flex align-items-center">
            <a href="/" className="nav-brand">
              <img className="nav-logo" src={logo} alt="logo" />
              <span className="nav-title">Movies</span>
            </a>
          </Col>

          <Col xs="9" md="10">
            <div className="nav-search">
              <i className="fa fa-search nav-search-icon" aria-hidden="true"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="nav-search-input"
                placeholder="ابحث عن فيلم..."
                dir="rtl"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
