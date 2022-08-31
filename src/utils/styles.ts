import { Screens } from '@tuantruong625/quotidian-component-library';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media (min-width: 640px) {
    max-width: ${Screens.xl};
  }
`
