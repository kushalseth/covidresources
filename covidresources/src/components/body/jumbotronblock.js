import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function JumbotronBlock({ props, settings, events }) {
  const { localizedText, constants, config } = settings;
  return (
    <div className="jumbotron-wrapper font-monospace">
      <Jumbotron>
        <h1 class="text-center font-monospace">
          {" "}
          {
            localizedText[
              constants.application.localizationKeys.jumbotronMainHeading
            ]
          }{" "}
        </h1>
        <br />
        <h6 class="text-center font-monospace">
          {" "}
          Search Application for Covid Resources, Verified Jobs, Motivations,
          Volunteers{" "}
        </h6>
        {/*<p className="font-monospace w-90 p-3">
          {
            localizedText[
              constants.application.localizationKeys.jumbotronSecondaryHeading
            ]
          }
        </p>*/}
        {/*<div class="d-grid gap-5">
          <div class="p-2 bg-light border">
            We are not connected with any group and doesnot entain the paid
            publicity. We just want to contribute in a small way.
          </div>
          <div class="p-2 bg-light border">
            In this tough times, nothing is certain, but we will try to keep our
            searches best to it's level
          </div>
          <div class="p-2 bg-light border">
            In phase 1st, we are adding the feature of redirections to other
            social media platforms, and later we will add in build advance
            searches and verified accounts and information
          </div>
          <div class="p-2 bg-light border">
            We you find the information useful or want to inform something, then
            share your words accross the social media platforms. or connect with
            me at {config.links.ownerSite}.
          </div>
        </div>*/}
        <br />
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-left">
            We all are resposible for protecting each other in this tough time.
            We are trying to help in our way by helping people to search accorss
            the platforms. There are some specific ways to search across the
            social media platforms.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            <b>
              {" "}
              We are not connected with any funded/NGO group and doesnot
              entertain the paid publicity. We just want to contribute in a way.{" "}
            </b>
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            If you are volentering any cause, we would love to show your
            verified information on our application so that our users can take
            benefit.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            In this tough times, nothing is certain, but we will try to keep our
            searches best to it's level.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            In phase 1st, we are adding the feature of redirections to other
            social media platforms, and later we will add in-build advance
            searches and verified accounts and information.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            If you find the information useful or want to inform something, then
            share your words accross the social media platforms. or connect with
            me.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            If you are a software developer and wants to help us, then please
            create a pull request. make a star or fork the repository.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            Application will be released in phases. Moving forward we will try
            to add new features like a flag of verified information vs crowd
            sourced information.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
        </ul>
      </Jumbotron>
    </div>
  );
}
