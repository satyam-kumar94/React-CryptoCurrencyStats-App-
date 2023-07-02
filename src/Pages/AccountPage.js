import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "../components/CoinsTable";

const AccountPage = () => {
  const { user, setAlert, watchlist, coins, symbol } = CryptoState();

  const history = useHistory();
  const [formValid, setFormValid] = useState(false); // State to track form validity

  const handleAccountPage = () => {
    if (formValid) {
      history.push("/paymentDone"); // Replace "/AccountPage" with the actual path of your "AccountPage.js" file
    } else {
      setAlert("Please fill in all the required fields."); // Show an error message if the form is not valid
    }
  };

  const totalAmount = coins.reduce((total, coin) => {
    if (watchlist.includes(coin.id)) {
      return total + coin.current_price;
    } else {
      return total;
    }
  }, 0);

  const handleInputChange = () => {
    const inputs = Array.from(document.querySelectorAll('input[required]'));
    const isFormValid = inputs.every(input => input.value.trim() !== '');
    setFormValid(isFormValid);
  };

  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</a></h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                        </div>
                      </div>

                      {coins.map((coin) => {
                        if (watchlist.includes(coin.id))
                          return (
                            <div>
                              <div className="card mb-3 mb-lg-0">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row align-items-center">
                                      <div className="ms-3">
                                        <h5 style={{ color: 'black' }}>{coin.name}</h5>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                      <h6 className="mb-0 me-2" style={{ color: 'black' }}>{symbol}</h6>
                                      <h6 className="mb-0" style={{ color: 'black' }}>{numberWithCommas(coin.current_price.toFixed(2))}</h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        else return <></>;
                      })}
                    </div>

                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                          </div>
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Cardholder's Name"
                                required // Add 'required' attribute
                                onChange={handleInputChange} // Handle input change event
                              />
                              <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                size={17}
                                placeholder="1234 5678 9012 3457"
                                minLength={19}
                                maxLength={19}
                                required // Add 'required' attribute
                                onChange={handleInputChange} // Handle input change event
                              />
                              <label className="form-label" htmlFor="typeText">Card Number</label>
                            </div>
                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size={7}
                                    minLength={7}
                                    maxLength={7}
                                    autoComplete="off"
                                    required // Add 'required' attribute
                                    onChange={handleInputChange} // Handle input change event
                                  />
                                  <label className="form-label" htmlFor="typeExp">Expiration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="●●●"
                                    size={1}
                                    minLength={3}
                                    maxLength={3}
                                    name="cvv-input"
                                    autoComplete="off"
                                    required // Add 'required' attribute
                                    onChange={handleInputChange} // Handle input change event
                                  />
                                  <label className="form-label" htmlFor="typeText">Cvv</label>
                                </div>
                              </div>
                            </div>
                          </form>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">{symbol}{numberWithCommas(totalAmount.toFixed(2))}</p>
                          </div>
                          <button
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                            disabled={!formValid} // Disable the button if the form is not valid
                            onClick={handleAccountPage}
                          >
                            <div className="d-flex justify-content-between">
                              {/* <span>$4818.00</span> */}
                              <span>{symbol}{numberWithCommas(totalAmount.toFixed(2))}</span>
                              <Button variant="contained" style={{ marginLeft: '10px', backgroundColor: 'yellow', color: 'black' }}>
                                Click for Payment Done
                              </Button>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
