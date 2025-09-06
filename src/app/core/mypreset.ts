import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#f4f5f8',
          100: '#c8cedd',
          200: '#9ca6c2',
          300: '#707fa6',
          400: '#45588b',
          500: '#193170',
          600: '#152a5f',
          700: '#12224e',
          800: '#0e1b3e',
          900: '#0a142d',
          950: '#060c1c',
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark: {
        primary: {
          50: '#23263a',
          100: '#2d3150',
          200: '#38406a',
          300: '#425084',
          400: '#4d5f9e',
          500: '#5870b8',
          600: '#6a8ad1',
          700: '#8baae0',
          800: '#b0c7ee',
          900: '#d6e4fb',
          950: '#f3f7fe',
        },
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
    },
  },
});
