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
        <h5 class="text-center font-monospace">
          {" "}
          I am tring to build an application that can be actually useful for
          covid scenarios of India or any other developing country. <br />{" "}
          <br />
          Thoughts In Progress
        </h5>
        <br /> <br />
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
        <h5>03-MAY-2021</h5>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-left">
            <h6 class="text-center font-monospace">
              {" "}
              #MyCovid: Covid Patient's Reviews
            </h6>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            It's too much to include for an application, removed Verified Jobs,
            Motivations, etc. Now, it's a Patient's Review Application. Let's
            name it: #MyCovid
            <br /> <br />
          </li>
        </ul>
        <br /> <br />
        <h5>03-MAY-2021</h5>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-left">
            <h6 class="text-center font-monospace">
              {" "}
              Covid Patient's reviews, Verified Jobs, Motivations.
            </h6>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            Oh my god, it's just a week and more then 100 websites, search
            applications published. How people are reacting on those. These
            links are good but ground reality is different. You cannot make a
            true search application, until you are getting the correct data from
            the hospitals. I would not say these websites are useless. They are
            helpful in getting the leads of what exists. And you can go to
            ground and check the reality. But is it feasible? {"  "}
            <br /> <br />
            Now what will happen to this application, which I am building. There
            is no need to put another link on google. Then I thought, why not
            just use government websites to get the data. But again, government
            website's data also does not match. We need something that is
            actually useful.
            <br /> <br />
            I guess, An application that can publish the reviews of the Patients
            who has already suffered from covid will be helpful. Where he can
            share his actual experience. In which hospital, he was admitted, how
            were the services, from where he actually get the information and
            leads, etc. Yes that is something that will actually help.
            <br /> <br />
          </li>
        </ul>
        <br />
        <h5>25-APRIL-2021</h5>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-left">
            <h6 class="text-center font-monospace">
              {" "}
              Search Application for Covid Resources, Verified Jobs,
              Motivations, Volunteers .
            </h6>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-left">
            We all are resposible for protecting each other in this tough time.
            We are trying to help in our way by helping people to search accorss
            the platforms. There are some specific ways to search across the
            social media platforms. We are not connected with any funded/NGO
            group and doesnot entertain the paid publicity. We just want to
            contribute in a way. If you are volentering any cause, we would love
            to show your verified information on our application so that our
            users can take benefit. In this tough times, nothing is certain, but
            we will try to keep our searches best to it's level. In phase 1st,
            we are adding the feature of redirections to other social media
            platforms, and later we will add in-build advance searches and
            verified accounts and information. If you find the information
            useful or want to inform something, then share your words accross
            the social media platforms. or connect with me. If you are a
            software developer and wants to help us, then please create a pull
            request. make a star or fork the repository. Application will be
            released in phases. Moving forward we will try to add new features
            like a flag of verified information vs crowd sourced information.
            <span class="badge bg-primary rounded-pill"></span>
          </li>
        </ul>
      </Jumbotron>
    </div>
  );
}
