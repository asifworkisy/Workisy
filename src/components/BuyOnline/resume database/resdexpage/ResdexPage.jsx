import React from "react";
import { GrCheckboxSelected } from "react-icons/gr";
import "./ResdexPage.css";
import { SlClose } from "react-icons/sl";

const ResdexPage = () => {
  return (
    <div className="resdex-container">
      <h2>Post Jobs Online</h2>
      <h1>Quick & Easy Job Posting − Get Quality Applies</h1>
      <div className="resdex-cards">
        <div className="card">
          <h3>RESDEX Lite</h3>

          <p className="tagline">Best fit for smaller hiring needs.</p>
          <h4 className="requirement">1 requirement</h4>
          <h4 className="requirement">100 CV views</h4>
          <p className="price">
            {" "}
            ₹4000 <span className="strike">₹5000</span>
          </p>

          <ul>
            <li>
              <GrCheckboxSelected /> 100 CV views per requirement
            </li>
            <li>
              <GrCheckboxSelected /> Up to 500 search results
            </li>
            <li>
              <GrCheckboxSelected /> Candidates active in last 6 months
            </li>
            <li>
              <GrCheckboxSelected /> 10+ advanced filters
            </li>
            <li>
              <GrCheckboxSelected /> Single user access
            </li>
            <li>
              <SlClose style={{ color: "#FF5733" }} /> Email multiple candidates
              together
            </li>
            <li>
              <SlClose style={{ color: "#FF5733" }} />
              Boolean keyword search
            </li>
            <div className="borderBotom">
              <li>
                <SlClose style={{ color: "#FF5733" }} />
                Download CVs in bulk
              </li>
            </div>{" "}
            <br />
          </ul>
          <p className="validity">Valid for 15 days</p>
          <button className="buy-now">Buy now</button>
          <button className="add-to-cart">Add to cart</button>
        </div>

        <div className="card">
          <h3>RESDEX Lite</h3>{" "}
          <p className="tagline">Best fit for bigger hiring needs.</p>
          <p className="price">
            <h4 className="requirement">3 requirement</h4>
            <h4 className="requirement">300 CV views</h4>
            ₹10500 <span className="strike">₹12500</span>
          </p>
          <div className="noDot">
            <ul>
              <li>
                <GrCheckboxSelected /> 100 CV views per requirement
              </li>
              <li>
                <GrCheckboxSelected /> Up to 500 search results
              </li>
              <li>
                <GrCheckboxSelected /> Candidates active in last 6 months
              </li>
              <li>
                <GrCheckboxSelected /> 10+ advanced filters
              </li>
              <li>
                <GrCheckboxSelected /> Single user access
              </li>
              <li>
                <SlClose style={{ color: "#FF5733" }} /> Email multiple
                candidates together
              </li>
              <li>
                <SlClose style={{ color: "#FF5733" }} /> Boolean keyword search
              </li>
              <div className="borderBotom">
                <li>
                  <SlClose style={{ color: "#FF5733" }} /> Download CVs in bulk
                </li>
              </div>
              <br />
            </ul>
          </div>
          <p className="validity">Valid for 15 days</p>
          <button className="buy-now">Buy now</button>
          <button className="add-to-cart">Add to cart</button>
        </div>
        <div className="card">
          <h3>RESDEX</h3>
          <p className="tagline">Best fit for huge hiring needs</p>
          <p className="price">Custom pricing</p>
          <br />
          <br />
          <br />
          <ul>
            <li>
              <GrCheckboxSelected /> CV views as per plan
            </li>
            <li>
              <GrCheckboxSelected /> Unlimited search results
            </li>
            <li>
              <GrCheckboxSelected /> All available candidates
            </li>
            <li>
              <GrCheckboxSelected /> 20+ advanced filters
            </li>
            <li>
              <GrCheckboxSelected /> Multiple user access
            </li>
            <li>
              <GrCheckboxSelected /> Email multiple candidates together
            </li>
            <li>
              <GrCheckboxSelected /> Boolean keyword search
            </li>
            <div className="borderBotom">
              <li>
                <GrCheckboxSelected /> Download CVs in bulk
              </li>
            </div>
            <br />
          </ul>
          <label>
            Select User:
            <select>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="More">More</option>
            </select>
          </label>
          <p className="validity">As per plan</p>
          <button className="contact-sales">Contact sales</button>
        </div>
      </div>
    </div>
  );
};

export default ResdexPage;
