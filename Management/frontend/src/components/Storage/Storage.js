import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Storage.scss";
import ModalCreateStorage from "./ModalCreateStorage";
import ModalUpdateStorage from "./ModalUpdateStorage";

function Storage() {
  const [showModalCreateStorage, setShowModalCreateStorage] = useState(false);
  const [showModalUpdateStorage, setShowModalUpdateStorage] = useState(false);

  return (
    <div className="lot">
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Thuốc">
          <Form>
            <Form.Group
              className="mb-3 fcontainer"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="ftext">Tìm Kiếm Lô</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên lô"
                className="fip"
              />
              <Button
                variant="success"
                onClick={() => setShowModalCreateStorage(true)}
              >
                THÊM MỚI
              </Button>
            </Form.Group>
          </Form>
          <Table striped bordered hover size="md">
            <thead>
              <tr>
                <th>STT</th>
                <th>Số Lô</th>
                <th>Tên Hàng Hóa</th>
                <th>Kệ</th>
                <th>Loại</th>
                <th>SL</th>
                <th>Mã QR</th>
                <th>NSX</th>
                <th>HSD</th>
                <th>Ngày Nhập</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lô 1</td>
                <td>Amino Plus</td>
                <td>Số 1</td>
                <td>Hộp</td>
                <td>7</td>
                <td></td>
                <td>21-07-2020</td>
                <td>21-07-2022</td>
                <td>21-08-2020</td>
                <td>
                  <Button
                    variant="primary"
                    className="btn"
                    onClick={() => setShowModalUpdateStorage(true)}
                  >
                    Sửa
                  </Button>
                  <Button variant="danger">Xóa</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="second" title="Vật Tư">
          Vật Tư
        </Tab>
      </Tabs>
      {
        <ModalCreateStorage
          show={showModalCreateStorage}
          setShow={setShowModalCreateStorage}
        />
      }
      {
        <ModalUpdateStorage
          show={showModalUpdateStorage}
          setShow={setShowModalUpdateStorage}
        />
      }
    </div>
  );
}

export default Storage;
