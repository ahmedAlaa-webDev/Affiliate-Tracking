
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import {
  Clipboard,
  Facebook,
  Instagram,
  Whatsapp,
} from "react-bootstrap-icons";

const stats = [
  {
    title: "Total Clicks",
    value: "1,240",
  },
  {
    title: "Referral Links",
    value: "5",
  },
  {
    title: "Active Links",
    value: "4",
  },
  {
    title: "Avg. Clicks / Link",
    value: "248",
  },
];

const referralLinks = [
  {
    id: "link-1",
    source: "Facebook",
    clicks: 620,
    url: "https://yourapp.com/go/ahmed/fb123",
    status: "Active",
  },
  {
    id: "link-2",
    source: "WhatsApp",
    clicks: 380,
    url: "https://yourapp.com/go/ahmed/wa456",
    status: "Active",
  },
  {
    id: "link-3",
    source: "Instagram",
    clicks: 240,
    url: "https://yourapp.com/go/ahmed/ig789",
    status: "Active",
  },
];

function getSourceIcon(source: string) {
  switch (source) {
    case "Facebook":
      return <Facebook size={24} />;

    case "WhatsApp":
      return <Whatsapp size={24} />;

    case "Instagram":
      return <Instagram size={24} />;

    default:
      return null;
  }
}

function UserDashboardPage() {
  return (
    <Container fluid className="p-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">
          Welcome back, Ahmed
        </h2>

        <p className="text-muted mb-0">
          Track your referral links and performance.
        </p>
      </div>

      {/* Statistics */}
      <Row className="g-4 mb-4">
        {stats.map((stat) => (
          <Col
            key={stat.title}
            xs={12}
            sm={6}
            xl={3}
          >
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <p className="text-muted mb-2">
                  {stat.title}
                </p>

                <h3 className="fw-bold mb-0">
                  {stat.value}
                </h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Referral Links */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4 className="fw-bold mb-1">
            My Referral Links
          </h4>

          <p className="text-muted mb-0">
            Monitor your referral links and clicks.
          </p>
        </div>

        <Button>
          + Create Link
        </Button>
      </div>

      <Row className="g-4">
        {referralLinks.map((link) => (
          <Col
            key={link.id}
            xs={12}
            md={6}
            xl={4}
          >
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                {/* Source */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center gap-2">
                    {getSourceIcon(link.source)}

                    <h5 className="fw-bold mb-0">
                      {link.source}
                    </h5>
                  </div>

                  <Badge bg="success">
                    {link.status}
                  </Badge>
                </div>

                {/* Clicks */}
                <div className="mb-4">
                  <small className="text-muted">
                    Total Clicks
                  </small>

                  <h2 className="fw-bold mb-0">
                    {link.clicks.toLocaleString()}
                  </h2>
                </div>

                {/* Referral URL */}
                <div className="mb-4">
                  <small className="text-muted d-block mb-2">
                    Referral Link
                  </small>

                  <div className="bg-light rounded p-2 d-flex align-items-center gap-2">
                    <span
                      className="text-truncate flex-grow-1"
                      style={{ fontSize: "14px" }}
                    >
                      {link.url}
                    </span>

                    <Button
                      variant="outline-secondary"
                      size="sm"
                      title="Copy link"
                    >
                      <Clipboard size={16} />
                    </Button>
                  </div>
                </div>

                {/* Action */}
                <Button
                  variant="outline-primary"
                  className="w-100"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserDashboardPage;

