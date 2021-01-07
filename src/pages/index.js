import * as React from 'react';
import PropTypes from 'prop-types';

import { navigate } from 'gatsby';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <main className="flex flex-col justify-between min-h-screen px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 sm:py-10 lg:py-12">
      <SEO title="Home Page" />
      <Form formName="top" />
      <Form formName="bottom" />
    </main>
  );
}

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function Form({ formName }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formState = Object.fromEntries(new FormData(form));

    // Send form to CRM
    try {
      await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formName, ...formState }),
      });
    } catch (error) {
      alert(error);
    }

    // Send form to Netlify
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': formName,
          ...formState,
        }),
      }).then(() => navigate(form.getAttribute('action')));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form
      action="/success/"
      name={formName}
      onSubmit={handleSubmit}
      method="POST"
      data-netlify
      className="grid w-full max-w-2xl gap-4 mx-auto sm:grid-cols-2"
    >
      <Input
        formName={formName}
        name="first_name"
        label="First name"
        className="w-full"
      />
      <Input
        formName={formName}
        name="last_name"
        label="Last name"
        className="w-full"
      />
      <Input
        formName={formName}
        name="email"
        label="Email"
        type="email"
        isFullWidth
      />
      <button type="submit" className="px-3 py-2 border border-gray-500">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  formName: PropTypes.string.isRequired,
};

function Input({ formName, isFullWidth, label, name, type = 'text' }) {
  return (
    <label
      htmlFor={`${formName}-${name}`}
      className={`block ${isFullWidth ? 'sm:col-span-2' : ''}`}
    >
      <span className="block">{label}</span>
      <input
        name={`${formName}-${name}`}
        id={`${formName}-${name}`}
        type={type}
        className="w-full"
      />
    </label>
  );
}

Input.propTypes = {
  formName: PropTypes.string.isRequired,
  isFullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default IndexPage;
