import TrackerDisplay from '../components/TrackerDisplay';
import FormContainer from './FormContainer';

import GlassesContex from '../context/GlassesContext';

import { useGlassHandlers } from '../hooks/useGlassHandlers';

const TrackerContainer = () => {
  const gl = useGlassHandlers();
  const glasses = gl.glasses;
  return (
    <>
      <GlassesContex.Provider value={{ glasses }}>
        <TrackerDisplay />
      </GlassesContex.Provider>

      <FormContainer
        handleUpdate={gl.handleUpdate}
        handleEmpty={gl.handleEmpty}
      />
    </>
  );
};

export default TrackerContainer;
