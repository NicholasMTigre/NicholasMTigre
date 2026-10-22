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
  const mobileScreen = window.matchMedia('(max-width: 700px)');
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
    output.value = `Project inquiry for Nicholas Tigre\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nSite: ${data.get('location')}\n\n${data.get('details')}`;
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
