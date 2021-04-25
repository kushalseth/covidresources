import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar({ props, settings, events }) {
  const { localizedText, constants, config } = settings;
  const enableSettings = config.navBarConfigurations.enableSettings;

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand
          active="false"
          onClick={events.renderChild}
          data-value={constants.application.navbar.brand}
          data-redirect={false}
        >
          {localizedText[constants.application.localizationKeys.brandName]}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {enableSettings.resources && (
              <Nav.Link
                onClick={events.renderChild}
                data-value={constants.application.navbar.resources}
                data-redirect={false}
              >
                {
                  localizedText[
                    constants.application.localizationKeys.resources
                  ]
                }
              </Nav.Link>
            )}
            {enableSettings.jobs && (
              <Nav.Link
                onClick={events.renderChild}
                data-value={constants.application.navbar.jobs}
                data-redirect={false}
              >
                {localizedText[constants.application.localizationKeys.jobs]}
              </Nav.Link>
            )}
            {enableSettings.socialWorks && (
              <Nav.Link
                onClick={events.renderChild}
                data-value={constants.application.navbar.socialWorks}
                data-redirect={false}
              >
                {
                  localizedText[
                    constants.application.localizationKeys.socialWorks
                  ]
                }
              </Nav.Link>
            )}
            {enableSettings.motivations && (
              <Nav.Link
                onClick={events.renderChild}
                data-value={constants.application.navbar.motivations}
                data-redirect={false}
              >
                {
                  localizedText[
                    constants.application.localizationKeys.motivations
                  ]
                }
              </Nav.Link>
            )}
            {enableSettings.goodNews && (
              <Nav.Link
                onClick={events.renderChild}
                data-value={constants.application.navbar.goodNews}
                data-redirect={false}
              >
                {localizedText[constants.application.localizationKeys.goodNews]}
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {enableSettings.topRight && (
              <Nav.Link
                onClick={events.renderChild}
                data-value={config.links.ownerSite}
                data-redirect={true}
              >
                {localizedText[constants.application.localizationKeys.topRight]}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
