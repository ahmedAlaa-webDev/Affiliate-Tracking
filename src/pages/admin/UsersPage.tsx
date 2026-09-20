import CreateUserModal from "@/components/CreateUserModal";
import { Card, Col, Container, Row } from "react-bootstrap";

const users = [
  {
    id: "user-1",
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    totalClicks: 1240,
  },
  {
    id: "user-2",
    name: "Mohamed Hassan",
    email: "mohamed@example.com",

    totalClicks: 890,
  },
  {
    id: "user-3",
    name: "Omar Khaled",
    email: "omar@example.com",
    totalClicks: 645,
  },
  {
    id: "user-4",
    name: "Ali Mahmoud",
    email: "ali@example.com",
    totalClicks: 430,
  },
];

function UsersPage() {
  return (
    <Container fluid className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Users</h2>

          <p className="text-muted mb-0">Manage and monitor referral users</p>
        </div>

        <CreateUserModal textBtn ="+ Add User" />
      </div>

      {/* Users */}
      <Row className="g-4">
        {users.map((user) => (
          <Col key={user.id} xs={12} md={6} xl={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                {/* User Header */}
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h5 className="fw-bold mb-1">{user.name}</h5>

                    <small className="text-muted">{user.email}</small>
                  </div>
                </div>

                {/* Main Stats */}
                <Row className="g-3 mb-4">
                  <Col>
                    <div className="bg-light rounded p-3 w-100">
                      <small className="text-muted d-block">Total Clicks</small>

                      <h4 className="fw-bold mb-0 mt-1">
                        {user.totalClicks.toLocaleString()}
                      </h4>
                    </div>
                  </Col>
                    <CreateUserModal textBtn={"View Details"} />
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UsersPage;
