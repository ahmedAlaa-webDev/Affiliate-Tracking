
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function UserDetailsPage() {
  return (
   <Row>
  <Col className="p-3" md={{ span: 6, offset: 3 }}>
     <Card className="border-0 shadow-sm">
      <Card.Body className="p-4">
        <h5 className="fw-bold mb-1">
          Create Referral Link
        </h5>

        <p className="text-muted mb-4">
          Create a tracking link for this user.
        </p>

        <Form>
          {/* Source */}
          <Form.Group className="mb-3">
            <Form.Label>Source</Form.Label>

            <Form.Select>
              <option value="">Select platform</option>
              <option value="facebook">Facebook</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="instagram">Instagram</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          {/* Destination URL */}
          <Form.Group className="mb-4">
            <Form.Label>Destination URL</Form.Label>

            <Form.Control
              type="url"
              placeholder="https://example.com/product"
            />

            <Form.Text className="text-muted">
              Enter the page where visitors should be redirected.
            </Form.Text>
          </Form.Group>

          <Button type="submit">
            Create Referral Link
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </Col>
   </Row>
  );
}

export default UserDetailsPage;

