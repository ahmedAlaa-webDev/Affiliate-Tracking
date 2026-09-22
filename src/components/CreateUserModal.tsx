import { addUser } from "@/services/addUser";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function CreateUserModal({ textBtn }: { textBtn: string }) {
  
  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
    email: "",
    role: "user",
    totalClicks : 0,
    referral : "https://landing-ideas.web.app/",
  });
  const { name, password, email ,referral} = newUser;
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
 
  try {
    const user = await addUser({...newUser});

    console.log("User UID:", user.id);
        handleClose();
      window.location.reload();


  } catch (error) {
    setErr("Registration error" + error);

  }


  };

  return (
    <>
      <Button onClick={handleShow}>{textBtn}</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>

              <Form.Control
                type="text"
                value={name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                placeholder="Enter user name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>

              <Form.Control
                value={email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                type="email"
                placeholder="Enter user email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Referral URL:</Form.Label>

              <Form.Control
                value={referral}
                onChange={(e) =>
                  setNewUser({ ...newUser, referral: e.target.value })
                }
                type="text"
                placeholder="Enter Referral URL"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>

              <Form.Control
                value={password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"
              />
              {err}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="primary" type="submit">
              Create User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateUserModal;
