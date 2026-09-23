import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { updateUser } from "@/services/updateUser";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { UserData } from "@/types/UserData";

function ProfilePage() {
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirPmassword, setConfirmPassword] = useState("");

  const newUser = user as UserData;

  const handleUpdateEmailAndName = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if(user?.email == email && user?.name == name)
    {

      toast.error("No change");
      return
    }
    await updateUser(user?.id, { email: email, name: name });
    setUser({ ...newUser, email: email as string, name: name as string });
    toast.success("Email And Name Updated");
  };
  const handleUpdatePassword = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (currentPassword == user?.password) {
      if (newPassword === confirPmassword) {
        await updateUser(user?.id, { password: newPassword });
        setConfirmPassword("");
        setCurrentPassword("");
        setNewPassword("");
        toast.success("Password Updated");
      } else {
        toast.error("New Password not equals Confir Pmassword");
      }
    } else {
      toast.error("current Password Incorrect");
    }
  };
  return (
    <Container fluid className="p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Profile</h2>
        <p className="text-muted mb-0">Manage your account information</p>
      </div>

      <Row className="g-4">
        {/* Personal Information */}
        <Col xs={12} lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="fw-bold mb-4">Personal Information</h5>

              <Form onSubmit={handleUpdateEmailAndName}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" className="mt-4" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Account */}
        <Col xs={12} lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="fw-bold mb-3">Account</h5>

              <div className="mb-3">
                <small className="text-muted">Role</small>

                <div className="fw-semibold">{user?.role}</div>
              </div>

              <div>
                <small className="text-muted">Account Status</small>

                <div className="text-success fw-semibold">Active</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Change Password */}
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="fw-bold mb-4">Change Password</h5>

              <Form onSubmit={handleUpdatePassword}>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Current Password</Form.Label>

                      <Form.Control
                        type="password"
                        value={currentPassword}
                        onChange={(e) => {
                          setCurrentPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>New Password</Form.Label>

                      <Form.Control
                        type="password"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>

                      <Form.Control
                        type="password"
                        value={confirPmassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="dark" className="mt-4" type="submit">
                  Update Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
