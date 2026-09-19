
import CreateUserModal from "@/components/CreateUserModal";
import {
  Badge,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const users = [
  {
    id: "user-1",
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    status: "Active",
    totalLinks: 5,
    totalClicks: 1240,
    sources: [
      { name: "Facebook", clicks: 620 },
      { name: "WhatsApp", clicks: 380 },
      { name: "Instagram", clicks: 240 },
    ],
  },
  {
    id: "user-2",
    name: "Mohamed Hassan",
    email: "mohamed@example.com",
    status: "Active",
    totalLinks: 3,
    totalClicks: 890,
    sources: [
      { name: "Facebook", clicks: 450 },
      { name: "WhatsApp", clicks: 290 },
      { name: "Instagram", clicks: 150 },
    ],
  },
  {
    id: "user-3",
    name: "Omar Khaled",
    email: "omar@example.com",
    status: "Inactive",
    totalLinks: 4,
    totalClicks: 645,
    sources: [
      { name: "Facebook", clicks: 300 },
      { name: "WhatsApp", clicks: 210 },
      { name: "Instagram", clicks: 135 },
    ],
  },
  {
    id: "user-4",
    name: "Ali Mahmoud",
    email: "ali@example.com",
    status: "Active",
    totalLinks: 2,
    totalClicks: 430,
    sources: [
      { name: "Facebook", clicks: 220 },
      { name: "WhatsApp", clicks: 130 },
      { name: "Instagram", clicks: 80 },
    ],
  },
];

function UsersPage() {
  return (
    <Container fluid className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Users</h2>

          <p className="text-muted mb-0">
            Manage and monitor referral users
          </p>
        </div>

        <CreateUserModal />
      </div>

      {/* Users */}
      <Row className="g-4">
        {users.map((user) => (
          <Col
            key={user.id}
            xs={12}
            md={6}
            xl={4}
          >
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                {/* User Header */}
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <h5 className="fw-bold mb-1">
                      {user.name}
                    </h5>

                    <small className="text-muted">
                      {user.email}
                    </small>
                  </div>

                  <Badge
                    bg={
                      user.status === "Active"
                        ? "success"
                        : "secondary"
                    }
                  >
                    {user.status}
                  </Badge>
                </div>

                {/* Main Stats */}
                <Row className="g-3 mb-4">
                  <Col xs={6}>
                    <div className="bg-light rounded p-3">
                      <small className="text-muted d-block">
                        Total Links
                      </small>

                      <h4 className="fw-bold mb-0 mt-1">
                        {user.totalLinks}
                      </h4>
                    </div>
                  </Col>

                  <Col xs={6}>
                    <div className="bg-light rounded p-3">
                      <small className="text-muted d-block">
                        Total Clicks
                      </small>

                      <h4 className="fw-bold mb-0 mt-1">
                        {user.totalClicks.toLocaleString()}
                      </h4>
                    </div>
                  </Col>
                </Row>

                {/* Sources */}
                <div className="mb-4">
                  <h6 className="fw-semibold mb-3">
                    Clicks by Source
                  </h6>

                  {user.sources.map((source) => (
                    <div
                      key={source.name}
                      className="d-flex justify-content-between mb-2"
                    >
                      <span className="text-muted">
                        {source.name}
                      </span>

                      <span className="fw-semibold">
                        {source.clicks.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <Link
                  to={`/admin/users/${user.id}`}
                  className="btn btn-outline-primary w-100"
                >
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UsersPage;

