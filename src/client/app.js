import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "../client/app.css";
import AppHeader from "./containers/appheader";
import Hello from "./containers/hello";
import SignIn from "./containers/signin";
import Register from "./containers/register";
import Profile from "./containers/profile";
import OurService from "./containers/our_service";
import ContactUs from "./containers/contact_us";
import ProfileEdit from "./containers/profileEdit";
import PostEdit from "./containers/postEdit";
import CreatePetProfile from "./containers/CreatePetProfile";
import Search from "./containers/search";
import Transaction from "./containers/transactionCard";
import PetProfileEdit from "./containers/petprofileEdit";
import PetPage from "./containers/petpage";
import MapPage from "./containers/mapPage"
import reducers from "./redux/reducers";
import configureStore from "./app/store/configure-store";
import ExclusiveRouteContainer from "./app/ExclusiveRouteContainer";
import theme from "./app/petbnbTheme";

const initialState = window.__INITIAL_STATE__;
const store = configureStore(reducers, initialState);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <div>
                <CssBaseline />
                <AppHeader />
                <Switch>
                  <Route path="/register" component={Register} />
                  <Route path="/signin" component={SignIn} />
                  <ExclusiveRouteContainer>
                    <Route path="/profile/edit" component={ProfileEdit} />
                    <Route exact path="/profile" component={Profile} />
                    <Route
                      exact path="/createPetProfile"
                      component={CreatePetProfile}
                    />

                    <Route
                      exact path="/profile/petprofile/edit/:id"
                      component={PetProfileEdit}
                    />
                    <Route
                      path="/profile/petpage"
                      component={PetPage}
                    />

                    <Route
                      path="/profile/editPost"
                      component={PostEdit}
                    />
                    <Route
                      path="/transaction"
                      component={Transaction}
                    />
                    <Route exact path="/map" component={MapPage}/>
                    <Route exact path="/" component={Hello} />
                    <Route exact path="/home" component={Hello} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/our_service" component={OurService} />
                    <Route exact path="/contact_us" component={ContactUs} />
                  </ExclusiveRouteContainer>
                </Switch>
             
              </div>
            </BrowserRouter>
          </Provider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
