import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { trackReferralClick } from "@/services/referralService";

import {Lottie} from "lottie-react";
import loadingAnimation from "@/assets/animations/loading1.json";

const ReferralPage = () => {
  const [searchParams] = useSearchParams();

  const referralId = searchParams.get("ref");

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!referralId) return;

    const handleReferral = async () => {
      try {
        const destinationUrl = await trackReferralClick(referralId);

        window.location.replace(destinationUrl);
      } catch (error) {
        console.error("Referral error:", error);

        setError("Unable to process referral link");
      }
    };

    handleReferral();
  }, [referralId]);

  if (!referralId) {
    return <div>Referral link is invalid</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
<div className="min-vh-100 d-flex justify-content-center align-items-center">
  <Lottie
    src={loadingAnimation}
    autoplay
    loop
    style={{ width: 220, height: 220 }}
  />
</div>
  );
};

export default ReferralPage;
