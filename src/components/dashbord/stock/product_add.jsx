import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Divider,
} from "antd";

const ProductAdd = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div className="container">
        <Form>
          <Divider>Add New Product</Divider>
          <Row>
            <Col span={11}>
              <Form.Item className="text-left">
                <p className="m-0">Product name</p>
                <Input placeholder="Product Name" />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item className="text-left">
                <p className="m-0">Product Code</p>
                <Input placeholder="Product Code" />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item className="text-left">
                <p className="m-0">Product Category</p>
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={11}>
              <Form.Item className="text-left">
                <p className="m-0">Product SubCategory</p>
                <TreeSelect
                  treeData={[
                    {
                      title: "Light",
                      value: "light",
                      children: [
                        {
                          title: "Bamboo",
                          value: "bamboo",
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Divider />
            <Col span={15}>
              <Form.Item label="WareHouse">
                <Select>
                  <Select.Option value="USA">USA</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={15}>
              <Form.Item className="text-left" label="Product Retail Price">
                {/* <p className="m-0">Product name</p> */}
                <Input
                  name="currency-field"
                  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                  value=""
                  data-type="currency"
                  placeholder="$1,000,000.00"
                />
              </Form.Item>
            </Col>
            <Col span={15}>
              <Form.Item className="text-left" label="Purchase Order Price">
                {/* <p className="m-0">Product name</p> */}
                <Input
                  name="currency-field"
                  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                  value=""
                  data-type="currency"
                  placeholder="$1,000,000.00"
                />
              </Form.Item>
            </Col>
            <Divider />
            <Col span={8}>
              <Form.Item className="text-left">
                <Input placeholder="Default Text Rate" />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <Form.Item className="text-left">
                <Input placeholder="Stock Units" />
              </Form.Item>
            </Col>
            <Divider />
            <Col span={11}>
              <Form.Item className="text-left" label="Measurement Unit ">
                <TreeSelect
                  treeData={[
                    {
                      title: "None",
                      value: "None",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={8}></Col>
            <Col span={6}>
              <Form.Item className="text-left" label="BarCode">
                <TreeSelect
                  treeData={[
                    {
                      title: "EAN13-Default",
                      value: "EAN13-Default",
                    },
                    {
                      title: "EAN15-ColorBangla",
                      value: "EAN13-ColorBangla",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={8}>
              <Form.Item className="text-left">
                <Input placeholder="BarCode Numeric Digit 123456789" />
              </Form.Item>
            </Col>
            <Col span={15}>
              <Form.Item name={["user", "introduction"]} label="Description">
                <Input.TextArea placeholder="Description" />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <Form.Item label="Valid(To Date)">
                <DatePicker />
              </Form.Item>
            </Col>
            <Divider />
            <Col span={8}>
              <Form.Item className="text-center">
                <Button type="primary">Add Product</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);
export default ProductAdd;
