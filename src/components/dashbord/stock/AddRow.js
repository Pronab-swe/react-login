import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Divider } from "antd";

const AddRow = () => {
  const [rows, setRows] = useState([null]);

  const incrementRow = () => {
    setRows([...rows, rows + 1]);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <p className="text-left">PRODUCTS VARIATIONS:</p>
        </Col>
        <Button className="text-left" type="primary" onClick={incrementRow}>
          Add Row
        </Button>

        <Divider />

        {rows &&
          rows.map((item, i) => (
            <Col span={24}>
              <Form.Item className="text-left" key={i}>
                <Col span={8}>
                  <Input placeholder="Product Name" />
                </Col>
                <Col span={8}>
                  <Input placeholder="Stock Units" />
                </Col>
                <Col span={8}>
                  <Input placeholder="Product Quantity" />
                </Col>
              </Form.Item>
            </Col>
          ))}

        <Divider />
      </Row>
    </div>
  );
};

export default AddRow;
