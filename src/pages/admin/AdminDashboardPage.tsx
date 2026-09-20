
import {
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Total Users",
    value: "24",
    description: "Active referral users",
  },
  {
    title: "Total Links",
    value: "68",
    description: "All referral links",
  },
  {
    title: "Total Clicks",
    value: "12,540",
    description: "All time clicks",
  },
  {
    title: "Active Links",
    value: "61",
    description: "Currently active",
  },
];

const recentUsers = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    clicks: 1240,
    links: 5,
  },
  {
    id: 2,
    name: "Mohamed Hassan",
    email: "mohamed@example.com",
    clicks: 890,
    links: 3,
  },
  {
    id: 3,
    name: "Omar Khaled",
    email: "omar@example.com",
    clicks: 645,
    links: 4,
  },
  {
    id: 4,
    name: "Ali Mahmoud",
    email: "ali@example.com",
    clicks: 430,
    links: 2,
  },
];



function AdminDashboardPage() {

  const navigate = useNavigate();
  return (
    <Container fluid className="p-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Dashboard</h2>
        <p className="text-muted mb-0">
          Overview of your referral system
        </p>
      </div>

      {/* Statistics */}
      <Row className="g-4 mb-4">
        {stats.map((stat) => (
          <Col key={stat.title} xs={12} sm={6} xl={3}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <p className="text-muted mb-2">{stat.title}</p>

                <h3 className="fw-bold mb-2">{stat.value}</h3>

                <small className="text-muted">
                  {stat.description}
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        {/* Recent Users */}
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="fw-bold mb-1">Recent Users</h5>
                  <p className="text-muted mb-0">
                    Latest referral users
                  </p>
                </div>
              </div>

              <Table responsive hover className="align-middle mb-0">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Links</th>
                    <th>Clicks</th>
                  </tr>
                </thead>

                <tbody>
                  {recentUsers.map((user) => (
                    <tr onClick={()=>{navigate("/in/admin/users/Id")}} key={user.id}>
                      <td>
                        <div className="fw-semibold">
                          {user.name}
                        </div>

                        <small className="text-muted">
                          {user.email}
                        </small>
                      </td>

                      <td>{user.links}</td>

                      <td className="fw-semibold">
                        {user.clicks.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Container>
  );
}

export default AdminDashboardPage;

