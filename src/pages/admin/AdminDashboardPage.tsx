import { getUsers } from "@/services/getUsers";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { type TUser } from "@/types/userType";
import CreateUserModal from "@/components/CreateUserModal";


function AdminDashboardPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const data = await getUsers();

        setUsers(data as TUser[]);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

const userNum = users.length
const userclicks = users.reduce((accumulator, currentValue,) => {
  return accumulator + currentValue.totalClicks;
}, 0);
  return (
    <Container fluid className="p-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Dashboard</h2>
      </div>

      {/* Statistics */}
      <Row className="g-4 mb-4">

            <Col md={{span : 3,offset : 3}}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <p className="text-muted mb-2">All Users</p>

                  <h3 className="fw-bold mb-2">{userNum}</h3>

                  <small className="text-muted">Active referral users</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{span : 3}} >
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <p className="text-muted mb-2">All time clicks</p>

                  <h3 className="fw-bold mb-2">{userclicks}</h3>

                  <small className="text-muted">Active referral users</small>
                </Card.Body>
              </Card>
            </Col>
        </Row>

      <Row className="g-4">
        {/* Recent Users */}
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="fw-bold mb-1">Recent Users</h5>
                </div>
                <CreateUserModal textBtn="+ Add User" />
              </div>

              <Table responsive hover className="align-middle mb-0">
                <thead>
                  <tr>
                    <th>User</th>
                    <th></th>
                    <th>Clicks</th>
                  </tr>
                </thead>

                <tbody>
                  {users
                    .map((user) => (
                      <tr
                        onClick={() => {
                          navigate(`/in/admin/users?id=${user.id}`);
                        }}
                        key={user.id}
                      >
                        <td>
                          <div className="fw-semibold">{user.name}</div>

                          <small className="text-muted">{user.email}</small>
                        </td>

                        <td></td>

                        <td className="fw-semibold">{user.totalClicks}</td>
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
