import React, { useState } from "react";
import ReactDOM from "react-dom";
import DataTable from "./AddRow";
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
  Upload,
} from "antd";
//import ImgCrop from "antd-img-crop";

const ProductAdd = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  function addRow(tableID) {
    alert('ttt');
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var colCount = table.rows[0].cells.length;
    for (var i = 0; i < colCount; i++) {
        var newcell = row.insertCell(i);
        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch(newcell.childNodes[0].type) {
            case "text":
                newcell.childNodes[0].value = "";
                break;
            case "checkbox":
                newcell.childNodes[0].checked = false;
                break;
            case "select-one":
                newcell.childNodes[0].selectedIndex = 0;
                break;
        }
    }
  }

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
                  type="number"
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
                  type="number"
                  data-type="currency"
                  placeholder="$1,000,000.00"
                />
              </Form.Item>
            </Col>
            <Divider />
            <Col span={8}>
              <Form.Item className="text-left">
                <Input type="number" placeholder="Default Text Rate" />
              </Form.Item>
            </Col>
            <Col span={2}></Col>
            <Col span={8}>
              <Form.Item className="text-left">
                <Input type="number" placeholder="Stock Units" />
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
            <Col span={5}></Col>
            <Col span={7.5}>
              <Form.Item label="Valid(To Date)">
                <DatePicker />
              </Form.Item>
            </Col>
            <Divider />
            <Col span={10} >
            <p className="text-left">Upload Your Product Image:</p>
            </Col>
            <Col span={10} ></Col>
            <Col span={10}>
              <Upload className="text-left"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                
                {fileList.length < 5 && "+ Upload"}
              </Upload>
              </Col>
              <Col span={8}></Col>
              <Divider/>
            <Col span={8}>
              <Form.Item className="text-left">
                <Button type="primary">Add Product</Button>
              </Form.Item>
            </Col>
                  <Divider/>

          </Row>
        </Form>
      
      <DataTable />

      <br/>
      <br/>
      <br/>
      
      
      </div>
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);
export default ProductAdd;
