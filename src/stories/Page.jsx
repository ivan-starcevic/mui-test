import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import './page.css';

export const Page = ({ 
  user = null, 
  onLogin, 
  onLogout, 
  onCreateAccount 
}) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section className="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a{' '}
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong>
        </a>{' '}
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data at the page
          level. Parameters help you mock data for different states.
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at{' '}
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the{' '}
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
          docs
        </a>
        .
      </p>
      <div className="tip-wrapper">
        <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="currentColor" fillRule="evenodd">
            <path d="M1.5 5.2h4.8c.3 0 .5-.2.5-.4s-.2-.4-.5-.4H1.5c-.3 0-.5.2-.5.4s.2.4.5.4zm9.74 1.8c0 .3-.2.5-.5.5H1.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9.74c.3 0 .5.2.5.5z" />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
);

Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};
