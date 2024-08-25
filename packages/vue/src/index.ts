import { defineCustomElement } from 'vue';
import Button from './Button.ce.vue';

const CustomButton = defineCustomElement(Button);

export { CustomButton };

declare module 'vue' {
  export interface GlobalComponents {
    CustomButton: typeof CustomButton;
  }
}
