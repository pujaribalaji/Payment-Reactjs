import React, { useState } from "react";
import img1 from "../asserts/img1.svg";
import img2 from "../asserts/img2.svg";
import img3 from "../asserts/img3.svg";
import img4 from "../asserts/img4.svg";
import img5 from "../asserts/img5.svg";
import i1 from "../asserts/1.svg";
import i2 from "../asserts/2.svg";
import i4 from "../asserts/4.svg";
import i5 from "../asserts/footer.svg";

import "./page1.css";

const Page1 = () => {
  const [isChecked, setChecked] = useState(false);

  const calculateTotalCost = (costPerMonth, months, gstRate) => {
    const totalCostBeforeGST = costPerMonth * months;
    const gstAmount = (gstRate / 100) * totalCostBeforeGST;
    const totalCostIncludingGST = totalCostBeforeGST + gstAmount;
    return totalCostIncludingGST;
  };

  let costPerMonth, gstRate, months;

  if (isChecked === 1) {
    costPerMonth = 15;
    gstRate = 18;
    months = 12;
  } else if (isChecked === 2) {
    costPerMonth = 25;
    gstRate = 18;
    months = 6;
  } else if (isChecked === 3) {
    costPerMonth = 33;
    gstRate = 18;
    months = 3;
  }

  const totalCost = calculateTotalCost(costPerMonth, months, gstRate);

  const handleCircleClick = (boxId) => {
    setChecked((prevSelected) => (prevSelected === boxId ? null : boxId));
  };

  return (
    <>
      <div className="main-container">
        <div className="container0">
          <div className="container1">
            <div className="p1">Access curated courses worth</div>
            <div className="p2">
              ₹ 18,500<span className="p3">at just</span>
              <span className="p4">₹ 99</span>
              <span className="p5">per year!</span>
            </div>
            <div className="di1">
              <img className="im" src={img1} alt="img1"></img>
              <div className="p6">
                <span className="p7">100+ </span>Job relevant courses{" "}
              </div>
            </div>
            <div className="di2">
              <img className="im1" src={img2} alt="Img2"></img>
              <div className="p8">
                <span className="p9">20,000+</span> Hours of content
              </div>
            </div>
            <div className="di3">
              <img className="im2" src={img3} alt="Img3"></img>
              <div className="p10">
                <span className="p11">Exclus ive</span> webinar access
              </div>
            </div>
            <div className="di4">
              <img className="im3" src={img4} alt="Img4"></img>
              <div className="p12">
                Scholarship worth <span className="p13">₹94,500</span>
              </div>
            </div>
            <div className="di5">
              <img className="im4" src={img5} alt="Img4"></img>
              <div className="p14">
                <span className="p15"> Ad Free</span> learning experience
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="b1">
              <img src={i1} alt="1"></img>
              <img src={i2} alt="2" />
            </div>
            <div className="b2">
              <p className="b3">Sign Up</p>
              <p className="b4">Subscribe</p>
            </div>
            <div className="s1">Select your subcription plan</div>
            <div className="b6">
              <div className="bo">Offer expired</div>
              <div className="circle">
                <div className="circle1"></div>
              </div>
              <div className="b8">12 Months Subscription</div>
              <div className="b9">Total</div>
              <div className="b10">₹99</div>
              <div className="b11">₹8</div>
              <div className="b12">/mo</div>
            </div>
            <div className={`payment-box ${isChecked === 1 ? "green" : ""}`}>
              <div
                className={`circle ${isChecked === 1 ? "checked" : ""}`}
                onClick={() => handleCircleClick(1)}
              >
                {isChecked === 1 && <span>&#10003;</span>}
              </div>
              <div className={`bo1 ${isChecked === 1 ? "Selected" : ""}`}>
                Recommended
              </div>
              <div className="b13">12 Months Subscription</div>
              <div className="b14">Total</div>
              <div className="b15">₹179</div>
              <div className="b16">₹15</div>
              <div className="b17">/mo</div>
            </div>
            <div className={`payment-box ${isChecked === 2 ? "green" : ""}`}>
              <div
                className={`circle ${isChecked === 2 ? "checked" : ""}`}
                onClick={() => handleCircleClick(2)}
              >
                {isChecked === 2 && <span>&#10003;</span>}
              </div>
              <div className="b13">6 Months Subscription </div>
              <div className="b14">Total</div>
              <div className="b15">₹149</div>
              <div className="b16">₹25</div>
              <div className="b17">/mo</div>
            </div>

            <div className={`payment-box ${isChecked === 3 ? "green" : ""}`}>
              <div
                className={`circle ${isChecked === 3 ? "checked" : ""}`}
                onClick={() => handleCircleClick(3)}
              >
                {isChecked === 3 && <span>&#10003;</span>}
              </div>
              <div className="b13">3 Months Subscription</div>
              <div className="b14">Total</div>
              <div className="b15">₹99</div>
              <div className="b16">₹33</div>
              <div className="b17">/mo</div>
            </div>

            <div>
              <hr className="hr"></hr>
            </div>
            <div className="boo1">
              <p className="b18">Subscription Fee</p>
              <p className="b19">₹18,500</p>
            </div>
            <div className="boo2">
              <div className="b20">Limited time offer</div>
              <div>
                <img className="b21" src={i4} alt="5"></img>
              </div>
              <div className="b22">Offer valid till 25th March 2023</div>
              <div className="b23">- ₹18,401</div>
            </div>
            <div className="b">
              <div className="b24">
                Total <span className="b25"> (Incl. of 18% GST)</span>
              </div>
              <div className="b26">₹{totalCost.toFixed(2)}</div>
            </div>

            <div className="b02">
              <div>
                <button className="but">
                  <span className="b27">cancel</span>
                </button>
              </div>
              <div>
                <button className="but1">
                  <span className="b28">proceed to pay</span>
                </button>
              </div>
            </div>
            <div className="b29">
              <img src={i5} alt="footer"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
