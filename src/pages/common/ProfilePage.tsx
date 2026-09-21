import { useAuth } from "@/context/AuthContext";
import {  Card, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getUserById } from "@/services/getUserById";
import type { UserData } from "@/types/UserData";


function ProfilePage() {
  const { user } = useAuth();

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchUser = async () => {
      const data = await getUserById(user.uid);
      setUserData(data);
    };

    fetchUser();
  }, [user]);

  return (
    <Container fluid className="p-4">
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

              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={userData?.name || ""}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={userData?.email || ""}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                
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

                <div className="fw-semibold">{userData?.role}</div>
              </div>

              <div>
                <small className="text-muted">Account Status</small>

                <div className="text-success fw-semibold">Active</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Change Password */}
        {/* <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="fw-bold mb-4">
                Change Password
              </h5>

              <Form>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>
                        Current Password
                      </Form.Label>

                      <Form.Control type="password" />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>
                        New Password
                      </Form.Label>

                      <Form.Control type="password" />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>
                        Confirm Password
                      </Form.Label>

                      <Form.Control type="password" />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  variant="dark"
                  className="mt-4"
                  type="submit"
                >
                  Update Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
}

export default ProfilePage;
