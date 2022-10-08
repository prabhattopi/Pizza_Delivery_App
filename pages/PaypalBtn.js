import { useEffect, useRef } from "react";

const PaypalBtn = () => {
  const paypala = useRef();
  useEffect(() => {
     paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            intent:"CAPTURE",
            purchase_units: [
              {
                amount: {
                
                  value: "2.00",
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (detials) {
            alert("Transaction completed by " + detials.payer.name.given_name);
          })
          
        },
        onError:(err)=>{
          console.log(err)
        }
      })
      .render(paypala.current);
  }, []);

  return (
  <div ref={paypala}></div>
  )
};
export default PaypalBtn;
