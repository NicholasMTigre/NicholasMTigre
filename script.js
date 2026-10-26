const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#main-nav');
if (menuButton && navigation) {
  menuButton.hidden = false;
  document.querySelector('.site-header').classList.add('js-menu');
  const setMenu = (open) => {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close menu' : 'Menu';
  };
  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  const mobileScreen = window.matchMedia('(max-width: 900px)');
  mobileScreen.addEventListener('change', () => setMenu(false));
}
const inquiryForm = document.querySelector('#inquiry-form');
if (inquiryForm) {
  const output = document.querySelector('#message-output');
  const status = document.querySelector('#form-status');
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    const data = new FormData(inquiryForm);
    output.value = `Project inquiry for Nicholas Tigre\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nProperty: ${data.get('location')}\nPreferred dates / deadline: ${data.get('dates')}\nAdd-ons / special requests: ${data.get('addons') || 'None specified'}\n\n${data.get('details')}`;
    document.querySelector('#message-result').hidden = false;
    document.querySelector('#email-message').href = 'mailto:ntigre007@gmail.com?subject=' + encodeURIComponent('Nico Aerometrics inquiry: ' + data.get('service')) + '&body=' + encodeURIComponent(output.value);
    status.textContent = 'Message prepared. Open it in your email app to review and send, or copy it and email ntigre007@gmail.com. Nothing has been sent yet.';
    output.focus();
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(output.value);
      status.textContent = 'Message copied. Nothing has been sent.';
    } catch {
      output.focus();
      output.select();
      status.textContent = 'Automatic copying is unavailable. Copy the selected message using your device’s copy command.';
    }
  });
}

// Progressive enhancement: every package/view remains readable without JavaScript.
const packageChoices = [...document.querySelectorAll('[data-choice]')];
const packagePanels = [...document.querySelectorAll('[data-package]')];
if (packageChoices.length && packagePanels.length) {
  const choosePackage = (id) => {
    packageChoices.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.choice === id)));
    packagePanels.forEach((panel) => { panel.hidden = panel.dataset.package !== id; });
  };
  packageChoices.forEach((button) => button.addEventListener('click', () => choosePackage(button.dataset.choice)));
  choosePackage('photos');
  document.querySelector('.service-picker').hidden = false;
  const addOnPicker = document.querySelector('.add-on-picker');
  addOnPicker.hidden = false;
  addOnPicker.addEventListener('change', () => {
    const selected = [...addOnPicker.querySelectorAll('input:checked')].map((input) => input.value);
    document.querySelectorAll('.package-inquiry').forEach((link) => {
      const params = new URLSearchParams({ service: link.dataset.service });
      if (selected.length) params.set('addons', selected.join(', '));
      link.setAttribute('href', 'contact.html?' + params.toString());
    });
  });
}
const viewChoices = [...document.querySelectorAll('[data-view-choice]')];
const viewPanels = [...document.querySelectorAll('[data-view]')];
if (viewChoices.length && viewPanels.length) {
  const chooseView = (id) => {
    viewChoices.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.viewChoice === id)));
    viewPanels.forEach((panel) => { panel.hidden = panel.dataset.view !== id; });
  };
  viewChoices.forEach((button) => button.addEventListener('click', () => chooseView(button.dataset.viewChoice)));
  chooseView('ground');
  document.querySelector('.view-switch').hidden = false;
}
if (inquiryForm) {
  const params = new URLSearchParams(window.location.search);
  const serviceNames = { photos: 'Aerial Photos', video: 'Aerial Video', bundle: 'Photos + Video', tour: 'Complete Home Tour' };
  const selectedService = serviceNames[params.get('service')];
  const serviceSelect = document.querySelector('#service');
  if (selectedService) {
    const option = [...serviceSelect.options].find((item) => item.textContent.startsWith(selectedService + ' —'));
    if (option) serviceSelect.value = option.value;
  }
  const requestedAddOns = params.get('addons');
  if (requestedAddOns) document.querySelector('#addons').value = requestedAddOns.slice(0, 1000);
}
