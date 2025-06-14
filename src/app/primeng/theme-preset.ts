import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      500: '#005142',         // Your custom primary color
      50: '#e6f1ee',
      100: '#cce2dd',
      200: '#99c5bb',
      300: '#66a898',
      400: '#338b76',
      600: '#004739',
      700: '#003b2f',
      800: '#003026',
      900: '#00241c',
      950: '#001a13'
    }
  }
});

export default preset;
