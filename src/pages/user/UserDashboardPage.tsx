import { useAuth } from "@/context/AuthContext";
import { getUserById } from "@/services/getUserById";
import type { UserData } from "@/types/UserData";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Clipboard, CheckCircle } from "react-bootstrap-icons";

function UserDashboardPage() {
  const [copied, setCopied] = useState(false);
  const { user } = useAuth();

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchUser = async () => {
      const data = await getUserById(user.id);
      setUserData(data);
    };

    fetchUser();
  }, [user]);
const baseUrl = window.location.origin;
const referralLink = `${baseUrl}/referral?ref=${userData?.id}`;

  // Firebase
  const referralData = {
    totalClicks: userData?.totalClicks || 0,
    referralLink: referralLink ,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralData.referralLink);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
      <Container>
        <div className="mx-auto" style={{ maxWidth: "520px" }}>
          {/* Welcome Section */}
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-2">Welcome Back</h2>

            <p className="text-muted mb-0">Track your referral performance.</p>
          </div>

          {/* Total Clicks Card */}
          <Card className="border-0 shadow-sm mb-3">
            <Card.Body className="text-center p-4">
              <p className="text-muted mb-2">Total Clicks</p>

              <h1 className="fw-bold mb-0">{referralData.totalClicks}</h1>
            </Card.Body>
          </Card>

          {/* Referral Link Card */}
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="fw-bold text-center mb-3">Your Referral Link</h5>

              <div className="bg-light border rounded p-3 mb-3">
                <p
                  className="text-break text-center mb-0"
                  style={{ fontSize: "14px" }}
                >
                  {referralData.referralLink}
                </p>
              </div>

              <Button
                variant={copied ? "success" : "primary"}
                className="w-100 d-flex align-items-center justify-content-center gap-2"
                onClick={handleCopyLink}
              >
                {copied ? (
                  <>
                    <CheckCircle size={18} />
                    Copied
                  </>
                ) : (
                  <>
                    <Clipboard size={18} />
                    Copy Referral Link
                  </>
                )}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default UserDashboardPage;
