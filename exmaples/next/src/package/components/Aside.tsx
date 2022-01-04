import React, { useContext } from 'react';
import Image from 'next/image';
import { ComponentConfig } from '../types';
import { NavContext } from '../providers/NavProvider';

type Props = {
  components: ComponentConfig[];
}

const Aside: React.FC<Props> = ({ components }) => {
  const { index, setIndex } = useContext(NavContext);

  return (
    <aside className="flex flex-col w-full">
      <div className="flex-none h-24">
        <div className="flex justify-center py-4">
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
        </div>
      </div>
      <div className='px-3 flex-auto'>
        <div className='text-underline'>
          <h2 className='text-md'>Components</h2>
        </div>
        <div className='flex-auto'>
          <div>
            {components.map((component, compIndex) => {
              const isSelected = compIndex === index;

              return (
                <a key={component.title} className='block text-sm py-1 cursor-pointer' onClick={(e) => {
                  e.preventDefault();
                  setIndex(compIndex);
                }}>
                  <span>{component.title} {isSelected ? 'Y' : 'N'}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;