import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { reset } from "../redux/CartSlice";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();
  const [form,setForm]=useState({
    customer:"",
    address:"",
    total:0,
    method:0,
  })

  const createOrder = async (data) => {
    setForm({
      ...form,
      customer:data.customer,
      address:data.address,
      total:data.total,
      method:data.method,
    })
    try {
      const options={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      }
      const response=await fetch("http://localhost:3000/api/orders",options)
       const json=await response.json()
       console.log(json)
    
  
      dispatch(reset());
    } catch (err) {
      console.log(err);
    }
    setForm({
      customer:"",
      address:"",
      total:0,
      method:0,
    })
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(async function (details) {
              const shipping = details.purchase_units[0].shipping;
          console.log(shipping)
         createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product?.extras.map((e) => (
                      <span key={e._id}>{e.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$
            {cart.total.toFixed(2)}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>${5}.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$
            {cart.total ? (cart.total - 5).toFixed(2) : "0.00"}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton}>Cash On Delivery</button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "Af6pilaudAI-GufJLQWes-4KjdZrdNCa2lnHwvPnI-On-kks1rrrzWEg2upZ3rT7iUKvZP6BOi0Nj-sW",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
