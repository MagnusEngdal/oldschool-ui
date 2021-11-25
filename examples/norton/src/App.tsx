import {
  Window,
  Row,
  Col,
  Explorer,
  Modal,
  Option,
  OptionCol,
} from "oldschool-ui";
import data, { DataType } from "./data";

function App() {
  const files: DataType[] = [
    { name: "..", size: "SUB--DIR", date: "00-00-00" },
    ...data,
  ];

  return (
    <>
      <Modal>Hej</Modal>
      <Row>
        <Col span={12}>
          <Window title="Winterspire">
            <Explorer>
              {files.map((item) => (
                <Option selected={item.selected}>
                  <OptionCol>{item.name}</OptionCol>
                  <OptionCol>{item.size}</OptionCol>
                  <OptionCol>{item.date}</OptionCol>
                </Option>
              ))}
            </Explorer>
          </Window>
        </Col>
        <Col span={12}>
          <Window title="Winterspire">
            <Explorer>
              {files.map((item) => (
                <Option>
                  <OptionCol>{item.name}</OptionCol>
                  <OptionCol>{item.size}</OptionCol>
                  <OptionCol>{item.date}</OptionCol>
                </Option>
              ))}
            </Explorer>
          </Window>
        </Col>
      </Row>
    </>
  );
}

export default App;
