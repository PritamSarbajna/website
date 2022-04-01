import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import illustration from './images/illustration.svg';

const TITLE = 'Fully featured notification center in minutes';
const DESCRIPTION =
  'Build a real-time notification center using our embeddable components or connect your custom UI with our notification feed API.';
const BUTTON_TEXT = 'Read Docs';
const BUTTON_URL = '/';

const NotificationCenter = () => (
  <section className="notification-center safe-paddings bg-gray-2 pt-40 pb-28 lg:pt-24 lg:pb-20">
    <div className="container grid grid-cols-12 items-center gap-x-10">
      <div className="col-start-1 col-end-8 md:mt-6" aria-hidden>
        <img
          className="md:max-w-[712px] sm:max-w-full"
          src={illustration}
          alt=""
          loading="lazy"
          width={842}
          height={560}
        />
      </div>

      <div className="col-start-9 col-end-13 xl:col-start-8">
        <Heading size="lg" tag="h2" className="leading-tight lg:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg font-light leading-snug text-gray-8 sm:text-base">
          {DESCRIPTION}
        </p>
        <Button className="mt-7" to={BUTTON_URL} size="sm" theme="gray-outline">
          {BUTTON_TEXT}
        </Button>
      </div>
    </div>
  </section>
);

export default NotificationCenter;
