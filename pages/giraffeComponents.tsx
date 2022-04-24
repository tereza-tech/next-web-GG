import React, { useState } from 'react';
import { Image } from '@mantine/core';

export function Logo() {
  return (
    <div style={{ width: 'calc(60px + 9.7vw)', marginTop: 30}}>
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
    <div style={{ width: 'calc(30px + 7vw)', marginTop: 53}}>
      <Image
        radius="md"
        src="/Giraffe_logo.png"
        alt="Which Way logo"
        id="rtlGf"
      />
    </div>
  );
}