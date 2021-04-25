export const Banners = {
  PrimaryAlert,
  SuccessAlert,
};

function PrimaryAlert({ props, settings, events }) {
  return (
    <div class="alert alert-primary" role="alert">
      {
        settings.localizedText[
          settings.constants.application.localizationKeys.initialPhase
        ]
      }
    </div>
  );
}

function SuccessAlert({ props, settings, events }) {
  return (
    <div class="alert alert-success" role="alert">
      {settings.config.banners.initialPhase}
    </div>
  );
}
