import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Modal } from "antd";
import successLogo from "../../assets/images/success.png";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price }: { price: number }) => {
  // const { date, startTime, endTime, facility, payableAmount, user } =
  //   bookingInfo;

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { data } = await axios.post(
      "https://sport-facilify-modify.vercel.app/create-payment-intent",
      {
        amount: price, // Amount in cents (e.g., $10.00)
      }
    );

    const { clientSecret } = data;

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

    if (stripeError) {
      setError(stripeError.message ?? "An error occurred");
    } else if (paymentIntent?.status === "succeeded") {
      setError(null);
      setIsModalOpen(true);
    }

    setLoading(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/facilities");
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement className="border p-3" />
        <button
          className="btn btn-neutral btn-block my-6"
          type="submit"
          disabled={!stripe || loading}
        >
          {loading ? "Processing..." : "Make Payment"}
        </button>

        {error && <div>{error}</div>}
      </form>

      <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={false}>
        <div className="flex justify-center items-center flex-col gap-y-3">
          <img className="size-16" src={successLogo} alt="" />
          <h2 className="text-xl font-semibold text-center">Payment Success</h2>
          <h2 className="text-2xl font-bold">
            Pay : <span>${price}.00</span>
          </h2>
          {/* <h2>{date}</h2> */}
          <img
            className="w-full"
            src="https://img.freepik.com/free-vector/credit-score-flat-composition-with-chat-bubbles-envelopes-application-screens-black-woman-with-credit-card-vector-illustration_1284-83826.jpg?t=st=1724877507~exp=1724881107~hmac=3c1648e569c83ac210a8104c73195d7876a6c8afce36d0f181fc143f93eac0b3&w=740"
            alt=""
          />
        </div>
      </Modal>
    </>
  );
};

export default CheckoutForm;
