export type FakeGoogleWrapperType = {
  click: () => void;
  remove: () => void;
};

// https://medium.com/@leonardosalles/a-guide-to-custom-google-sign-in-button-e7b02c2c5e4f
export const createFakeGoogleWrapper = (
  onClick: (credentialResponse: google.accounts.id.CredentialResponse) => void,
  useOneTap = false,
): FakeGoogleWrapperType => {
  const googleLoginWrapper = document.createElement('div');
  googleLoginWrapper.style.display = 'none';
  googleLoginWrapper.classList.add('custom-google-button');
  document.body.appendChild(googleLoginWrapper);

  window.google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GAPI_CLIENT_ID,
    callback: onClick,
  });
  window.google.accounts.id.renderButton(googleLoginWrapper, {
    type: 'standard',
  });
  if (useOneTap) {
    window.google.accounts.id.prompt();
  }
  const googleLoginWrapperButton = googleLoginWrapper.querySelector(
    'div[role=button]',
  ) as HTMLElement;

  return {
    click: () => {
      googleLoginWrapperButton.click();
    },
    remove: () => {
      googleLoginWrapper.remove();
    },
  };
};
