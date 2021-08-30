import { useState, useEffect } from 'react';

export type Dimensions = {width: number, height: number};

export function useWindowDimensions(): Dimensions {
    const [windowDimensions, setWindowDimensions] = useState<Dimensions>({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
