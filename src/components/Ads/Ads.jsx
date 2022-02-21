import React, { useEffect, useState } from "react";
import { Button, Card, Dropdown, Menu, Space } from "antd";
import Title from "antd/lib/typography/Title";
import Layout from "antd/lib/layout/layout";
import { DeleteFilled, DownOutlined } from "@ant-design/icons";
import "./Ads.css";

const { Meta } = Card;

const Ads = (props) => {
  const { ads = [], onDeleteAd = () => {} } = props;

  return (

    <Layout>
      <Title level={2}>All Ads</Title>

      <ul className="list__ads">
       <Space wrap>
          {ads?.map((ad) => {
            return (
              <li key={ad.id}>
                <Card
                  size="small"
                  style={{ width: 240 }}
                  cover={
                    ad.ad_image ? (
                      <img
                        alt="example"
                        src={ad.ad_image}
                      className="img__ad-card"
                      />
                    ) : null
                  }
                  actions={[
                    <DeleteFilled
                      key={"delete-ad"}
                      onClick={() => onDeleteAd(ad.id)}
                    />,
                  ]}
                >
                  <Meta title={ad.title} description={ad.description} />
                  <p>Price: {ad.price}</p>
                  <p>ID: {ad.id}</p>
                </Card>
              </li>
            );
          })}
        </Space>
      </ul>
    </Layout>
  );
};

export default Ads;