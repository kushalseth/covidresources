export default function NavbarV2({ props, settings, events }) {
  return (
    <div>
      <div class="d-flex flex-column bg-light">
        <ul class="nav nav-pills nav-justified flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
