import styled from 'styled-components';

import ResizableSection from '../elems/ResizableSection';

export const Section = styled(ResizableSection)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Video = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    margin: auto;
    width: 650px;
    max-width: 100vw;
`;