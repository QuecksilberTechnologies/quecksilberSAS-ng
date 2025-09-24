import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        // primary: {
        //   50: '#f6f9ff',
        //   100: '#d2e2fd',
        //   200: '#aecbfb',
        //   300: '#8ab5f9',
        //   400: '#669ef7',
        //   500: '#4287f5',
        //   600: '#3873d0',
        //   700: '#2e5fac',
        //   800: '#244a87',
        //   900: '#1a3662',
        //   950: '#11223d',
        // },
        primary: palette('#4287f5'),
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
        // primary: {
        //   50: '#f6f9ff',
        //   100: '#d2e2fd',
        //   200: '#aecbfb',
        //   300: '#8ab5f9',
        //   400: '#669ef7',
        //   500: '#4287f5',
        //   600: '#3873d0',
        //   700: '#2e5fac',
        //   800: '#244a87',
        //   900: '#1a3662',
        //   950: '#11223d',
        // },
        primary: palette('#4287f5'),
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
