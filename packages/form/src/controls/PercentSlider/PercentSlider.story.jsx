import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story/UappStory';
import createForm from '../../createForm';
import PercentSlider from './PercentSlider';
import FormDebug from '../../FormDebug';

const PercentSliderFormView = props => (
  <Form>
    <Field {...props.control('slider')} />
    <FormDebug {...props} />
  </Form>
);


const PercentSliderForm = createForm({
  view: PercentSliderFormView,
  initialValues: {
    slider: 10,
  },
  controls: {
    slider: {
      title: 'PercentSlider',
      component: PercentSlider,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module)
    .add('PercentSlider', () => {
      return (
        <Story>
          <PercentSliderForm />
        </Story>
      );
    });

