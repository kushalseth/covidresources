import React from "react";
import CovidResources from "./covidResources";
import GoodNews from "./goodNews";
import Jobs from "./jobs";
import Motivations from "./motivations";
import SocialWorks from "./socialWorks";
import Brand from "./brand";
import TopRight from "./topRight";

function ApplicationBody({ props, settings, events }) {
  const { localizedText, constants, config } = settings;
  const enableSettings = config.navBarConfigurations.enableSettings;

  return (
    <div className="applicationBody-wrapper">
      <div className={`text-center`}>
        {props && (
          <React.Fragment>
            {enableSettings.brand &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.brand
              ) && <Brand props={props} events={events} settings={settings} />}

            {enableSettings.resources &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.resources
              ) && (
                <CovidResources
                  props={props}
                  events={events}
                  settings={settings}
                />
              )}

            {enableSettings.jobs &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.jobs
              ) && <Jobs props={props} events={events} settings={settings} />}

            {enableSettings.socialWorks &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.socialWorks
              ) && (
                <SocialWorks
                  props={props}
                  events={events}
                  settings={settings}
                />
              )}

            {enableSettings.motivations &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.motivations
              ) && (
                <Motivations
                  props={props}
                  events={events}
                  settings={settings}
                />
              )}

            {enableSettings.goodNews &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.goodNews
              ) && (
                <GoodNews props={props} events={events} settings={settings} />
              )}

            {enableSettings.topRight &&
              props.contextComponent &&
              props.contextComponent.areEqual(
                constants.application.navbar.topRight
              ) && (
                <TopRight props={props} events={events} settings={settings} />
              )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default ApplicationBody;
