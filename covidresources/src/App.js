import NavBar from "./components/navigations/navbar";
import ApplicationBody from "./components/body/applicationbody";
import { InitializeExtensionMethods } from "./utilities/initializeExtensionMethods";
import { Localizations } from "./utilities/localizations";
import { Configurations } from "./utilities/config";
import { Constants } from "./utilities/constants";
import { Banners } from "./components/body/banners";
import React, { Component } from "react";
import JumbotronBlock from "./components/body/jumbotronblock";

import "whatwg-fetch";
import "core-js";

class App extends React.Component {
  constructor(props) {
    InitializeExtensionMethods();
    super(props);

    this.settings = {
      localizedText: Localizations.Text(Constants.application.languages.en),
      config: Configurations,
      constants: Constants,
    };
    this.events = {
      renderChild: this.renderChild.bind(this),
    };
    this.state = {
      contextComponent: Constants.application.navbar.brand,
    };
  }

  componentDidMount() {}

  renderChild = (event) => {
    const contextValue = event.target.attributes["data-value"].value;
    const dataRedirect = event.target.attributes[
      "data-redirect"
    ].value.toBoolean();

    if (dataRedirect) {
      window.location.href = contextValue;
    } else {
      this.setState({
        contextComponent: contextValue,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <NavBar
            events={this.events}
            settings={this.settings}
            props={this.state}
          />
        </div>
        <div className="App container-full">
          <div>
            <ApplicationBody
              events={this.events}
              settings={this.settings}
              props={this.state}
            />
          </div>
        </div>
        {this.settings.config.banners.initialPhase && (
          <div>
            <Banners.PrimaryAlert
              events={this.events}
              settings={this.settings}
              props={this.state}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
