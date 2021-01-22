import React from 'react';
import Input from '../components/input/Input';

export default {
  title: 'Bimbau/Input',
  component: Input,
  
}

export const Default = () => <Input placeholder={'Default Input'}  />;
export const Forms = () => <Input placeholder={'Forms Input'}  type={'form'}/>;
export const disabled = () => <Input placeholder={'Disabled Input'} disabled/>;

