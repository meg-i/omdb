import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Tag, Layout, Typography, Button } from "antd";
import "antd/dist/antd.css";
const TextTitle = Typography.Title;
const MovieDetail = (props) => {
  const {
    Title,
    Poster,
    imdbRating,
    Rated,
    Runtime,
    Genre,
    Plot,
  } = props.currentMovie;
  return (
    <Layout style={{ marginTop: 50 }}>
      <Row
        onClick={props.closeDisplay}
        style={{
          cursor: "pointer",
          paddingTop: 20,
          paddingLeft: 30,
        }}
      >
        <Button type="dashed" danger>
          <i className="fas fa-arrow-left"></i>
          <span style={{ marginLeft: 10, marginTop: -5 }}>Go Back</span>
        </Button>
      </Row>
      <Row>
        <Col span={11} style={{ paddingLeft: 150, paddingBottom: 50 }}>
          <img
            src={
              Poster === "N/A"
                ? "https://placehold.it/198x264&text=Image+Not+Found"
                : Poster
            }
            alt={Title}
          />
        </Col>
        <Col span={13}>
          <Row>
            <Col span={21}>
              <TextTitle level={4}>{Title}</TextTitle>
            </Col>
            <Col span={3}>
              <Button type="primary" danger>
                <span>
                  <b>{imdbRating}</b>
                </span>
              </Button>
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <Tag>{Rated}</Tag>
              <Tag>{Runtime}</Tag>
              <Tag>{Genre}</Tag>
            </Col>
          </Row>
          <Row>
            <Col>{Plot}</Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default MovieDetail;
