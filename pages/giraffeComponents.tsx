import React, { useState } from 'react';
import { Image } from '@mantine/core';

export function Logo() {
  return (
    <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
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
    <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        src="/Giraffe_logo.png"
        alt="Which Way logo"
        id="rtlGf"
      />
    </div>
  );
}