import { getUserById } from "@/services/getUserById";
import { updateUser } from "@/services/updateUser";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
function UserDetailsPage() {
  const [referral, setReferral] = useState<string | undefined>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        return "id undefind";
      }
      const data = await getUserById(id);
      setReferral(data?.referral);
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!id || !referral) {
      return "id undefind";
    }
    await updateUser(id, { referral });

    navigate("/in/admin", { replace: true });
  };
  return (
    <Row>
      <Col className="p-3" md={{ span: 6, offset: 3 }}>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4">
            <h5 className="fw-bold mb-1">Create Referral Link</h5>

            <p className="text-muted mb-4">
              Create a tracking link for this user.
            </p>

            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Group className="mb-4">
                <Form.Label>Destination URL</Form.Label>

                <Form.Control
                  type="url"
                  value={referral}
                  onChange={(e) => {
                    setReferral(e.target.value);
                  }}
                />

                <Form.Text className="text-muted">
                  Enter the page where visitors should be redirected.
                </Form.Text>
              </Form.Group>

              <Button type="submit">Create Referral Link</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default UserDetailsPage;
