import React, { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface DefaultControl {
  type: 'string' | 'boolean' | 'number' | 'select';
}

export interface StringControl extends DefaultControl {
  type: 'string';
}

export interface BooleanControl extends DefaultControl {
  type: 'boolean';
}

export interface NumberControl extends DefaultControl {
  type: 'number';
  min?: number;
  max?: number;
}

export interface SelectControl extends DefaultControl {
  type: 'select';
  options: string[];
}

export type ControllerConfig = {
  name: string;
  description: string;
  defaultValue?: string | boolean | number;
  control: StringControl | BooleanControl | NumberControl | SelectControl;
};

export type ComponentConfig = {
  title: string;
  controllers: ControllerConfig[]
  template: (props: any) => ReactNode;
}

export type KompisProps = {
  components: ComponentConfig[];
  defaultTheme?: Theme;
};