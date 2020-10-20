import { SalteAuth } from '@salte-auth/salte-auth';
import { Auth0 } from '@salte-auth/auth0';
import { Okta } from '@salte-auth/okta';
import { Azure } from '@salte-auth/azure';
import { Redirect } from '@salte-auth/redirect';

const auth = new SalteAuth({
  providers: [
    new Auth0({
      url: 'https://salte-os.auth0.com',
      clientID: '9JTBXBREtckkFHTxTNBceewrnn7NeDd0',
    }),
    new Okta({
      url: 'https://dev-7822099.okta.com',
      clientID: '0oa8qcwsmjfxmV7OK5d5',
      redirectUrl: window.origin,
      scope: 'openid profile email',
    }),
    new Azure({
      url: 'https://login.microsoftonline.com/ed5bb696-a18c-4507-a0ec-5acdc9fa0f0a',
      clientID: 'cc57da3d-e7be-4bae-83d6-b4ce0808f146',
      redirectUrl: window.origin,
      scope: 'openid profile email',
    }),
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const tokens = auth.config.providers.reduce((output, provider) => {
  output[provider.name] = provider.idToken || provider.accessToken || provider.code;
  return output;
}, {});

const createOrFindElement = (id, options) => {
  options = {
    parent: document.body,
    type: 'div',
    ...options,
  };

  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement(options.type);
    element.id = id;

    options.parent.appendChild(element);
  }

  if (options.text) {
    element.innerText = options.text;
  }

  if (options.onClick) {
    element.onclick = options.onClick;
  }

  if ([false, true].includes(options.disabled)) {
    element.disabled = options.disabled;
  }

  return element;
}

const refreshUI = () => {
  for (const [provider, token] of Object.entries(tokens)) {
    console.log(provider, token);
    const expired = !token || token.expired === true;

    const container = createOrFindElement(provider);

    createOrFindElement(`${provider}-header`, {
      parent: container,
      type: 'h2',
      text: provider
    });

    createOrFindElement(`${provider}-login`, {
      parent: container,
      type: 'button',
      text: 'Login',
      disabled: !expired,
      onClick: () => auth.login(provider)
    });

    createOrFindElement(`${provider}-logout`, {
      parent: container,
      type: 'button',
      text: 'Logout',
      disabled: expired,
      onClick: () => auth.logout(provider)
    });

    createOrFindElement(`${provider}-user`, {
      parent: container,
      type: 'code',
      text: JSON.stringify(token && token.user, null, 2),
    });
  }
}

const onAuth = (error, { provider, data }) => {
  if (error) console.error(error);
  else {
    const { idToken, accessToken, code } = auth.provider(provider);

    tokens[provider] = idToken || accessToken || code || null;

    refreshUI();
  }
};

auth.on('login', onAuth);
auth.on('logout', onAuth);

refreshUI();
