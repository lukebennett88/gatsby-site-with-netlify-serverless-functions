import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const NotFoundPage = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 sm:py-10 lg:py-12">
      <SEO title="Not Found" />
      <div>
        <h1 className="text-xl">Page not found</h1>
        <br />
        <p>
          Sorry{' '}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{' '}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" className="underline">
            Go home
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
