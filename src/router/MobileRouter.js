import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';
import { getToken } from "../common/components/getToken/getToken";

import {
	// LandingPageContainer,
	// BuyerRegPageContainer,
	// RegisterPageContainer,
	// RegisterDetailsPageContainer,
	// ForgotPassPageContainer,
	// VerifyOtpPageContainer,
	BDPageContainer,
	SearchPageContainer,
	SearchListPageContainer,
	NearbySellersPageContainer,
	ProductPageContainer,
	AlternativesPageContainer,
	DrugDetailsPageContainer,
	HomePageContainer,
	HeaderHomeContainer,
	HeaderCommonPageContainer,
	HeaderListPageContainer,
	HeaderSearchPageContainer,
	FooterPageContainer,
	RolePageContainer,
	ProfilePageContainer,
	PrivateSearchPageContainer,
	ProfileInfoPageContainer,
	ProfileAddUserPageContainer,
	ProfileAddBranchPageContainer,
	ChangePasswordPageContainer,
	FeedbackPageContainer,
	MenuPageContainer,
	PLPPageContainer,
	CartPageContainer,
	AddNewAddressPageContainer,
	EditAddressPageContainer,
	PaymentPageContainer,
	SmartCartPageContainer,
	OrdersPageContainer,
	BranchPageContainer,
	SplashScreenPageContainer,
	PageNotFoundContainer,
	// LoginPageContainer,
	ShortbookPageContainer,
	WatchListsPageContainer,
} from "../mobileview/components";
// import {HealthPageContainer} from "../webview/components";


import { UserManagementContainer } from "../mobileview/components/ProfileAddUser/UserManagementContainer";

const OnBoardingPageContainer = lazy(() => import('../mobileview/components/OnBoarding/OnBoardingPageContainer'));
const LoginPageContainer = lazy(() => import('../mobileview/components/Login/LoginPageContainer'));
const RegisterPageContainer = lazy(() => import('../mobileview/components/Register/RegisterPageContainer'));
const RegisterDetailsPageContainer = lazy(() => import('../mobileview/components/RegisterDetails/RegisterDetailsPageContainer'));
const ForgotPassPageContainer = lazy(() => import('../mobileview/components/ForgotPass/ForgotPassPageContainer'));
const VerifyOtpPageContainer = lazy(() => import('../mobileview/components/VerifyOtp/VerifyOtpPageContainer'));
const BuyerRegPageContainer = lazy(() => import('../mobileview/components/BuyerRegistration/BuyerRegPageContainer'));
const LandingPageContainer = lazy(() => import('../mobileview/components/Landing/LandingPageContainer'));




// const WatchListsPageContainer = lazy(() => import('../mobileview/components/WatchLists/WatchListsPageContainer'));

const PublicRoute = (props) => {
	const { Component, path } = props;
	var token = getToken();

	if (!token) 
		return <Route path={path} component={Component} />;
	return <Redirect to="/home" />;
};

const CommonRoute = (props) => {
	const { Component, path } = props;
	return <Route path={path} component={Component} />;
};



const PrivateRoute = (props) => {
	const { Component, path, homeHeader, headerSearch, pageTitle,
		backArrow, edit, add, homeFooter, currentPage, headerList,
		profilePage, subTitle,url } = props;

	var token = getToken();

	if (token)
		return (
			<Route
				path={path}
				render={(props) => (
					<>
						{homeHeader && <HeaderHomeContainer />}
						{(pageTitle !== undefined && backArrow !== undefined && edit !== undefined && add !== undefined && (profilePage === true || profilePage === undefined)) &&
							<HeaderCommonPageContainer profilePage={profilePage} pageTitle={pageTitle} backArrow={backArrow} edit={edit} add={add} url={url}/>
						}
						{(headerList && pageTitle !== undefined && subTitle !== undefined) &&
							<HeaderListPageContainer pageTitle={pageTitle} subTitle={subTitle} />
						}
						{headerSearch &&
							<HeaderSearchPageContainer />}
						{/* <RolePageContainer page={path} /> */}
						<Component {...props} />
						{(homeFooter && currentPage !== undefined) &&
							<FooterPageContainer currentPage={currentPage} />}
					</>
				)}
			/>
		);
	return <Redirect to="/login" />;
};

const PageNotFoundLayout = (props) => {
	const { Component, path, pageTitle, pageSubTitle, subPath } = props;
	return (
		<Route
			path={path}
			render={(props) => (
				<>
					<HeaderCommonPageContainer />
					<div className="website-body">
						{/* <NavigationPageContainer pageTitle={pageTitle} pageLink={path} pageSubTitle={pageSubTitle} subPath={subPath} {...props} /> */}
						<Component {...props }/>
						<div className="web-bottom-height"></div>
						<div className="termsAndCondi">
							<Container fixed>
								Copyright © 2021 C-Square Info Solutions Pvt. Ltd.. All rights
								reserved.
							</Container>
						</div>
					</div>
				</>
			)}
		/>
	);
};
const PageLoading =()=>{
	return (
		<div>
			{/* <h1 >Page loading...</h1> */}
			{/* <img className="router_logo_img" src={Main_Logo} alt="landing logo" /> */}
		</div>
	)
}
function MobileRouter() {
	return (
		<Router >
			<Suspense fallback={<PageLoading />}>
			<Switch>
				{/* <Route path="/health" component={HealthPageContainer} /> */}
				<PublicRoute path="/splash" exact Component={SplashScreenPageContainer} />
				<PublicRoute path="/" exact  Component={OnBoardingPageContainer} />
				<PublicRoute path="/login" Component={LoginPageContainer} />

				<PublicRoute
					path="/forgot-password/:username"
					Component={ForgotPassPageContainer}
				/>
				<PublicRoute 
					path="/verify-otp/:type" 
					Component={VerifyOtpPageContainer} 
				/>
				<PublicRoute
					path="/register/:type"
					Component={RegisterPageContainer}
				/>
				<PublicRoute 
					path="/register-details/:type" 
					Component={RegisterDetailsPageContainer} 
				/>
				
				<PublicRoute
					path="/buyer-registration"
					Component={BuyerRegPageContainer}
				/>
				<PublicRoute path="/buyer-details" Component={BDPageContainer} />

				<PublicRoute path="/landing" Component={LandingPageContainer} />
				<PublicRoute path="/search"  Component={SearchPageContainer} />
				<PublicRoute path="/search-list" Component={SearchListPageContainer} />
				<PublicRoute
					path="/nearby-sellers"
					Component={NearbySellersPageContainer}
				/>
				<CommonRoute
					path="/pdp/:itemCode"
					Component={ProductPageContainer}
				/>
				<CommonRoute
					path="/alternatives/:contCode/:itemName"
					Component={AlternativesPageContainer}
				/>
				<CommonRoute
					path="/drug-details"
					Component={DrugDetailsPageContainer}
				/>
				<PrivateRoute
					exact
					path="/home"
					Component={HomePageContainer}
					homeHeader={true}
					homeFooter={true}
					currentPage="home"
				/>
				<PrivateRoute
					path="/home/search"
					Component={PrivateSearchPageContainer}
					headerSearch={true}
				/>
				<PrivateRoute
					path="/watchlist"
					Component={WatchListsPageContainer}
					pageTitle="Watchlist"
					subTitle="watchlists | 60 Items"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/shortbook"
					Component={ShortbookPageContainer}
					pageTitle="Shortbook"
					subTitle="All Products | 145 Items"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/profile"
					Component={ProfilePageContainer}
					pageTitle="Profile"
					backArrow={true}
					edit={true}
					add={false}
					profilePage={true}
					exact
				/>
				<PrivateRoute
					path="/profile-info"
					Component={ProfileInfoPageContainer}
					pageTitle="Profile Information"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/user"
					Component={UserManagementContainer}
					pageTitle="User Management"
					backArrow={true}
					edit={false}
					add={true}
					url="/add-user"
				/>
				<PrivateRoute
					path="/add-user"
					Component={ProfileAddUserPageContainer}
					pageTitle="Add User"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/edit-user/:userId"
					Component={ProfileAddUserPageContainer}
					pageTitle="Edit User"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/add-branch"
					Component={ProfileAddBranchPageContainer}
					pageTitle="Add Branch"
					backArrow={true}
					edit={false}
					add={false}
				/>

				 <PrivateRoute
					path="/edit-branch/:branchId"
					Component={ProfileAddBranchPageContainer}
					pageTitle="Edit Branch"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/profile/branch"
					Component={BranchPageContainer}
					pageTitle="Branch Management"
					backArrow={true}
					edit={false}
					add={true}
					url="/add-branch"
				/>
				<PrivateRoute
					path="/change-password"
					Component={ChangePasswordPageContainer}
					pageTitle="Change Password"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/feedback"
					Component={FeedbackPageContainer}
					pageTitle="Feedback"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/menu"
					Component={MenuPageContainer}
					pageTitle="Menu"
					backArrow={false}
					edit={false}
					add={false}
					homeFooter={true}
					currentPage="menu"
				/>
				<PrivateRoute
					path="/orders"
					Component={OrdersPageContainer}
					pageTitle="Order History"
					subTitle=""
					// backArrow={true}
					// edit={false}
					// add={false}
					homeFooter={false}
					currentPage="orders"
					headerList={true}
				/>
				<PrivateRoute
					path="/PLP"
					exact
					Component={PLPPageContainer}
					pageTitle="Top/Most Ordered Products"
					subTitle="In Bangalore | 120 Items"
					headerList={true}
				/>
					<PrivateRoute
					path="/PLP/:contCode/:itemName"
					Component={PLPPageContainer}
					pageTitle="Alternatives"
					subTitle="In Bangalore | 120 Items"
					headerList={true}
				/>
				<PrivateRoute
					path="/varients"
					Component={PLPPageContainer}
					pageTitle="Abilify"
					subTitle="7 Varients"
					headerList={true}
				/>
				<PrivateRoute
					path="/cart"
					Component={CartPageContainer}
					pageTitle="Cart"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/add-new-address"
					Component={AddNewAddressPageContainer}
					pageTitle="Add New Address"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/edit-address"
					Component={EditAddressPageContainer}
					pageTitle="Edit Address"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/payment"
					Component={PaymentPageContainer}
					pageTitle="Payment"
					backArrow={true}
					edit={false}
					add={false}
				/>
				<PrivateRoute
					path="/smart-cart"
					Component={SmartCartPageContainer}
					pageTitle="Smart cart"
					backArrow={true}
					edit={false}
					add={false}
					homeFooter={true}
					currentPage="smart-cart"
				/>
				<PrivateRoute
					path="/404"
					Component={PageNotFoundContainer}
					pageTitle="Page Not Found"
					headerList={true}
					Layout={PageNotFoundLayout}
					homeFooter={true}
				/>

				{/* <Route
					render={() => (
									<Redirect to={{ pathname: "/404" }} />
					)}
				/> */}
			</Switch>
			</Suspense>
			
		</Router>
	);
}

export default MobileRouter;
