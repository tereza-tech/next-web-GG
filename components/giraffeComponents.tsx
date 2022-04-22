import React, { useState } from 'react';
import { BackgroundImage, Center, Text, Box, Image } from '@mantine/core';

export function Logo() {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" className="h-44 w-44">
      <BackgroundImage
        src="Logo.png"
        radius="sm" className="h-44 w-44"
      >
        <Center p="md" className="h-44 w-44">
         
        </Center>
      </BackgroundImage>
    </Box>
  );
}

export function GiraffeLogo() {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" className="h-44 w-44">
      <BackgroundImage
        src="Logo.png"
        radius="sm" className="h-44 w-44"
      >
        <Center p="md" className="h-44 w-44">
         
        </Center>
      </BackgroundImage>
    </Box>
  );
}