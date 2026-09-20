import { useState } from "react";
import {
  Button,
  Form,
  Modal,
} from "react-bootstrap";

function CreateUserModal({textBtn}:{textBtn : string}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Button onClick={handleShow}>
        {textBtn}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter user name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter user email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
            >
              Create User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateUserModal;