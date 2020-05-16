/*!
=========================================================
* Banco de Talentos - Administração
=========================================================
*/
import React, { Fragment } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import ModalForgotPassword from "./ModalForgotPassword";

interface PropsLogin {}
interface StateLogin {
  openModalForgotPassword: boolean;
}

class Login extends React.Component<PropsLogin, StateLogin> {
  constructor(props: PropsLogin) {
    super(props);

    this.state = {
      openModalForgotPassword: false,
    };
  }

  toggleModalForgot = (toggle: boolean) => {
    this.setState({
      openModalForgotPassword: toggle,
    });
  };

  render() {
    return (
      <Fragment>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Entre com suas credenciais</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Senha"
                      type="password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Ficar conectado</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Entrar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#forgot-password"
                onClick={() => this.toggleModalForgot(!this.state.openModalForgotPassword)}
              >
                <small>Esqueci minha senha</small>
              </a>
            </Col>
          </Row>
        </Col>

        <ModalForgotPassword openModalForgotPassword={this.state.openModalForgotPassword} toggleModalForgot={this.toggleModalForgot} />
      </Fragment>
    );
  }
}

export default Login;
