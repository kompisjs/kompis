import React, { useContext, useState } from 'react';
import { ComponentConfig, ControllerConfig } from '../types';
import { NavContext } from '../providers/NavProvider';

import Select from './Select';

type Props = {
  components: ComponentConfig[];
}

const buildStateFromControllers = (controllers: ControllerConfig[]): { [varname: string]: any } => {
  return controllers.reduce((prev, current) => {
    return {
      ...prev,
      [current.name]: current.defaultValue || ''
    }
  }, {});
}

const Main: React.FC<Props> = ({ components }) => {
  const { index } = useContext(NavContext);
  const { template, controllers } = components[index];
  const [state, setState] = useState(buildStateFromControllers(controllers));

  const handleChange = (name: string, value: string | number | boolean) => {
    setState({
      ...state,
      [name]: value
    })
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='flex-auto h-3/6 overflow-x-scroll'>
        <div className='p-4'>
          {template(state)}
        </div>
      </div>
      <div className='flex-initial h-2/5 overflow-x-scroll bg-sky-lightest border-t-2 border-sky-light dark:border-ink-base dark:bg-black'>
        <div className='p-4'>
          {controllers.map(controller => (
            <div key={controller.name}>
              <h5>{controller.name}</h5>
              {controller.control.type === 'string' && (
                <input type="text" value={state[controller.name]} onChange={(e) => handleChange(controller.name, e.target.value)} />
              )}
              {controller.control.type === 'number' && (
                <input type="number" value={state[controller.name]} onChange={(e) => handleChange(controller.name, e.target.value)} />
              )}
              {controller.control.type === 'boolean' && (
                <input type="checkbox" value={state[controller.name]} onChange={() => handleChange(controller.name, !state[controller.name])} />
              )}
              {controller.control.type === 'select' && (
                <Select options={controller.control.options} value={state[controller.name]} onChange={(value) => handleChange(controller.name, value)} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main;