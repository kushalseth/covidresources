import { Constants } from "./constants";

export const Localizations = {
  Text,
};

function Text(language) {
  return LocalizedText[language];
}

// make it a class
var LocalizedText = {
  en: {
    [Constants.application.localizationKeys.brandName]:
      "Covid Resources Search",
    [Constants.application.localizationKeys.resources]: "Resources",
    [Constants.application.localizationKeys.jobs]: "JOBS",
    [Constants.application.localizationKeys.socialWorks]: "SOCIAL WORKS",
    [Constants.application.localizationKeys.motivations]: "MOTIVATIONS",
    [Constants.application.localizationKeys.goodNews]: "GODD NEWS",
    [Constants.application.localizationKeys.topRight]: "KUSHAL SETH",
    [Constants.application.localizationKeys.initialPhase]:
      "Work in progress for the Application",
    [Constants.application.localizationKeys.jumbotronMainHeading]:
      "Hello, everyone!",
    [Constants.application.localizationKeys.jumbotronSecondaryHeading]: "",
    [Constants.application.localizationKeys.jumbotronButtonKey]: "Learn More",
  },
  hi: {},
};
