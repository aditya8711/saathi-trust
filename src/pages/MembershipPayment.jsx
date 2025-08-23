import React from "react";

const MembershipPayment = () => {
  const loadRazorpay = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_z8kMV1RXOaidk9", // 🔁 Replace with your Razorpay Key ID
      currency: "INR",
      amount: 5000, // ₹500 in paise
      name: "Saathi Trust",
      description: "Membership Payment",
      image: "/logo.jpeg",
      handler: function (response) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
        // You can send this ID to your backend here
      },
      prefill: {
        name: "Your Name",
        email: "example@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#006699",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div style={styles.container}>
      <h2>Become a Member</h2>
      <p>Pay ₹50 to join Saathi Trust and support our mission.</p>
      <button onClick={handlePayment} style={styles.button}>
        Pay Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f0f4f8",
    minHeight: "80vh",
  },
  button: {
    backgroundColor: "#00bcd4",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default MembershipPayment;
