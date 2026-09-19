
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

const analytics = [
  {
    source: "Facebook",
    links: 18,
    clicks: 5240,
    percentage: "42%",
  },
  {
    source: "WhatsApp",
    links: 15,
    clicks: 3810,
    percentage: "30%",
  },
  {
    source: "Instagram",
    links: 12,
    clicks: 2140,
    percentage: "17%",
  },
  {
    source: "Other",
    links: 8,
    clicks: 1350,
    percentage: "11%",
  },
];

const dailyClicks = [
  { date: "Sep 13", clicks: 820 },
  { date: "Sep 14", clicks: 1050 },
  { date: "Sep 15", clicks: 1340 },
  { date: "Sep 16", clicks: 980 },
  { date: "Sep 17", clicks: 1560 },
  { date: "Sep 18", clicks: 1920 },
  { date: "Sep 19", clicks: 2140 },
];

function AnalyticsPage() {
  return (
    <Container fluid className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Analytics</h2>

          <p className="text-muted mb-0">
            Track your referral performance
          </p>
        </div>

        <Form.Select style={{ width: "180px" }}>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>All time</option>
        </Form.Select>
      </div>

      {/* Summary */}
      <Row className="g-4 mb-4">
        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted mb-2">
                Total Clicks
              </p>

              <h3 className="fw-bold mb-0">
                12,540
              </h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted mb-2">
                Active Links
              </p>

              <h3 className="fw-bold mb-0">
                61
              </h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted mb-2">
                Active Users
              </p>

              <h3 className="fw-bold mb-0">
                24
              </h3>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted mb-2">
                Avg. Clicks / Link
              </p>

              <h3 className="fw-bold mb-0">
                205
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Daily Clicks */}
        <Col xs={12} lg={7}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold mb-1">
                Daily Clicks
              </h5>

              <p className="text-muted mb-4">
                Click activity over the selected period
              </p>

              {dailyClicks.map((item) => (
                <div
                  key={item.date}
                  className="d-flex align-items-center mb-3"
                >
                  <div style={{ width: "70px" }}>
                    <small>{item.date}</small>
                  </div>

                  <div
                    className="bg-light rounded flex-grow-1"
                    style={{ height: "24px" }}
                  >
                    <div
                      className="bg-primary rounded h-100"
                      style={{
                        width: `${Math.min(
                          (item.clicks / 2200) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div
                    className="text-end fw-semibold"
                    style={{ width: "70px" }}
                  >
                    {item.clicks}
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Sources */}
        <Col xs={12} lg={5}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold mb-1">
                Clicks by Source
              </h5>

              <p className="text-muted mb-4">
                Performance by platform
              </p>

              <Table responsive className="align-middle">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>Links</th>
                    <th>Clicks</th>
                    <th>%</th>
                  </tr>
                </thead>

                <tbody>
                  {analytics.map((item) => (
                    <tr key={item.source}>
                      <td className="fw-semibold">
                        {item.source}
                      </td>

                      <td>{item.links}</td>

                      <td>
                        {item.clicks.toLocaleString()}
                      </td>

                      <td>{item.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Top Links */}
        <Col xs={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h5 className="fw-bold mb-3">
                Top Referral Links
              </h5>

              <Table responsive hover className="align-middle mb-0">
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>User</th>
                    <th>Clicks</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Facebook</td>
                    <td>Ahmed Ali</td>
                    <td>1,240</td>
                    <td>
                      <span className="text-success">
                        Active
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>WhatsApp</td>
                    <td>Mohamed Hassan</td>
                    <td>980</td>
                    <td>
                      <span className="text-success">
                        Active
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Instagram</td>
                    <td>Omar Khaled</td>
                    <td>760</td>
                    <td>
                      <span className="text-success">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AnalyticsPage;

