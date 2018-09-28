import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs className="tabs">
          <NavItem className="tab-header">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Shows
            </NavLink>
          </NavItem>
          <NavItem className="tab-header">
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Music
            </NavLink>
          </NavItem>
          <NavItem className="tab-header">
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane className="tab-pane" tabId="1">
            <Row>
              <Col sm="12">
                <h4 className="tab-inner-header">Upcoming Shows</h4>
                <p>TBD</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <a href="https://laymanparadise.bandcamp.com/">
                  <h4 className="tab-inner-header">Bandcamp</h4>
                </a>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <a href="mailto:laymanyl@gmail.com">
                  <h4 className="tab-inner-header">laymanyl@gmail.com</h4>
                </a>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
