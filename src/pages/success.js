import * as React from 'react';

import SEO from '../components/seo';

function SuccessPage() {
  return (
    <main className="flex flex-col justify-between min-h-screen px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 sm:py-10 lg:py-12">
      <SEO title="Success" />
      <div>
        <h1>Success</h1>
        <p>form submitted successfully</p>
      </div>
    </main>
  );
}

export default SuccessPage;
