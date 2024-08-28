import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Modal } from "antd";
import successLogo from "../../assets/images/success.png";

const CheckoutForm = ({ price }: { price: number }) => {
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
      "http://localhost:3000/create-payment-intent",
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

      <Modal title="" open={isModalOpen} footer={false}>
        <div className="flex justify-center items-center flex-col gap-y-3">
          <img className="size-16" src={successLogo} alt="" />
          <h2 className="text-xl font-semibold text-center">Payment Success</h2>
          <h2 className="text-2xl font-bold">
            Pay : <span>${price}.00</span>
          </h2>
        </div>
      </Modal>
    </>
  );
};

export default CheckoutForm;
