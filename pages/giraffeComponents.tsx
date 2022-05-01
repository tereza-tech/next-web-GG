import React, { useState } from 'react';
import { Image } from '@mantine/core';

export function Logo() {
  return (
    <div style={{ width: 'calc(60px + 10vw)', position: 'relative', left: '-5%', marginTop: 26}}>
      <Image
        radius="md"
        src="/Logo.png"
        alt="Which Way logo"
      />
    </div>
  );
}

export function GiraffeLogo() {
  return (
    <div style={{ width: 168, paddingTop: 5, paddingLeft: 15}}>
      <Image
        radius="md"
        src="/Giraffe_logo.png"
        alt="Which Way logo"
        id="rtlGf"
      />
    </div>
  );
}

export function SocialButtons() {
  return (
    <div style={{ width: 168, paddingTop: 5, paddingLeft: 15}}>
      <Image
        radius="md"
        src="/icons/instagram.svg"
        alt="Which Way logo"
      />
      <Image
        radius="md"
        src="/icons/messenger.svg"
        alt="Which Way logo"
      />
      <Image
        radius="md"
        src="/icons/whatsapp.svg"
        alt="Which Way logo"
      />
      <Image
        radius="md"
        src="/icons/google.svg"
        alt="Which Way logo"
      />
    </div>
  );
}
