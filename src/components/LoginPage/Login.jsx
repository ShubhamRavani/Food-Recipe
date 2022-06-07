import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import poster from "../../images/photo1.jpg";

const clientId = "860244044567-dcbv31070ars6frnu3hq7e90kjdpt701.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
    <>
      <section className="min-h-screen relative py-20 2xl:py-40 bg-orange-400 overflow-hidden">
        <div className="absolute top-0 left-0 lg:bottom-0 h-full lg:h-auto w-full lg:w-4/12 bg-violet-500 lg:overflow-hidden">
          <img
            className="hidden lg:block h-full w-full object-cover"
            src={poster}
            alt=""
          />
        </div> 
        <div className="relative container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-2/5 px-4">
                <div className="px-6 lg:px-12 py-12 lg:py-24 bg-white shadow-lg rounded-lg">
                    <h3 className="mb-10 text-2xl font-bold font-heading">
                      {/* Header */}
                      Login to your Account
                    </h3>
                    <div className='text-center'>
                        { showloginButton ?
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Sign In"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            /> : null}

                        { showlogoutButton ?
                            <GoogleLogout
                                clientId={clientId}
                                buttonText="Sign Out"
                                onLogoutSuccess={onSignoutSuccess}
                            >
                            </GoogleLogout> : null
                        }
                    </div>
                </div>
              </div>
              <div className="w-full lg:w-3/5 px-4 mb-16 lg:mb-0 order-first lg:order-last">
                <span className="flex mb-10 mx-auto items-center justify-center h-20 w-20 bg-yellow-500 rounded-lg">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M36.2292 29.2917H0.770833C0.345333 29.2917 0 28.9463 0 28.5208C0 28.0953 0.345333 27.75 0.770833 27.75H36.2292C36.6547 27.75 37 28.0953 37 28.5208C37 28.9463 36.6547 29.2917 36.2292 29.2917Z"
                        fill="white"
                      ></path>
                      <path
                        d="M33.1458 29.2917C32.7203 29.2917 32.375 28.9463 32.375 28.5208V14.6458C32.375 14.2203 32.7203 13.875 33.1458 13.875C33.5713 13.875 33.9167 14.2203 33.9167 14.6458V28.5208C33.9167 28.9463 33.5713 29.2917 33.1458 29.2917Z"
                        fill="white"
                      ></path>
                      <path
                        d="M3.85482 29.2918C3.42932 29.2918 3.08398 28.9465 3.08398 28.521V10.7918C3.08398 9.09137 4.46686 7.7085 6.16732 7.7085H11.5632C11.9887 7.7085 12.334 8.05383 12.334 8.47933C12.334 8.90483 11.9887 9.25016 11.5632 9.25016H6.16732C5.31632 9.25016 4.62565 9.94237 4.62565 10.7918V28.521C4.62565 28.9465 4.28032 29.2918 3.85482 29.2918Z"
                        fill="white"
                      ></path>
                      <path
                        d="M23.5235 18.2502C23.3261 18.2502 23.1288 18.1747 22.9777 18.0252L17.4308 12.4798C17.141 12.19 17.1286 11.7228 17.4031 11.4191L21.9464 6.37633C25.1731 2.65012 30.2899 0.0817083 34.6713 0C34.9503 0.00308333 35.0844 0.078625 35.2309 0.225083C35.3789 0.374625 35.4621 0.576583 35.4575 0.784708C35.3743 5.16612 32.8074 10.2845 29.0689 13.5204L24.0384 18.0529C23.8919 18.1855 23.7069 18.2502 23.5235 18.2502ZM19.0403 11.9078L23.5512 16.4187L28.0498 12.3657C31.2503 9.59533 33.5119 5.365 33.8681 1.58946C30.0941 1.94712 25.8653 4.20721 23.1041 7.39692L19.0403 11.9078Z"
                        fill="white"
                      ></path>
                      <path
                        d="M25.5967 21.9071C25.5273 21.9071 25.4564 21.8979 25.387 21.8778C25.1172 21.8023 24.9107 21.588 24.8459 21.3151L23.7575 16.7672C23.6588 16.3525 23.9147 15.9378 24.3279 15.8376C24.7457 15.7358 25.1573 15.9948 25.2575 16.408L25.9806 19.4266C27.3187 17.333 27.587 14.6521 27.6147 13.0826C27.6224 12.6587 27.9369 12.3473 28.3994 12.3257C28.8234 12.3334 29.1626 12.6864 29.1549 13.1104C29.0901 16.758 28.0202 19.8012 26.1409 21.6805C25.9944 21.8285 25.7971 21.9071 25.5967 21.9071Z"
                        fill="white"
                      ></path>
                      <path
                        d="M18.871 11.7212C18.8124 11.7212 18.7523 11.715 18.6922 11.6996L14.1442 10.6097C13.8714 10.5449 13.6571 10.3399 13.5815 10.0701C13.506 9.80183 13.5815 9.51354 13.7789 9.3162C15.6582 7.43691 18.6999 6.367 22.349 6.30225C22.8315 6.32383 23.126 6.6337 23.1337 7.0592C23.1414 7.4847 22.8022 7.8362 22.3767 7.84391C20.8073 7.87166 18.1279 8.13837 16.0343 9.47808L19.0529 10.2011C19.4676 10.2998 19.7235 10.716 19.6233 11.1307C19.537 11.4838 19.221 11.7212 18.871 11.7212Z"
                        fill="white"
                      ></path>
                      <path
                        d="M13.1051 23.1251C12.9032 23.1251 12.7059 23.0464 12.5594 22.9C12.359 22.6996 12.285 22.4051 12.3667 22.1338C12.6211 21.2828 13.9423 16.9877 14.9783 15.9517C16.2286 14.7029 18.2574 14.7029 19.5077 15.9517C20.7564 17.2004 20.7549 19.2324 19.5077 20.4811C18.4717 21.5156 14.1766 22.8399 13.3256 23.0942C13.2547 23.1143 13.1791 23.1251 13.1051 23.1251ZM17.2445 16.556C16.8206 16.556 16.3935 16.7164 16.0698 17.0401C15.6335 17.4779 14.8796 19.4081 14.2907 21.1672C16.0513 20.5782 17.983 19.8259 18.4193 19.3881C19.0652 18.7406 19.0652 17.6861 18.4193 17.0401C18.094 16.7179 17.67 16.556 17.2445 16.556ZM18.9635 19.9354H18.9789H18.9635Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </span>
                <h2 className="mb-10 text-center text-6xl lg:text-7xl text-white font-bold font-heading">
                  Ready to start? Login Now.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
}
export default Login;  