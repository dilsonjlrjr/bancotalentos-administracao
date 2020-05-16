import React, { Fragment } from "react";
import {
  Modal,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

interface PropsModalForgotPassword {
  openModalForgotPassword: boolean;
  toggleModalForgot(toggle: boolean): void;
}
interface StateModalForgotPassword {}

export default class ModalForgotPassword extends React.Component<
  PropsModalForgotPassword,
  StateModalForgotPassword
> {
  render() {
    return (
      <Fragment>
        {/* Modal Forgot Password  */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.props.openModalForgotPassword}
          toggle={() =>
            this.props.toggleModalForgot(!this.props.openModalForgotPassword)
          }
        >
          <div className="modal-header">
            <h5 className="modal-title" id="modalForgotPassword">
              Esqueci minha senha!
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() =>
                this.props.toggleModalForgot(
                  !this.props.openModalForgotPassword
                )
              }
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
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
            </Form>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() =>
                this.props.toggleModalForgot(
                  !this.props.openModalForgotPassword
                )
              }
            >
              Fechar
            </Button>
            <Button color="primary" type="button">
              Enviar E-mail
            </Button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}
